const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Memeriksa apakah password cocok
        if (user.password === password) {
          res.json("Success"); // Mengirim respons berhasil jika password cocok
        } else {
          res.json("The password is incorrect"); // Mengirimkan pesan jika password salah
        }
      } else {
        res.json("Email doesn't exist"); // Mengirimkan pesan jika email tidak ditemukan
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Server error", details: err });
    });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => req.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("berhasil terconnect dengan database");
});
