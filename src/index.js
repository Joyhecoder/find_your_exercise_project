import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Exercise from './components/Exercise'
import MyList from './components/MyList'

import reducers from './reducers/reducer'
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const store= createStore(reducers)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/exercise' element={<Exercise />} />
          <Route path='/mylist' element={<MyList />} />
        </Routes>
      
      </BaseLayout>
    </Router>
    
  </React.StrictMode>
  </Provider>
);


