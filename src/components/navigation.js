import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <nav className="navigation__list">
        <a class="nav-about" href="#introduction">about</a>
        <a class="nav-projects" href="#projects">projects</a>
        <a class="nav-blog">blog</a>
      </nav>
    );
  }
}

export default Navigation;
