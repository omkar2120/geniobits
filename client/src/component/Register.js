import React, { useState } from "react";
import { Typography, Box, TextField } from "@material-ui/core";
import { TextFieldsOutlined, TextFieldsRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";

const Register = () => {
  const [data, setData] = useState({
    fname: "",
    mname: "",
    lname: "",
    no: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const sendData = () => {
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div style={{ height: "100vh", margin: "20px" }}>
        <div style={{ display: "flex" }}>
          <div>
            <img
              height={300}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="img"
            ></img>
          </div>
          <div>
            <Typography>Employee Full Name</Typography>
            <div></div>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              type="name"
              placeholder="First Name"
              name="fname"
              value={data.fname}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Middle Name"
              variant="outlined"
              type="name"
              name="mname"
              placeholder="Middle Name"
              value={data.mname}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lname"
              type="name"
              placeholder="Last Name"
              value={data.lname}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              name="no"
              type="number"
              placeholder="Employee  Id"
              value={data.no}
              onChange={handleChange}
            />
          </div>
        </div>
        <Typography>Create Login</Typography>
        <Button varient="outlined">Cancel</Button>

        <Button varient="contain" onClick={sendData}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Register;
