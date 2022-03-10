import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, BrowserRouter } from 'react-router-dom';
import Blogs from './components/Blogs';
import Courses from './components/Courses';
import CV from './components/CV';
import Home from './components/Home';
import Projects from './components/Projects';
import "./stylesheets/App.css";

class App extends React.Component {
  render() {
     return(
        <HashRouter>
          
           <div className='header'>
           <div className="logo" ><Link to="/">HaithamAbdulaziz</Link></div>
             <ul className='nav'>
                 <li><Link to="/">Home</Link></li>      
                 <li><Link to="/cv">CV</Link></li> 
                 <li><Link to="/courses">Courses</Link></li>
                 <li><Link to="/Projects">Projects</Link></li> 
                 <li><Link to="/Blogs">Blogs</Link></li>
             </ul>

             <a href="mailto:s201671280@Kfupm.edu.sa">Contact</a>
           </div>
           

           <div>
                <Route exact path="/" component={Home}/>
                <Route path="/cv" component={CV}/> 
                <Route path="/courses" component={Courses}/>
                <Route path="/Projects" component={Projects}/>
                <Route path="/Blogs" component={Blogs}/>
            </div>
        </HashRouter>
     );
  }
}

export default App