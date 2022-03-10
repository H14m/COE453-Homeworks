
        import React from 'react';
        import ReactDOM from 'react-dom';
        import data from '../data/courses.json'
        
        
        
        class Courses extends React.Component {
            render() {
                const newData = data.items.map(function(title,text,Objectives ){
                    
                    return   <li>{title} <br/> {text}</li>
        
                }
                );
                
                return (
                    <div className="row">
                        <div className="column"></div>
                    <div id="mid">
                      <h1 className='h'>Social Health</h1>
                      {data.items.map(Courses => <div><h2>{Courses.title}</h2>
                      
                      <p>{Courses.text}</p>
                      <h3>Objectives</h3>
                      <ul>
{Courses.Objectives.map((data) => (
<li>{data}</li>
))}
</ul>                      </div>)}
                    </div>
                    <div className="column"></div>
                    </div>
                  );
                              
         } }
        
        
        
                               export default Courses;