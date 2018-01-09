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

    for(var i = 1; i < 83; i++){

      element += `<div className='col-xs-3'> <img alt='' src='./images/${i}.png'/> </div>`
    }

    element += '</section>';


    return (

      <div className="app">
        <header>
            <div className='wrapper'>
              <h1>Find our Classmates </h1>
              <p>Oakland Tech Class of 2002</p>

            </div>
        </header>
        <div className='container'>
          <section className='add-item col-xs-4'>
              <form onSubmit={this.handleSubmit}>
                <input className="input-item" type="text" name="classmateName" placeholder="Classmates Name"
                  onChange={this.handleChange} value={this.state.classmateName} />
                <input className="input-item" type="phone" name="contact" placeholder="phone number"
                  onChange={this.handleChange} value={this.state.contact} />
                <input className="input-item" type="email" name="email" placeholder="email"
                  onChange={this.handleChange} value={this.state.email} />
                <input className="input-item" type="url" name="url" placeholder="social media link"
                  onChange={this.handleChange} value={this.state.url} />
                <input className="input-item" type="text" name="moreInfo" placeholder="Other info"
                  onChange={this.handleChange} value={this.state.moreInfo} />
                <input className="input-item" type="text" name="yourName" placeholder="What's your name?"
                  onChange={this.handleChange} value={this.state.yourName} />
                <button>Add Info</button>

              </form>
          </section>
          <section className='col-xs-8'>
<div className='col-xs-3'> <img alt='' src='./images/1.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/2.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/3.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/4.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/5.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/6.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/7.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/8.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/9.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/10.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/11.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/12.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/13.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/14.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/15.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/16.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/17.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/18.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/19.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/20.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/21.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/22.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/23.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/24.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/25.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/26.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/27.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/28.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/29.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/30.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/31.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/32.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/33.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/34.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/35.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/36.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/37.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/38.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/39.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/40.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/41.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/42.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/43.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/44.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/45.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/46.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/47.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/48.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/49.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/50.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/51.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/52.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/53.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/54.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/55.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/56.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/57.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/58.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/59.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/60.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/61.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/62.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/63.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/64.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/65.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/66.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/67.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/68.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/69.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/70.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/71.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/72.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/73.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/74.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/75.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/76.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/77.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/78.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/79.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/80.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/81.png'/> </div><div className='col-xs-3'> <img alt='' src='./images/82.png'/> </div>
          </section>
        </div>


      </div>
    );
  }
}

export default App;
