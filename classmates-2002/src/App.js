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
                <input className="input-item classmateName" type="text" name="classmateName" placeholder="Classmates Name"
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
                <button>ADD INFO</button>

              </form>
          </section>
          <section className='col-xs-8'>
            <div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Karina Aguilar' src='./images/1.png'/>
                      <p className='text-center'>Karina Aguilar</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Daniel Alem' src='./images/2.png'/>
                      <p className='text-center'>Daniel Alem</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Shavon Anderson' src='./images/3.png'/>
                      <p className='text-center'>Shavon Anderson</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Johnnie Brown' src='./images/4.png'/>
                      <p className='text-center'>Johnnie Brown</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Iesha Burks' src='./images/5.png'/>
                      <p className='text-center'>Iesha Burks</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Dawnesha Carmier' src='./images/6.png'/>
                      <p className='text-center'>Dawnesha Carmier</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Adrian Carmona' src='./images/7.png'/>
                      <p className='text-center'>Adrian Carmona</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Shalina Casey' src='./images/8.png'/>
                      <p className='text-center'>Shalina Casey</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Raina Celnik' src='./images/9.png'/>
                      <p className='text-center'>Raina Celnik</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Emmanuel Chavez' src='./images/10.png'/>
                      <p className='text-center'>Emmanuel Chavez</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Biniah Cherry' src='./images/11.png'/>
                      <p className='text-center'>Biniah Cherry</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Myesha Daniels' src='./images/12.png'/>
                      <p className='text-center'>Myesha Daniels</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Hong Dao' src='./images/13.png'/>
                      <p className='text-center'>Hong Dao</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Al David' src='./images/14.png'/>
                      <p className='text-center'>Al David</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Marivel Dominguez' src='./images/15.png'/>
                      <p className='text-center'>Marivel Dominguez</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Quiana Ellis' src='./images/16.png'/>
                      <p className='text-center'>Quiana Ellis</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Yasmine Fisher' src='./images/17.png'/>
                      <p className='text-center'>Yasmine Fisher</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Erika Flores' src='./images/18.png'/>
                      <p className='text-center'>Erika Flores</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Laura Fortiz' src='./images/19.png'/>
                      <p className='text-center'>Laura Fortiz</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Carla Fuller' src='./images/20.png'/>
                      <p className='text-center'>Carla Fuller</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Carletta Fuller' src='./images/21.png'/>
                      <p className='text-center'>Carletta Fuller</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Robel Gebremedhin' src='./images/22.png'/>
                      <p className='text-center'>Robel Gebremedhin</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Patricia Gonzalez' src='./images/23.png'/>
                      <p className='text-center'>Patricia Gonzalez</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Perence Green' src='./images/24.png'/>
                      <p className='text-center'>Perence Green</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Shirley Gucor' src='./images/25.png'/>
                      <p className='text-center'>Shirley Gucor</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Ebone Guition' src='./images/26.png'/>
                      <p className='text-center'>Ebone Guition</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Nailah Hepburn' src='./images/27.png'/>
                      <p className='text-center'>Nailah Hepburn</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Johnathan Ide' src='./images/28.png'/>
                      <p className='text-center'>Johnathan Ide</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Jorge Ignacio' src='./images/29.png'/>
                      <p className='text-center'>Jorge Ignacio</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Stephen Johns' src='./images/30.png'/>
                      <p className='text-center'>Stephen Johns</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Maricka Johnson' src='./images/31.png'/>
                      <p className='text-center'>Maricka Johnson</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Nepheg Jones' src='./images/32.png'/>
                      <p className='text-center'>Nepheg Jones</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Yoeurn Koeu' src='./images/33.png'/>
                      <p className='text-center'>Yoeurn Koeu</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Brook Kuma' src='./images/34.png'/>
                      <p className='text-center'>Brook Kuma</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Cesar Leyva' src='./images/35.png'/>
                      <p className='text-center'>Cesar Leyva</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Bao Lu' src='./images/36.png'/>
                      <p className='text-center'>Bao Lu</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Jenny Luu' src='./images/37.png'/>
                      <p className='text-center'>Jenny Luu</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Jenel Martin' src='./images/38.png'/>
                      <p className='text-center'>Jenel Martin</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Ana Martinez' src='./images/39.png'/>
                      <p className='text-center'>Ana Martinez</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='David Martinez' src='./images/40.png'/>
                      <p className='text-center'>David Martinez</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Tanika Miranda' src='./images/41.png'/>
                      <p className='text-center'>Tanika Miranda</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Lakeita Morgan' src='./images/42.png'/>
                      <p className='text-center'>Lakeita Morgan</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Mario Negron' src='./images/43.png'/>
                      <p className='text-center'>Mario Negron</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Binh Nguyen' src='./images/44.png'/>
                      <p className='text-center'>Binh Nguyen</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='--' src='./images/45.png'/>
                      <p className='text-center'>--</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Kimhong Nguyen' src='./images/47.png'/>
                      <p className='text-center'>Kimhong Nguyen</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Kristine Nguyen' src='./images/48.png'/>
                      <p className='text-center'>Kristine Nguyen</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Mary Nguyen' src='./images/49.png'/>
                      <p className='text-center'>Mary Nguyen</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Thuong Nguyen' src='./images/50.png'/>
                      <p className='text-center'>Thuong Nguyen</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Au Brie Nuno-Pelayo' src='./images/51.png'/>
                      <p className='text-center'>Au Brie Nuno-Pelayo</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Angelica Ochoa' src='./images/52.png'/>
                      <p className='text-center'>Angelica Ochoa</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Snehal Patel' src='./images/53.png'/>
                      <p className='text-center'>Snehal Patel</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Laquisha Patterson' src='./images/54.png'/>
                      <p className='text-center'>Laquisha Patterson</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Chu Mei Peng' src='./images/55.png'/>
                      <p className='text-center'>Chu Mei Peng</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Natisha Perkins' src='./images/56.png'/>
                      <p className='text-center'>Natisha Perkins</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Princess Pugh' src='./images/57.png'/>
                      <p className='text-center'>Princess Pugh</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Catherine Rash' src='./images/58.png'/>
                      <p className='text-center'>Catherine Rash</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Benjamin Rathbone-Webber' src='./images/59.png'/>
                      <p className='text-center'>Benjamin Rathbone-Webber</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Esmeralda Sandoval' src='./images/60.png'/>
                      <p className='text-center'>Esmeralda Sandoval</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Ivan Satterfield ' src='./images/61.png'/>
                      <p className='text-center'>Ivan Satterfield </p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Thedrika Sayles' src='./images/62.png'/>
                      <p className='text-center'>Thedrika Sayles</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Kiesha Shanks' src='./images/63.png'/>
                      <p className='text-center'>Kiesha Shanks</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Philip Sien' src='./images/64.png'/>
                      <p className='text-center'>Philip Sien</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Calvin Sin' src='./images/65.png'/>
                      <p className='text-center'>Calvin Sin</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Brisa Solano' src='./images/66.png'/>
                      <p className='text-center'>Brisa Solano</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Denny Tang' src='./images/67.png'/>
                      <p className='text-center'>Denny Tang</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Eva Thomas' src='./images/68.png'/>
                      <p className='text-center'>Eva Thomas</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='David Tran' src='./images/69.png'/>
                      <p className='text-center'>David Tran</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Johnson Trvong' src='./images/70.png'/>
                      <p className='text-center'>Johnson Trvong</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Jose Vanez' src='./images/71.png'/>
                      <p className='text-center'>Jose Vanez</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='-- ' src='./images/72.png'/>
                      <p className='text-center'>-- </p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Arrieanne Ware' src='./images/74.png'/>
                      <p className='text-center'>Arrieanne Ware</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Asha Washington' src='./images/75.png'/>
                      <p className='text-center'>Asha Washington</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Sarah Welch' src='./images/76.png'/>
                      <p className='text-center'>Sarah Welch</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Domonique Wilson' src='./images/77.png'/>
                      <p className='text-center'>Domonique Wilson</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Wojiang Xie' src='./images/78.png'/>
                      <p className='text-center'>Wojiang Xie</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Rosalin Xuneax' src='./images/79.png'/>
                      <p className='text-center'>Rosalin Xuneax</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Shangxiuzi Yan' src='./images/80.png'/>
                      <p className='text-center'>Shangxiuzi Yan</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Huang Yut' src='./images/81.png'/>
                      <p className='text-center'>Huang Yut</p>
                    </div><div className='col-xs-6 col-md-4 col-lg-3 text-center'>
                      <img alt='Wei Hua Zhang' src='./images/82.png'/>
                      <p className='text-center'>Wei Hua Zhang</p>
                    </div>
        </section>

        </div>


      </div>
    );
  }
}

export default App;
