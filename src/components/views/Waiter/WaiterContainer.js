import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState , updateTablesAPI} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTables: content => {
    return (
      dispatch(updateTablesAPI({
        id: content.id,
        status: content.status,
      })),
      console.log(content)
    );

  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
