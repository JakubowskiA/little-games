import React, { Component, Fragment } from "react";
import "./styles/style.css";
import { appsData } from "./AppsData";
import { connect } from "react-redux";
import { HomeGameCard } from "./HomeGameCard";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          {appsData.slice(1, appsData.length).map((app) => (
            <HomeGameCard
              key={app.id}
              onClick={() => {
                console.log('hi', app.id)
                this.props.updatePageToShow(app.id);
              }}
              app={app}
            />
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
    updatePageToShow: (appId) =>
      dispatch({ type: "UPDATE_PAGE_TO_SHOW", payload: appId }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
