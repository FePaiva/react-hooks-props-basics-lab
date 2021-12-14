// import React from "react";

// function About(props) {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       {props.bio ? <p>{props.bio}</p> : null}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       <a href={props.links.Github}></a>
//       <a href={props.links.linkedin}></a>
      
//     </div>
//   );
// }


// export default About;

import React from "react";

function About(prop) {
  const bioText = prop.bio

  function bio(){
    if (bioText) {
    return <p>{prop.bio}</p>
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2> 
      {bio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={prop.github}>{prop.github}</a>
      <a href={prop.linkedin}>{prop.linkedin}</a>
    </div>
  );
}

export default About;