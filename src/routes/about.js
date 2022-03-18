import React from 'react';
import '../App.css';
import CEO from '../wireframes/aboutphoto.jpg';
import aboutPic from '../wireframes/aboutbackground.jpg';


function About() {
  return (
    <div className="App" style={{  backgroundImage:`url(${aboutPic})`, height:"100vh" }}>
      <div className="space"></div>
        <div className="aboutWrapper">
          <h1 style={{ color:"#624a3c" }}>About</h1> 
          <div className="aboutBox">
          <img className="ceoPic" src={CEO} ></img>
          <p className="aboutQuote">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p> 
        </div>
      </div>
    </div>
  );
}

export default About;
