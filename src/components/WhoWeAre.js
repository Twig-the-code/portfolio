import React, { Component } from 'react';

const rows = twiggers => 
  twiggers.map (twigger => <a href={`/${twigger.slug}`}>{twigger.name}</a>)

const WhoWeAre = ({twiggers}) => {
 
    
      return (
      <section>
        <p>
          {rows(twiggers)}
        </p>
      </section>
      );
  }
  
  export default WhoWeAre;