import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
// import Tables from './components/views/Tables/Tables';
// import Waiter from './components/views/Waiter/Waiter';
// import Kitchen from './components/views/Kitchen/Kitchen';
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className="App">
          <header className="App-header">
            <Login text = 'hello'/>
            <p>
          Hello <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
          Learn React
            </a>
          </header>
        </div>
        {/* <Route exact path='/login' component={Login} /> */}
        {/* <Route exact path='/tables' component={Tables} />
        <Route exact path='/waiter' component={Waiter} />
        <Route exact path='/kitchen' component={Kitchen} /> */}
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
