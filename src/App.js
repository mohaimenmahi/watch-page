import React, { Component } from 'react';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-6">
                <h1 className="main-heading">Give Stylish gift to Yourself!</h1>
                <p className="main-subtitle">
                  Get the perfect timepiece to complete the perfect look.
                  Pick a watch that screams you from our definitive list of fashionable watches from the very best brands.
                </p>
                <a className="btn">
                  Get From Backpack
                </a>
              </div>
              <div className="column-3">
                <img className="header-img" src="http://uploads.webflow.com/5a8a007a54ea7a0001463f06/5a8a010dd9716c0001a52752_potential-header-2.png" />
              </div>
            </div>
          </div>
        </header>
        <SectionOne />
        <SectionTwo />
      </div>
    );
  }
}

export default App;
