import React, { Component } from 'react';
import {bindActionCreators, dispatch} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

const Project = props => {
    const project = props.project
    return (
         <article className = "projects__article project">
            <div><h3 className = "project__title">{project.title}</h3></div>
            <div>{project.description}</div>
            </article>
      );
} 
  

export default Project;
