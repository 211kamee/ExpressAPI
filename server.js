// type: "module" (syntax)
import express from "express";
import mongoose from "mongoose";

// type: "commonjs" (syntax)
// const express = require("express");
// const mongoose = require("mongoose");
import Employees from "./models/EmployeeData.js";

const app = express();
const port = 3000;

// For our express app to understand JSON
app.use(express.json());

// Root Route
app.get(`/`, (req, res) => {
  res.send(`Example Express API working!!!`);
});

// const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(
    `mongodb+srv://youtubeclone:211kamee@cluster0.ganmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log(`Connedted to DB`);
  })
  .catch((err) => {
    console.log(err);
  });

// Create
app.post(`/employee`, async (req, res) => {
  try {
    const data = await Employees.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(`Message: ${error.message}`);
  }
});

// Read
app.get(`/employee`, async (req, res) => {
  try {
    const data = await Employees.find();
    res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(`Message: ${error.message}`);
  }
});

//Read One
app.get(`/employee/:arg`, async (req, res) => {
  try {
    const { arg } = req.params;
    const data = await Employees.findOne({ _id: arg });
    if (!data) {
      res.status(404).json({ Message: `Invalid ID: ${arg}` });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(`Message: ${error.message}`);
  }
});

// Update
app.put(`/update/:arg`, async (req, res) => {
  try {
    const { arg } = req.params;
    const data = await Employees.findByIdAndUpdate(arg, req.body);
    if (!data) {
      return res.status(404).json({ Message: `Data not found. ID: '${arg}' Invalid` });
    }
    res.status(200).json(await Employees.findById(arg));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(`Message: ${error.message}`);
  }
});

app.delete(`/delete/:arg`, async (req, res) => {
  try {
    const { arg } = req.params;
    const data = await Employees.findByIdAndDelete(arg);
    if (!data) {
      return res.status(404).json({ Message: `Data not found. ID: '${arg}' Invalid` });
    }
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  } 
});
