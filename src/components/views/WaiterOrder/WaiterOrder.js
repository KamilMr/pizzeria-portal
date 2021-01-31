import React from 'react';
import styles from './WaiterOrder.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const menuContent = [
  {id: '1', dish: 'Placki Ziemniaczane', options: 'cebula  2', cost: 12},
  {id: '2', dish: 'Naleśniki z jabłkami', options: 'polewa  2', cost: 12},
  {id: '3', dish: 'Placki z grzybami', options: 'sos  2', cost: 12},
  {id: '4', dish: 'Zupa curry', options: 'pieczarki  2', cost: 12},
  {id: '5', dish: 'Kontlet schabowy z ziemniakami', options: 'surówka  2', cost: 12},
  {id: '6', dish: 'Rosół', options: 'wkładka mięsna  2', cost: 12},
];

// const countPrice = price => {
//   let adding = price + 
  
//   return ()
// }

const Waiter = () => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <FormControl>
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
          </TableCell>
          <TableCell>Cost</TableCell>
          <TableCell><Button>Save</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Menu: </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>nr: </TableCell>
          <TableCell>Dish </TableCell>
          <TableCell>Additions </TableCell>
          <TableCell>Price </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {menuContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              <FormControl component="fieldset">
                <RadioGroup>
                  <FormControlLabel value="dish" control={<Radio />} label={row.dish}/>
                </RadioGroup>
              </FormControl>
            </TableCell>
            <TableCell>
              <FormControl component="fieldset">
                <RadioGroup>
                  <FormControlLabel value="additions" control={<Radio />} label={row.options + ' zł'}  />
                </RadioGroup>
              </FormControl>
            </TableCell>
            <TableCell>
              {row.cost + ' zł'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);


 
export default Waiter;