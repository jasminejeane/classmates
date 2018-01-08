import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       currentItem:
//     }
//   }

  render() {
    return (
      <div className="app">
        <header>
            <div className='wrapper'>
              <h1>Find Friends</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="classmateName" placeholder="Classmates Name" />
                <input type="phone" name="contact" placeholder="phone number" />
                <input type="email" name="contactInfo" placeholder="email" />
                <input type="url" name="url" placeholder="social media link" />
                <input type="text" name="moreinfo" placeholder="Other info" />
                <input type="text" name="yourName" placeholder="What's your name?" />
              <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
