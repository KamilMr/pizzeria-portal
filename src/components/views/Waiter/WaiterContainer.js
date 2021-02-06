import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState , updateTablesAPI} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTables: (table,status) => dispatch(updateTablesAPI(table, status)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
