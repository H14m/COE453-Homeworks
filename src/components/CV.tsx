import React from 'react';
import ReactDOM from 'react-dom';


class CV extends React.Component {
    render() {
       return( 
		  <div className="row">
			   <div className="column"></div>
			   <div className="column" id="mid">
				   <div className="hr">
					   <div className="split">
						   <div className="some">
							   <h2 id="info">Haitham Alsunaydi</h2>
				   <p id="info">Software Engineer | Email:s201671280@kfupm.edu.sa</p>
				   
				</div>
				<h4><a href="../resourses/CV.pdf" download >Download CV</a></h4>
				   </div>
				   
				   </div>
				   <div className="hr"> <h2>Objective</h2>
				   <p>
					   A software engineer intersted in databases and web development
				   </p></div>
				  <div className="hr"><h2>Education</h2>
				   <p>
					   <strong> King Fahd University of Petroleum & Minerals </strong> <br></br>
					   Computer Software Engineering Bachelor's degree<br></br>
					   2016 - 2022 </p></div>
				   <div className="hr"><h2>Work Experience</h2>
				   <p>
					   <strong>  Software Engineering - Summer training <br></br>
						   Arabian Drilling Company <br></br> </strong>
					   Aug - Nov 2021<br></br>
					   - Cleaning data<br></br>
					   - Building a DataBase using Access<br></br>
					   - Moving the data from the excel to the database
				   </p></div>
				   <div className="hr"><h2>Skills</h2>
				   <table>
					   <tr>
						   <td>HTML/CSS</td>
						   <td>JavaScript</td>
						   <td>Java</td>
					   </tr>
					   <tr>
						   <td>Python</td>
						   <td>Flutter</td>
						   <td>sql</td>
					   </tr>
					   <tr>
						   <td>firebase</td>
						   <td>php</td>
						   <td></td>
					   </tr>
				   </table></div>

				   

<div className="hr"> <h2>Languages</h2>
				   <p> - Arabic <br></br>
					   - English </p></div>

				  


			   </div>
			   <div className="column"></div>
			   </div>
			   );
			   }
			   }



			   export default CV;