import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../App.css";
import DenseTable from "./TableDataPagination";
import { useDispatch, useSelector } from "react-redux";
export default function BasicTextFields() {
  const [data, setData] = useState({});
  //const [tableData, setTableData] = useState([]);
  const [isValue, setIsValue] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  // console.log("::::::>intial state", count);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let { fName = "", password = "", email = "", number = "" } = data;

  function handleSubmit(e) {
    e.preventDefault();
    // if (fName.length < 6) {
    //   alert("user name atleast  6 characters");
    // } else if (password.length < 6) {
    //   alert("password atleast  6 characters");
    // } else if (number.length !== 10) {
    //   alert("enter valid mobile number");
    // } else if (!mailformat.test(email)) {
    //   alert("enter valid email");
    // } else {
    // setTableData([
    //   ...tableData,
    //   { index: tableData.length + 1, fName, password, email, number },
    // ]);
    setData({});
    setIsValue(true);
    // }
    dispatch({
      type: "SAVED DATA",
      payload: {
        index: count.length + 1,
        fName: fName,
        password: password,
        email: email,
        number: number,
      },
    });
  }

  return (
    <>
      <div className="dataContainer">
        <div className="loginContainer">
          <Box
            className="loginContent"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                onChange={handleChange}
                name="fName"
                id="1"
                label="First Name"
                variant="outlined"
                value={data?.fName || ""}
              />
            </div>

            <div>
              <TextField
                type="password"
                onChange={handleChange}
                name="password"
                id="2"
                label="Password"
                variant="outlined"
                value={data?.password || ""}
              />
            </div>

            <div>
              <TextField
                onChange={handleChange}
                name="email"
                id="3"
                label="Gmail"
                variant="outlined"
                value={data?.email || ""}
              />
            </div>

            <div>
              <TextField
                type="number"
                onChange={handleChange}
                name="number"
                id="4"
                label="Phone"
                variant="outlined"
                value={data?.number ?? ""}
              />
            </div>
            <div className="buttonContent">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </Box>
        </div>
        <div className="tableContainer">{isValue && <DenseTable />}</div>
      </div>
    </>
  );
}
