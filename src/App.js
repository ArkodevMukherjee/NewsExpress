import React, { Component } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { New } from './components/New'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  // constructor(){
  //   super()
  // this.state={
  //   category:"technology"
  // }
  // }


  // changeCategory=(categ)=>{
  //   console.log("Hello",categ);
  //   this.setState({
  //     category:categ
  //   })
  //   console.log(this.state.category);




  // }



  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='green'
            progress={this.state.progress}
            height="5px"
            
          />
          <NavBar />
          <Switch>
            <Route exact path="/">
              <New setProgress={this.setProgress}  pageSize={5} category="general" />
            </Route>
            <Route exact path="/technology">

              <New setProgress={this.setProgress}  pageSize={5} category="technology" key="technology" />
            </Route>
            <Route exact path="/science" >
              <New setProgress={this.setProgress}  pageSize={5} category="science" key="science" />
            </Route>
            <Route exact path="/health" >
              <New setProgress={this.setProgress}  pageSize={5} category="health" key="health" />
            </Route>
            <Route exact path="/sports">
              <New setProgress={this.setProgress}  pageSize={5} category="sports" key="sports" />
            </Route>
            <Route exact path="/business">
              <New setProgress={this.setProgress}  pageSize={5} category="business" key="business" />
            </Route>
          </Switch>


        </Router>
      </div>
    )
  }
}
