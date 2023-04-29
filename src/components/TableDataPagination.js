import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";

export default function DenseTable() {
  const count = useSelector((state) => {
    return state.count;
  });
  const dispatch = useDispatch();

  const toDoPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(count.length / toDoPerPage);

  const lastIndex = currentPage * toDoPerPage;

  const firstIndex = lastIndex - toDoPerPage;

  let totalPages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    totalPages.push(i);
  }

  const visibeData = count.slice(firstIndex, lastIndex);
  function deleteclick(indexValue) {
    dispatch({
      type: "DELETE_DATA",
      payload: indexValue,
    });
  }

  console.log(visibeData);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
          className="class1"
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "red", color: "white" }}>
              <TableCell style={{ color: "white" }}>S.NO </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                USER NAME
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                PASSWORD
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                EMAIL
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                PHONE
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                EDIT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibeData.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child npm th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.index}
                </TableCell>
                <TableCell align="center">{item.fName}</TableCell>
                <TableCell align="center">{item.password}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.number}</TableCell>
                <TableCell align="center">
                  <button onClick={() => deleteclick(index)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {totalPages.map((val, index) => (
          <span key={index}>
            <button onClick={() => setCurrentPage(val)}>{val}</button>
          </span>
        ))}
      </div>
    </>
  );
}
