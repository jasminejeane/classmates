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


    return (

      <div className="app">
        <header>
            <div className='wrapper'>
              <h1>Find our Classmates </h1>
              <p>Oakland Tech Class of 2002</p>
              <img className="pull-right" src="./images/bulldog4.png"/>
            </div>

        </header>
        <div className='outline'>
          <div className='note'>
          <p>Hello,</p>
          <p>We can't find these classmates :(. May you help us?</p>

          <p>If you happen to recognize a classmate here that you know how to get in touch with...
            Please fill out the form below with their contact and your name
            so we can be sure to include them in upcoming class of 2002 events.</p>

          </div>
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

            <div className='col-xs-3 text-center'>
          <a>
          <img alt='Daniel Alem' src='./images/1.png'/>
          <p className='text-center'>Daniel Alem</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Shavon Anderson' src='./images/2.png'/>
          <p className='text-center'>Shavon Anderson</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Jodi Brodnax' src='./images/3.png'/>
          <p className='text-center'>Jodi Brodnax</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Johnnie Brown' src='./images/4.png'/>
          <p className='text-center'>Johnnie Brown</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Iesha Burks' src='./images/5.png'/>
          <p className='text-center'>Iesha Burks</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Dawnesha Carmier' src='./images/6.png'/>
          <p className='text-center'>Dawnesha Carmier</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Adrian Carmona' src='./images/7.png'/>
          <p className='text-center'>Adrian Carmona</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Shalina Casey' src='./images/8.png'/>
          <p className='text-center'>Shalina Casey</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Raina Celnik' src='./images/9.png'/>
          <p className='text-center'>Raina Celnik</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Emmanuel Chavez' src='./images/10.png'/>
          <p className='text-center'>Emmanuel Chavez</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Biniah Cherry' src='./images/11.png'/>
          <p className='text-center'>Biniah Cherry</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Myesha Daniels' src='./images/12.png'/>
          <p className='text-center'>Myesha Daniels</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Hong Dao' src='./images/13.png'/>
          <p className='text-center'>Hong Dao</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Al David' src='./images/14.png'/>
          <p className='text-center'>Al David</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Marivel Dominguez' src='./images/15.png'/>
          <p className='text-center'>Marivel Dominguez</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Quiana Ellis' src='./images/16.png'/>
          <p className='text-center'>Quiana Ellis</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Yasmine Fisher' src='./images/17.png'/>
          <p className='text-center'>Yasmine Fisher</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Erika Flores' src='./images/18.png'/>
          <p className='text-center'>Erika Flores</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Laura Fortiz' src='./images/19.png'/>
          <p className='text-center'>Laura Fortiz</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Carla Fuller' src='./images/20.png'/>
          <p className='text-center'>Carla Fuller</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Carletta Fuller' src='./images/21.png'/>
          <p className='text-center'>Carletta Fuller</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Robel Gebremedhin' src='./images/22.png'/>
          <p className='text-center'>Robel Gebremedhin</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Patricia Gonzalez' src='./images/23.png'/>
          <p className='text-center'>Patricia Gonzalez</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Perence Green' src='./images/24.png'/>
          <p className='text-center'>Perence Green</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Shirley Gucor' src='./images/25.png'/>
          <p className='text-center'>Shirley Gucor</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Ebone Guition' src='./images/26.png'/>
          <p className='text-center'>Ebone Guition</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Nailah Hepburn' src='./images/27.png'/>
          <p className='text-center'>Nailah Hepburn</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Johnathan Ide' src='./images/28.png'/>
          <p className='text-center'>Johnathan Ide</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Jorge Ignacio' src='./images/29.png'/>
          <p className='text-center'>Jorge Ignacio</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Stephen Johns' src='./images/30.png'/>
          <p className='text-center'>Stephen Johns</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Maricka Johnson' src='./images/31.png'/>
          <p className='text-center'>Maricka Johnson</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Nepheg Jones' src='./images/32.png'/>
          <p className='text-center'>Nepheg Jones</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Yoeurn Koeu' src='./images/33.png'/>
          <p className='text-center'>Yoeurn Koeu</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Brook Kuma' src='./images/34.png'/>
          <p className='text-center'>Brook Kuma</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Cesar Leyva' src='./images/35.png'/>
          <p className='text-center'>Cesar Leyva</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Bao Lu' src='./images/36.png'/>
          <p className='text-center'>Bao Lu</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Jenny Luu' src='./images/37.png'/>
          <p className='text-center'>Jenny Luu</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Jenel Martin' src='./images/38.png'/>
          <p className='text-center'>Jenel Martin</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Ana Martinez' src='./images/39.png'/>
          <p className='text-center'>Ana Martinez</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='David Martinez' src='./images/40.png'/>
          <p className='text-center'>David Martinez</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Tanika Miranda' src='./images/41.png'/>
          <p className='text-center'>Tanika Miranda</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Lakeita Morgan' src='./images/42.png'/>
          <p className='text-center'>Lakeita Morgan</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Mario Negron' src='./images/43.png'/>
          <p className='text-center'>Mario Negron</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Binh Nguyen' src='./images/44.png'/>
          <p className='text-center'>Binh Nguyen</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='--' src='./images/45.png'/>
          <p className='text-center'>--</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Kimhong Nguyen' src='./images/47.png'/>
          <p className='text-center'>Kimhong Nguyen</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Kristine Nguyen' src='./images/48.png'/>
          <p className='text-center'>Kristine Nguyen</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Mary Nguyen' src='./images/49.png'/>
          <p className='text-center'>Mary Nguyen</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Thuong Nguyen' src='./images/50.png'/>
          <p className='text-center'>Thuong Nguyen</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Au Brie Nuno-Pelayo' src='./images/51.png'/>
          <p className='text-center'>Au Brie Nuno-Pelayo</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Angelica Ochoa' src='./images/52.png'/>
          <p className='text-center'>Angelica Ochoa</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Snehal Patel' src='./images/53.png'/>
          <p className='text-center'>Snehal Patel</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Laquisha Patterson' src='./images/54.png'/>
          <p className='text-center'>Laquisha Patterson</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Chu Mei Peng' src='./images/55.png'/>
          <p className='text-center'>Chu Mei Peng</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Natisha Perkins' src='./images/56.png'/>
          <p className='text-center'>Natisha Perkins</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Princess Pugh' src='./images/57.png'/>
          <p className='text-center'>Princess Pugh</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Catherine Rash' src='./images/58.png'/>
          <p className='text-center'>Catherine Rash</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Benjamin Rathbone-Webber' src='./images/59.png'/>
          <p className='text-center'>Benjamin Rathbone-Webber</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Esmeralda Sandoval' src='./images/60.png'/>
          <p className='text-center'>Esmeralda Sandoval</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Ivan Satterfield ' src='./images/61.png'/>
          <p className='text-center'>Ivan Satterfield </p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Thedrika Sayles' src='./images/62.png'/>
          <p className='text-center'>Thedrika Sayles</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Kiesha Shanks' src='./images/63.png'/>
          <p className='text-center'>Kiesha Shanks</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Philip Sien' src='./images/64.png'/>
          <p className='text-center'>Philip Sien</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Calvin Sin' src='./images/65.png'/>
          <p className='text-center'>Calvin Sin</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Brisa Solano' src='./images/66.png'/>
          <p className='text-center'>Brisa Solano</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Denny Tang' src='./images/67.png'/>
          <p className='text-center'>Denny Tang</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Eva Thomas' src='./images/68.png'/>
          <p className='text-center'>Eva Thomas</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='David Tran' src='./images/69.png'/>
          <p className='text-center'>David Tran</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Johnson Trvong' src='./images/70.png'/>
          <p className='text-center'>Johnson Trvong</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Jose Vanez' src='./images/71.png'/>
          <p className='text-center'>Jose Vanez</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='-- ' src='./images/72.png'/>
          <p className='text-center'>-- </p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Arrieanne Ware' src='./images/74.png'/>
          <p className='text-center'>Arrieanne Ware</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Asha Washington' src='./images/75.png'/>
          <p className='text-center'>Asha Washington</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Sarah Welch' src='./images/76.png'/>
          <p className='text-center'>Sarah Welch</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Domonique Wilson' src='./images/77.png'/>
          <p className='text-center'>Domonique Wilson</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Wojiang Xie' src='./images/78.png'/>
          <p className='text-center'>Wojiang Xie</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Rosalin Xuneax' src='./images/79.png'/>
          <p className='text-center'>Rosalin Xuneax</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Shangxiuzi Yan' src='./images/80.png'/>
          <p className='text-center'>Shangxiuzi Yan</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Huang Yut' src='./images/81.png'/>
          <p className='text-center'>Huang Yut</p>
        </a>
        </div><div className='col-xs-3 text-center'>
          <a>
          <img alt='Wei Hua Zhang' src='./images/82.png'/>
          <p className='text-center'>Wei Hua Zhang</p>
        </a>
        </div>
        </section>

        </div>


      </div>
    );
  }
}

export default App;
