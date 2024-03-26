import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcryptjs";
import { UserModel } from "./models/User.js";
import cookieParser from 'cookie-parser';

const saltKey = bcrypt.genSaltSync(10);
const jwtSecretKey = "sjvbisbbivsbbvksbvs";

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.CONNECTION_MONGO);

app.get("/test", (req, res) => {
  res.json("test linking here");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userCreation = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, saltKey),
    });
    res.json(userCreation);
  } catch {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDetails = await UserModel.findOne({ email });
  if (userDetails) {
    const passMatched = bcrypt.compareSync(password, userDetails.password);
    if (passMatched) {
      jwt.sign(
        { email: userDetails.email, id: userDetails._id },
        jwtSecretKey,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDetails);
        }
      );
    } else {
      res.status(422).json("password not matched");
    }
  } else {
    res.json("User is not  found");
  }
});

app.listen(4000);


app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecretKey, {}, async (err, userData) => {
      if (err) throw err;
      const {_id,email}=await UserModel.findOne(userData._id);
      res.json({_id,email});
    })
  }
  else {
    res.json(null)
  }
})