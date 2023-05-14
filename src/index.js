import React from "react"
import ReactDom from "react-dom"




const name = 'mandep';
ReactDom.render(
  <div>
    <h1>hello{name}</h1>
     <ul>
     <li>apple</li>
  </ul>
  </div>,
  document.getElementById('root'));