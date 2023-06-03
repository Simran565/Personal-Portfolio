import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typewriter from 'typewriter-effect';


function Home(){
return (
<Container>
      <Row>
        <Col className="title-text">
           Hi,<br/> 
              I'm <span style={{fontWeight: "800", fontSize: "2.5rem", color:"white"}}>Simran Chapagain.</span>  <br/>
       
       <Typewriter options={{
        strings: [
          "React Js Developer",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}

      />
      <p>
       <a href="https://www.facebook.com/simran.chapagain.7" target={"_blank"}  rel="noreferrer"><FacebookOutlinedIcon fontSize="large" className="icon"/></a> 
       <a href="https://github.com/Simran565" target={"_blank"}  rel="noreferrer"><GitHubIcon fontSize="large" className="icon"/></a> 
       <a href="https://www.linkedin.com/in/simran-chapagain-678219264/" target={"_blank"}  rel="noreferrer"><LinkedInIcon fontSize="large" className="icon"/></a> 
       <a href="https://www.instagram.com/simranchapagain/?hl=en" target={"_blank"}  rel="noreferrer"><InstagramIcon fontSize="large" className="icon"/></a> 

        </p>
           
            
        </Col>
        <Col><img src="image\dev.png" alt="" width={700} height={700} className="pic"/></Col>
      </Row>
     
    </Container>)
}

export default Home;