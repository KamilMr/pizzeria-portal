import React from 'react';
import styles from './TablesEvents.module.scss';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker';
import Button from '@material-ui/core/Button';


const Tables = (props) => {

  return ( 
    <Paper>
      {<h1>New Event</h1>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Choose Table</TableCell>
            <TableCell>Pick Date</TableCell>
            <TableCell>Add Title</TableCell>
            <TableCell>Add Notes</TableCell>
            <TableCell><Button>Save</Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <FormControl className={styles.table_narrow}>
                  <InputLabel id='table-number'>Table</InputLabel>
                  <Select labelId='table-number'>
                    <MenuItem value={`0`}>0</MenuItem>
                    <MenuItem value={`1`}>1</MenuItem>
                    <MenuItem value={`2`}>2</MenuItem>
                    <MenuItem value={`3`}>3</MenuItem>
                    <MenuItem value={`4`}>4</MenuItem>
                    <MenuItem value={`5`}>5</MenuItem>
                    <MenuItem value={`6`}>6</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </TableCell>
            <TableCell>
              <DateTimePicker />
            </TableCell>
            <TableCell>
              <form>
                <div >
                  <TextField
                    id="standard-multiline-flexible"
                    label="Title"
                    multiline
                    rowsMax = {2}
                    className={styles.textField}
                  />
                </div>
              </form>
            </TableCell>
            <TableCell>
              <form>
                <div >
                  <TextField
                    id="standard-multiline-flexible"
                    label="Notes"
                    multiline
                    rowsMax = {20}
                    className={styles.textField}
                  />
                </div>
              </form>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    
  );
};

Tables.prototype = {

};
 
export default Tables;
