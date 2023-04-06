import React, {useState, useEffect} from 'react';
import './App.css';
import FadeIn from 'react-fade-in';
import Typing from 'react-typing-animation';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  
  
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };


  
  return (
    
    <div className="App">

    <header class="sticky-navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent  .text-center"  id="home" style={{marginLeft: 570}}>
 
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNav">
   <ul class="navbar-nav">
     <li class="nav-item active">
      <FadeIn delay={600}>
      <a class="nav-link" href="#project" style={{marginTop:20, color:"white"}}>Projects</a>
      </FadeIn>
     </li>
     <li class="nav-item">
      <FadeIn delay={300}>
      <a class="nav-link" href="#tutor" style={{marginTop:20, color:"white"}}>Tutoring</a>
    </FadeIn>
      </li>
     <li class="nav-item">
      <FadeIn>
      <a class="nav-link" href="#home"><img src="logo.png" id="logo" style={{width:80,height:80}}alt=" "></img></a>
      </FadeIn>
     </li>
     <li class="nav-item">
      <FadeIn delay={300}>
      <a class="nav-link" href="#contact" style={{marginTop:20, color:"white"}}>Contact</a>
      </FadeIn>
     </li>
     <li class="nav-item" style={{marginTop:20, color:"white"}}>
      <FadeIn delay={600}>
      <a class="nav-link" style={{color:"white"}}onclick="window.open('https://drive.google.com/file/d/1I-I5ZW74Gj24DcNqsy46aV39p1I6rJ9p/view?usp=sharing', '_blank'); return false;">Résumé</a>
      </FadeIn>
     </li>
   </ul>
 </div>
</nav>
        </header>
        
        




        <div class="home" style={{marginTop:70}}>
          <FadeIn delay={1400}>
          <h3 class="hi" style={{color:"white",opacity:50,marginRight: 875, marginTop:130, fontSize:45, position:"relative",opacity:0.6}}>Hi, I'm</h3>
          </FadeIn>
          <FadeIn delay={1700}>
          <h1 class="name" style={{color:"#46C2CB",fontSize:78, marginLeft: 250, position:"absolute"}}>Natalia Kusmirek</h1>
          <h1 style={{color:"white",fontSize:82, marginLeft: 860, marginTop:-2,position:"absolute"}}>.</h1>
          </FadeIn>
          <FadeIn  delay={2000} transitionDuration={700}>
          <h3 class="homeINFO" style={{color:"#6D67E4",marginRight:425, marginTop:100, marginBottom: 150,fontSize:25}}>Full Stack Developer, UI Designer, and Private Tutor.</h3>
          </FadeIn>
          <FadeIn delay={900}>
          <img src="megaphone.png" class="megaphone" alt=" " style={{width:800,height:480, position:"absolute",top:120, right:0}}></img>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white"class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
          </FadeIn>
            
        </div>



        <div class="about" style={{marginTop:80}}>
            <FadeIn delay={5000}>
            <img src="selfie.png" class="selfie" alt=" " style={{width:680,height:380, position:"absolute",top:1100, right:730}}></img>
            </FadeIn>
            <Typing loop>
            <Typing.Delay ms={4000} />
            <h3 style={{color:"#46C2CB",marginLeft: 265, marginTop:-80, fontSize:20, position:"absolute",opacity:0.5}}>C:\nataliakusmirek\home\about:</h3>
            <Typing.Reset count={1} delay={700}       repeat={Infinity} />
            </Typing>
            <FadeIn delay={5300}>
            <h3 class="aboutme" style={{color:"white",opacity:50,marginLeft: 520, marginTop:530, fontSize:50, position:"relative",opacity:0.6}}>a little about me.</h3>
            </FadeIn>
            <FadeIn delay={5700}>
            <h3 class="aboutINFO" style={{color:"#6D67E4",marginLeft:810, marginTop:20,fontSize:21, width:390, textAlign:"right"}}>Greetings! My name is Natalia and I am currently a senior at Farmington High School in Farmington, CT. 
            Keep exploring my page to learn more about what I have done in the industry, my personal tutoring opportunities, and more. <br></br><br></br>

            Thank you for stopping by!</h3>
            </FadeIn>

        </div>
        


        <div class="project" id = "project" style={{marginTop:700, width:1000}}>
        <Typing loop>
            <Typing.Delay ms={8000} />
            <h3 style={{color:"#46C2CB",marginLeft: 260, fontSize:20, position:"absolute",opacity:0.5}}>C:\nataliakusmirek\home\projects:</h3>
            <Typing.Reset count={1} delay={700}       repeat={Infinity} />
            </Typing>

    <FadeIn delay={9000}>

            <div id="carousel" class="carousel slide carousel-fade"  data-bs-ride="carousel" style={{marginTop:500, left:260}}>
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1400">
      <img src="project.png" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block"  style={{top:170}}>
      <p style={{fontWeight:'bold',fontSize:14}}>JANUARY 2021 - JULY 2021</p>
                    <h5 class = "project_label" style={{color:"#F2F7A1"}}>Harvard University: CS50x Introduction to Computer Science</h5>
                    <p class = "p_desc">"Topics include abstraction, algorithms, data structures, encapsulation, security, software engineering, and web development. Includes C, Python, SQL, and JavaScript plus CSS/HTML."</p>
                    <button type="button" class="btn btn-outline-info" onClick={() => openInNewTab('https://github.com/nataliakusmirek/CS50x---Portfolio')}>My Problem Sets + Labs</button>
      </div>

      
    </div>
    <div class="carousel-item" data-bs-interval="1400">
      <img src="project.png" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block"   style={{top:170}}>
      <p style={{fontWeight:'bold',fontSize:14}}>JUNE 2021 - AUGUST 2021</p>
                    <h5 class = "project_label" style={{color:"#F2F7A1"}}>Time Reporting System: Tech For Good Inc.</h5>
                    <p class = "p_desc">Learned HTML, CSS, Firebase, and React.js while 
                      designing and programming front-end for timer, manual entry, and history feature of the U.I.. Worked with students in graduate school/ages 18 to 24 to complete project.
                      </p>
                      <button type="button" class="btn btn-outline-info" onClick={() => openInNewTab('https://github.com/TechForGoodInc/Time-Reporting-System')}>Github Repository</button>
      </div>
      
      
    </div>
    <div class="carousel-item" data-bs-interval="1400" style={{color:"#46C2CB"}}>
      <img src="project.png" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block"   style={{top:170}}>
      <p style={{fontWeight:'bold',fontSize:14}}>SEPTEMBER 2022 - JUNE 2023</p>
                    <h5 class = "project_label" style={{color:"#F2F7A1"}}>Java Algorithms</h5>
                    <p> Java Projects created while taking AP Computer Science A, practicing syntax, algorithms, and abstraction.</p>
                    <button type="button" class="btn btn-outline-info" onClick={() => openInNewTab('https://github.com/nataliakusmirek/Java_Projects')}>Github Repository</button>
      </div>
    </div>
  </div>
  
</div>
</FadeIn>

<FadeIn delay={8800}>
<h3 style={{color:"white",opacity:50,marginLeft: 575, marginTop:-470, fontSize:25, position:"absolute",opacity:0.6}}>here's some things i've worked on.</h3>
</FadeIn>
        <FadeIn delay={12000}>
        <div class="mini_projects" style={{marginLeft:260,width:1000}}>
          <img src="icon.png" style={{width:400,height:220}}></img>
          <img src="icon.png" style={{width:400,height:220}}></img>
          <div class="mini1" style={{marginRight:420,marginTop:-180}}>
              <h3 style={{color:"white",fontSize:9}}><i>Python v3, Discord Lib, YouTube DL </i></h3>
              <h4 style={{color:"#46C2CB",fontSize:16}}>B.O.B.A. Music Bot</h4>
              <p style={{color:"#F2F7A1",fontSize:11,width:160, marginLeft:210}}>Hosted through Replit and UptimeRobot, use 24/7 in Discord Voice Chats to play music requested with YouTube links.</p>
              <button type="button"  style={{marginTop:-20}} class="btn" id="btn_link"  onClick={() => openInNewTab('https://github.com/nataliakusmirek/B.O.B.A.')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                  </svg></button>
          </div>
          <div class="mini1" style={{marginLeft:380,marginTop:-170}}>
              <h3 style={{color:"white",fontSize:9}}><i>Python v3, Ren'Py Library</i></h3>
              <h4 style={{color:"#46C2CB",fontSize:16}}>REMORSE : 1D Game</h4>
              <p style={{color:"#F2F7A1",fontSize:11,width:160, marginLeft:230}}>Help characters altered by climate change and learn of the "true evil" their leaders hide in space. Created for APCSP.</p>
              <button type="button" style={{marginTop:5}}class="btn" id="btn_link" onClick={() => openInNewTab('https://github.com/nataliakusmirek/REMORSE')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                  </svg></button>
          </div>
        </div>
        </FadeIn>
        </div>


        <div class="tutor" id="tutor" style={{marginTop:500}}>
        <Typing loop>
            <Typing.Delay ms={18000} />
            <h3 style={{color:"#46C2CB",marginLeft: 260, fontSize:20, position:"absolute",opacity:0.5}}>C:\nataliakusmirek\home\tutoring:</h3>
            <Typing.Reset count={1} delay={700}       repeat={Infinity} />
            </Typing>
            <FadeIn delay ms={23000}>
            <img src="project.png" style={{width:900,height:500, marginRight:300}}></img>
            <h3 style={{color:"#F2F7A1",opacity:50,marginRight: 660, marginTop:-340, fontSize:25, position:"relative",opacity:1}}>It starts with a line of code.</h3>
            </FadeIn>
            <FadeIn delay ms={29000}>
            <h3 style={{color:"#9681FA",width:700,marginLeft:275, marginTop:20,fontSize:17,textAlign:"left", position:"absolute"}}>Using projects based on level (beginner, intermediate, advanced) that cover certain programming concept(s), students learn in <u>groups of 1-3 twice a week on Zoom</u> completing these projects together. This allows students to learn how to debug and improve code collaboratively. Parents are updated biweekly via email on their child's performance.
            </h3>
            </FadeIn>
            
            <FadeIn delay ms={35000}>
            <img src="tutoring.png" style={{position:"absolute",width:600,marginLeft:25}}></img>
            </FadeIn>
          <div class="mini_projects" style={{marginLeft:260,width:1000, marginTop:570}}>
          <img src="icon.png" style={{width:540,height:300}}></img>
          <img src="icon.png" style={{width:540,height:-300,marginTop:200}}></img>
          <div class="mini1" style={{marginRight:20,marginTop:-730}}>
              <h4 style={{color:"#46C2CB",fontSize:66}}><i>71%</i></h4>
              <p style={{color:"white",fontSize:18,width:160, marginLeft:410}}>of new STEM jobs are in computing.</p>
              
          </div>
          <div class="mini1" style={{marginLeft:-10,marginTop:360}}>
              
              <h4 style={{color:"#46C2CB",fontSize:66}}><i>90%</i></h4>
              <p style={{color:"white",fontSize:18,width:160, marginLeft:420}}>of parents want their child to know how to code.</p>
              
          </div>
        </div>
        </div>


        <div class="contact"  id="contact" style={{marginTop:500}}>
            <h3 style={{color:"#46C2CB",marginLeft: 260, fontSize:20, position:"absolute",opacity:0.5}}>C:\nataliakusmirek\home\contact:</h3>
            <h3 style={{color:"white",marginLeft: 595, marginTop:200, fontSize:45, position:"absolute",opacity:0.6}}>let's get in touch.</h3>
            <h3 style={{color:"#46C2CB",marginLeft: 575, marginTop:270, fontSize:18, position:"absolute",opacity:1}}>Contact me, and let's start something amazing.</h3>
            <button style={{marginTop:330, marginLeft:270, position:"absolute"}}type="button" class="btn btn-outline-info"><a href="mailto:nataliakusmirekct@gmail.com" style={{textDecoration:"none", color:"white"}}>e-mail</a></button>
            <img src="coffee.png" style={{marginTop:400,width:600,height:350, marginLeft:10, position:"static"}}></img>
        </div>
        

      <footer style={{color:"white",marginTop:90, opacity:0.4}}><i>Created and designed by Natalia Kusmirek.</i></footer>
      


  </div>
  
  );
     
}

export default App;
