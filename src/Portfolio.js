import React, {Component} from 'react';
import {bindActionCreators, dispatch} from 'redux';
import {connect} from 'react-redux';

import Main from './components/main'
import * as actionCreators from './actions/actionCreators'

class Portfolio extends Component {

    componentWillMount() {
        console.log('component will mount', { props: this.props })
        this.props.getFakeData(this.props.match.params.name)
    }

    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
    }

    render() {
        return (
            <div className="App">
                <Main name={this.props.name}></Main>
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    name: state.name,
});

export const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Portfolio);


export default Connected;
