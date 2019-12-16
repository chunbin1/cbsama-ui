import React, { Component } from "react";
import RandomOrderArticles from "../components/RandomOrderArticles";

export default class demo1 extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <RandomOrderArticles
          wordWidth={20}
          articles="const Button = styled.a`
          /* This renders the buttons above... Edit me! */
          display: inline-block;
          border-radius: 3px;
          padding: 0.5rem 0;
          margin: 0.5rem 1rem;
          width: 11rem;
          background: transparent;
          color: white;
          border: 2px solid white;
        
          /* The GitHub button is a primary button
           * edit this to target it specifically! */
          ${props => props.primary && css`
            background: white;
            color: palevioletred;
          `}
        `"
        ></RandomOrderArticles>
      </div>
    );
  }
}
