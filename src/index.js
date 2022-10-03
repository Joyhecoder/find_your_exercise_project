import React from 'react';
import ReactDOM from 'react-dom/client';
import reduxThunk from 'redux-thunk';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Exercise from './components/Exercise'
import MyList from './components/MyList'
// import Details from './components/Details'

import reducers from './reducers/reducer'
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

const store= createStore(reducers, null, 
  
  compose(applyMiddleware(reduxThunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
  )
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/exercise' element={<Exercise />} />
          {/* <Route path='/details/:exerciseID' element={<Details />} /> */}
          <Route path='/mylist' element={<MyList />} />
        </Routes>
      
      </BaseLayout>
    </Router>
  </Provider>
);


