import React, { Component } from "react";
import RandomOrderArticles from "@/components/RandomOrderArticles";
import "./demo1.less";

export default class demo1 extends Component {
  render() {
    return (
      <div className="main">
        <div>demo1</div>
        <RandomOrderArticles
          wordWidth={20}
          articles="const Button = styled.a`
          /* This renders the buttons above... Edit me! */
          display: inline-block;\n
          border-radius: 3px;\n
          padding: 0.5rem 0;\n
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
        {/* <div style={{ position: "relative" }}>
          <RandomOrderArticles
            wordWidth={20}
            articles="我\n
            爱\n
            你\n
            "
          ></RandomOrderArticles>
        </div> */}

        {/* <div>我\n 爱\n 你\n</div> */}
      </div>
    );
  }
}
