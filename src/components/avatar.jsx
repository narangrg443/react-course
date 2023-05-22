import React from "react";

const Avatar = function(props) {
  return (
    <div>
             <img className="circular-img" src={props.img} />
    </div>
  );
}

export default Avatar;
