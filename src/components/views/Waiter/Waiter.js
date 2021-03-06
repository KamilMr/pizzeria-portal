import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    updateTables: PropTypes.func,
    fetchTables: PropTypes.func,
    // w propTypes użyliśmy PropTypes.shape, który pozwala nam zdefiniować typy właściwości obiektu loading,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    //A skąd wzięła się ta funkcja? Została przekazana do propsa przez kontener komponentu – to tam przypisujemy do tego propsa następującą funkcję: () => dispatch(fetchFromAPI())
    fetchTables();  
  }

  renderActions(status, table){
    const { updateTables } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => updateTables(table, 'thinking')}>thinking</Button>
            <Button>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => updateTables(table, 'ordered')}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => updateTables(table, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => updateTables(table, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => updateTables(table, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => updateTables(table, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    //w dekonstrukcji propsów w metodzie render od razu dekonstruujemy również obiekt loading,

    const { loading: { active, error }, tables } = this.props;
    
    //stosujemy wyrażenie if...else if...else, w którym każdy blok kodu zawiera return.
    
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;