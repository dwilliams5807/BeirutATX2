import React from 'react';

import Header from './components/Header/Header.js';
import Main from './components/pages/Main/Main.js';
import Bumper from './components/global/Bumper';

import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './components/reducers/store/store.js'


function App() {
    return (
      // <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
         <div>
          <Header />
          <Main />
          <Bumper/>
         </div>
    //  </PersistGate>
    // </Provider>
    );
  }

export default App;