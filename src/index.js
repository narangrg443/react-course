import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/profile";
import profiles from "./components/contact";
//import Avatar from "./components/avatar";

ReactDOM.render(
  <div class="container">
    {profiles.map((profile, index) => (
    <div>
    <Profile

      key={index}

      name={profile.name}
      age={profile.age}
      src={profile.src}
      email={profile.email}
      style={ { color: profile.color, background: profile.background }}
      />
    </div>

  ))}
  </div>,
  document.getElementById('root')
);