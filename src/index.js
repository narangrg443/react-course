import React from "react"
import ReactDom from "react-dom"

let c = {
  color: ""
}

const t = 1;
if (t === 12) {
  c.color = "red"
} else {
  c.color = "blue"
}

function By() {
  return <b>byyyyy</b>
}


const name = 'mandep';
ReactDom.render(
  <div>
    <h1 style={c}>hello{name}</h1>
     <ul>
     <li>apple</li>
  </ul>
  <By />
  </div>,
  document.getElementById('root'));