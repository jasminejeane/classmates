import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      classmateName: '',
      contact: '',
      email: '',
      url: '',
      moreInfo: '',
      yourName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit(e){
  e.preventDefault();
  let classmatesRef = firebase.database().ref('classmates');
  let classmate = {
    classmateName: this.state.classmateName,
    contact: this.state.contact,
    email: this.state.email,
    url: this.state.url,
    moreInfo: this.state.moreInfo,
    yourName: this.state.yourName
  }
  classmatesRef.push(classmate);
  this.setState({
    classmateName: '',
    contact: '',
    email: '',
    url: '',
    moreInfo: '',
    yourName: ''
  })

}

  render() {
    let element = '<section>';

    for(var i = 1; i < 20; i++){

      element += `<img alt='' src=./images/${i}.png>`
    }

    element += '</section>';

    return (

      <div className="app">
        <header>
            <div className='wrapper'>
              <h1>Find Friends</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item col-xs-4'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="classmateName" placeholder="Classmates Name"
                  onChange={this.handleChange} value={this.state.classmateName} />
                <input type="phone" name="contact" placeholder="phone number"
                  onChange={this.handleChange} value={this.state.contact} />
                <input type="email" name="email" placeholder="email"
                  onChange={this.handleChange} value={this.state.email} />
                <input type="url" name="url" placeholder="social media link"
                  onChange={this.handleChange} value={this.state.url} />
                <input type="text" name="moreInfo" placeholder="Other info"
                  onChange={this.handleChange} value={this.state.moreInfo} />
                <input type="text" name="yourName" placeholder="What's your name?"
                  onChange={this.handleChange} value={this.state.yourName} />
              <button>Add Item</button>
                <button type="button" className="btn btn-primary">Primary</button>

              </form>
          </section>
          {element}
          <section className='col-xs-8'>
            <div className='col-xs-3'>
              <img src="./images/1.png"/>
            </div>
            <div className='col-xs-3'>
          testing
            </div>
            <div className='col-xs-3'>
          testing
            </div>
            <div className='col-xs-3'>
          testing
            </div>
          </section>
        </div>


      </div>
    );
  }
}

export default App;
