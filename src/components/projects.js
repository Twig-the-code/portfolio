import React, { Component } from 'react';
import {bindActionCreators, dispatch} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'
import Project from './Project'

class Projects extends Component {
  

  render() {
    console.log (this.props.projects)
    return (
      <section>
        <i className="section__icon far fa-gem"></i>
        <h2 className="section__title">Projects</h2>
        <div className="underline"></div>
        <div className = "projects">
          {this.props.projects.map(project => <Project project={project}/>)}
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default Connected;
