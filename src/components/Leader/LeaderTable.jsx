import React, { useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const LeaderTable = ({data}) => {

  return (
    <>
     <TableContainer component={Paper} sx={{ maxHeight: "800px" }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "700",
                background: "#4C49ED",
                color: "white",
                fontSize: "16px",
              }}
            >
              Rank
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "700",
                background: "#4C49ED",
                color: "white",
                fontSize: "16px",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "700",
                background: "#4C49ED",
                color: "white",
                fontSize: "16px",
              }}
            >
              Score
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "700",
                background: "#4C49ED",
                color: "white",
                fontSize: "16px",
              }}
            >
              Language
            </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
           {data.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ fontSize: "16px" }} component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>{row.name}</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>
                {row.score}
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>
                {row.language}
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default LeaderTable