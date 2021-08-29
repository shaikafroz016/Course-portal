import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import ScrollButton from './components/scrolltotop/ScrollButton';


const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div >
            <Main />
            <ScrollButton />
          </div>
          
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
