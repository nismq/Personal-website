import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import ExperienceCard from './components/ExperienceCard';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Slideshow from './components/Slideshow';
import TextBox from './components/TextBox';

function App() {
  const [height, setHeight] = useState(window.innerHeight);

  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/200',
    'https://placehold.co/600x400'
  ];

  return (
    <div className="App">
      <Header/>
      <div className='body'>
        {/* <div className='welcome-container' >
          <h1>Welcome</h1>
        </div> */}
        <hr/>
        <AboutMe/>
        <hr/>
        <h2 id='projects' >Projects</h2>
        <Slideshow images={images} projectCard={<ProjectCard title='This Website' subtitle='Personal' skill1='React' skill2='JavaScript' skill3='HTML' url='https://github.com/nismq/Personal-website'/>}/>
        <Slideshow images={images} projectCard={<ProjectCard title='Swipper Frontend' subtitle='School' skill1='React Native' skill2='JavaScript' skill3='Mobile' url='https://github.com/nismq/Swipper_frontend'/>}/>
        <Slideshow images={images} projectCard={<ProjectCard title='Climate Change Visualization Tool' subtitle='School' skill1='React' skill2='Java' skill3='Spring Boot' url='https://github.com/nismq/Climate-change-visualization-tool'/>}/>
        <Slideshow images={images} projectCard={<ProjectCard title='Pokemon card app' subtitle='School' skill1='React' skill2='JavaScript' skill3='HTML' url='https://github.com/nismq/Pokemon'/>}/>   
        <hr/>
        <h2 id='experience' >Experience</h2>
        <div className='experience-container'>
          <ExperienceCard title='Junior Test Engineer' subtitle='May 2023 - Present' company='Topcon Healthcare Solutions'/>
        </div>
        <hr/>
        <h2 id='education' >Education</h2>
        <div className='experience-container'>
          <ExperienceCard title='Information technology' subtitle='2021 - Present' company='University of Applied Sciences' />
        </div>
        <hr/>
        <h2 id='skills' >Skills</h2>
        <div className='skills-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat, justo cursus posuere fringilla, enim sapien elementum urna, non aliquam sem sem nec sem. Maecenas consectetur massa porta suscipit laoreet. Vestibulum quis massa ut libero malesuada.
        </div>
        <div className='experience-group'>
          <h3>Most Experience</h3>
          <div style={{display:'flex', gap: "9px",}}>
            <TextBox text='React'/>
            <TextBox text='JavaScript'/>
            <TextBox text='HTML'/>
          </div>
        </div>
        <div className='experience-group'>
          <h3>Some Experience</h3>
          <div style={{display:'flex', gap: "9px",}}>
            <TextBox text='Java'/>
            <TextBox text='Spring Boot'/>
            <TextBox text='Figma'/>
          </div>
        </div>
        <div className='experience-group'>
          <h3>Learning</h3>
          <div style={{display:'flex', gap: "9px",}}>
            <TextBox text='Java'/>
            <TextBox text='Testing'/>
            <TextBox text='Blender'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
