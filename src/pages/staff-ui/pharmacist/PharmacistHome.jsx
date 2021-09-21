import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(id, patientname, diagnosis, action) {
  return {
    id,
    patientname,
    diagnosis,
    action,
    druglist: [
      { medicine: "panadol", dosage: "three time" },
      { medicine: "c vitamin", dosage: "two time"},
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.patientname}</TableCell>
        <TableCell align="right">{row.diagnosis}</TableCell>
        <TableCell align="right">{row.action}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                Medicine List
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Medicine Name</TableCell>
                    <TableCell>Dosage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.druglist.map((drugRow) => (
                    <TableRow key={drugRow.medicine}>
                      <TableCell component="th" scope="row">
                        {drugRow.medicine}
                      </TableCell>
                      <TableCell>{drugRow.dosage}</TableCell>
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
    patientname: PropTypes.string.isRequired,
    diagnosis: PropTypes.string.isRequired,
    druglist: PropTypes.arrayOf(
      PropTypes.shape({
        dosage: PropTypes.string.isRequired,
        medicine: PropTypes.string.isRequired,
      }),
    ).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(123654, "Namal bandara", "Diabetic"),
  createData(124553, "Asanka", "Fever"),
  createData(123654, "Namal bandara", "Diabetic"),
];

export default function CollapsibleTable() {
  return (
    <div>
    <h3 style={{marginLeft: 40, marginTop: 30}}>Patient Prescription</h3>
    <TableContainer style={{width:'80%', marginLeft: 60, marginTop: 40}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{backgroundColor:'#005792', width:'50%'}}>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Patient Name</TableCell>
            <TableCell align="right">Diagnosis</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
