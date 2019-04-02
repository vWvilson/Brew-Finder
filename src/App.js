import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route,
  Link} 
  from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import SimpleMap from './components/GoogleMap/GoogleMap';
import SignUpForm from './components/SignUpForm/SignUpForm';


class App extends Component {
      state ={
        SideDrawerOpen:false
      }

      drawerToggleClickHandler = () => {
        this.setState((prevState)=> {
          return {SideDrawerOpen:!prevState.SideDrawerOpen}
        }
       )
      }
      backdropClickHandler = () => {
        this.setState({SideDrawerOpen:false})
      }

  render() {
    let backdrop;

    if(this.state.SideDrawerOpen) {
      backdrop = < Backdrop click={this.backdropClickHandler} />
    }
    
    return (
      
    <div style ={{height:'100%'}}>
       <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show= {this.state.SideDrawerOpen}/>
        {backdrop}

      <main className = 'main'style = {{marginTop:'56px'}}> 
        <p>This is the page content</p>
        < SimpleMap />
      </main>
    </div>
      );
    }
  }
      



export default App;
