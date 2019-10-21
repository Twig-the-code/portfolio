import React, { Component } from "react";
import { bindActionCreators, dispatch } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const createTag = tag => <p>{tag}</p>
const createTagList = project => (project.tags || []).map(tag => <p>{tag}</p>);

const Project = props => {
  const project = props.project;
  return (
    <article className="projects__article project">
      <h3 className="project__title">{project.title}</h3>
      <div>{project.description}</div>
      {createTagList(project)}
    </article>
  );
};

export default Project;
