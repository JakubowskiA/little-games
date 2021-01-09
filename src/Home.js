import React, { Component, Fragment } from "react";
import "./styles/style.css";
import { appsData } from "./AppsData";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log('test', this.props);
    return (
      <Fragment>
        <nav>
          {appsData.map((app) => (
            <div key={app.id} onClick={() => {this.props.updatePageToShow(app.id)}}>
              {app.name}
            </div>
          ))}
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
