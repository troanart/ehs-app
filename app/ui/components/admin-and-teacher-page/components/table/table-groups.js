"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.studentsCount}</TableCell>
        <TableCell align="center">{row.teacher}</TableCell>
        <TableCell align="center">
          <div className="text-sky-600">{row.income}</div>
        </TableCell>
        <TableCell align="center">
          <div className="text-green-600">{row.cleareIncome}</div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Дані групи
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Студенти</TableCell>
                    <TableCell>Контакти</TableCell>
                    <TableCell>Вік</TableCell>
                    <TableCell>Тариф</TableCell>
                    <TableCell>Кіл-ть занять</TableCell>
                    <TableCell>Відвіданих занять</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell component="th" scope="row">
                        {student.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {student.contacts}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {student.age}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {student.tariff}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {student.allLessons}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {student.checkLessons}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    studentsCount: PropTypes.number.isRequired,
    teacher: PropTypes.string.isRequired,
    income: PropTypes.number.isRequired,
    cleareIncome: PropTypes.number.isRequired,
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        contacts: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        tariff: PropTypes.number.isRequired,
        allLessons: PropTypes.number.isRequired,
        checkLessons: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data");
        const data = await response.json();
        setGroups(data[2]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className="font-semibold text-base">
              Назва групи
            </TableCell>
            <TableCell className="font-semibold text-base" align="center">
              Тип групи
            </TableCell>
            <TableCell className="font-semibold text-base" align="center">
              Кількість студентів
            </TableCell>
            <TableCell className="font-semibold text-base" align="center">
              Викладач
            </TableCell>
            <TableCell className="font-semibold text-base" align="center">
              Дохід
            </TableCell>
            <TableCell className="font-semibold text-base" align="center">
              Прибуток
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((group) => (
            <Row key={group.id} row={group} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
