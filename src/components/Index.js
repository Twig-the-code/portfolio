import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import Header from "./Header"
import WhoWeAre from "./WhoWeAre"
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux';

const Index = ({getListOfTwiggers, twiggers}) => {


  const hook = () => {
    getListOfTwiggers()
  }
  useEffect(hook, [])
  console.log(useEffect)

  return (
      <main className="front-page">
        <Header/>
        <WhoWeAre twiggers={twiggers}/>
      </main>
      
      
    );
  
}

const mapStateToProps = state => ({
    twiggers: state.twiggers
})

const mapdispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}
const Connected = connect(mapStateToProps, mapdispatchToProps)(Index)


export default Connected;
