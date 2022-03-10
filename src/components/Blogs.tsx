

import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data/Blogs.json'



class Blogs extends React.Component {
    render() {
        const newData = data.items.map(function(title,text){
            return   <li>{title} <br/> {text}</li>

        });
        return (
            <div className="row">
                <div className="column"></div>
            <div id="mid">
            <h1 className='h'>  Cloud Computing </h1>
              {data.items.map(Blogs => <div><h2>{Blogs.title}</h2><p>{Blogs.text}</p></div>)}
              <a href="https://www.investopedia.com/terms/c/cloud-computing.asp" style={{color: "white"}} >Article Source</a>

            </div>
            <div className="column"></div>
            </div>
          );
                      
 } }



                       export default Blogs;


