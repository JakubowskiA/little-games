import React, { Component, Fragment } from "react";
// import "./styles/style.css";
import { appsData } from "./AppsData";
import { connect } from "react-redux";
import Home from './Home'
import TicTacToe from './applications/tic-tac-toe/TicTacToe'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <nav>
          {appsData.map((app) => (
            <div key={app.id} onClick={() => {this.props.updatePageToShow(app.id)}}>
              {app.name}
            </div>
          ))}
        </nav>
        <div>

        {(() => {
          switch(this.props.state.pageToShow) {
            case 1: return <Home updatePageToShow={this.props.updatePageToShow}/>;
            case 2: return <TicTacToe/>;
          }
        })()}
      </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePageToShow: (appId) => dispatch({ type: "UPDATE_PAGE_TO_SHOW", payload: appId }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
