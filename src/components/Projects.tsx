import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data/project.json'



class Projects extends React.Component {
    render() {
        const newData = data.items.map(function(title,text){
            return   <li>{title} <br/> {text}</li>

        });
        return (
            <div className="row">
                <div className="column"></div>
            <div id="mid">
              <h1 className='h'>Social Health</h1>
              {data.items.map(project => <div><h2>{project.title}</h2><p>{project.text}</p></div>)}
            </div>
            <div className="column"></div>
            </div>
          );
                      
 } }



                       export default Projects;