import { useEffect, useRef, useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import ExperienceCard from './components/ExperienceCard';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Slideshow from './components/Slideshow';
import TextBox from './components/TextBox';
import CourseCard from './components/CourseCard';
import { useMediaQuery } from 'react-responsive';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/300/200',
  'https://placehold.co/600x400'
];

const SWIPPER_IMAGES = [
  require('./assets/images/swipperMainPage.png'),
  require('./assets/images/swipperFeedPage.png'),
  require('./assets/images/swipperSwipePage.png'),
  require('./assets/images/swipperSwipeRight.png'),
]

const CLIMATE_APP_IMAGES = [
  require('./assets/images/climateMainPage.png')
]

const POKEMON_APP_IMAGES = [
  require('./assets/images/pokemonMainPage.jpg')
]

const WEBSITE_IMAGES = [
  require('./assets/images/websiteFigma.png')
]

function App() {
  const [verticalLineHeight, setVerticalLineHeight] = useState()
  const ref = useRef(null)
  const isWideScreen = useMediaQuery({minWidth: 1000})

  useEffect(() => {
    if (isWideScreen){
      setRefHeightToLineBreak()
      setTimeout(()=>{
      }, 200)
    }
  }, [isWideScreen])

  const setRefHeightToLineBreak = () =>{
    setVerticalLineHeight(ref.current.offsetHeight)
  };

  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <hr/>
        <AboutMe/>
        <hr/>
        <h2 id='projects' >Projects</h2>
        <Slideshow images={WEBSITE_IMAGES} projectCard={<ProjectCard title='This Website'
                                                             subtitle='Personal' 
                                                             skill1='React'
                                                             skill2='JavaScript'
                                                             skill3='HTML'
                                                             url='https://github.com/nismq/Personal-website'/>}/>
        <Slideshow images={SWIPPER_IMAGES} projectCard={<ProjectCard title='Swipper Frontend'
                                                             subtitle='School'
                                                             skill1='React Native'
                                                             skill2='JavaScript'
                                                             skill3='Mobile'
                                                             text='This was an international collaboration project between Oulu 
                                                             University of Applied Sciences (Oamk) and Fontys University of Applied 
                                                             Sciences. I was part of designing the UI and the components for the 
                                                             application. My main responsibilities were creating button components 
                                                             and implementing Start, Sign Up, Login and Feed views.'
                                                             url='https://github.com/nismq/Swipper_frontend'/>}/>
        <Slideshow images={CLIMATE_APP_IMAGES} projectCard={<ProjectCard title='Climate Change Visualization Tool'
                                                             subtitle='School'
                                                             skill1='React'
                                                             skill2='Java'
                                                             skill3='Spring Boot'
                                                             text='School project from autumn 2022. Tool for visualizing data 
                                                             about global warming'
                                                             url='https://github.com/nismq/Climate-change-visualization-tool'/>}/>
        <Slideshow images={POKEMON_APP_IMAGES} projectCard={<ProjectCard title='Pokemon card app'
                                                             subtitle='School'
                                                             skill1='React'
                                                             skill2='JavaScript'
                                                             skill3='HTML'
                                                             text='School project aiming to improve skills in JavaScript and React.
                                                             App is a virtual Pokemon card app that uses PokeAPI. You can search for 
                                                             Pokemons by National Pokedex number or get a random one. Card displays front 
                                                             and back pictures if available, type of the Pokemon, height, weight and abilities.'
                                                             url='https://github.com/nismq/Pokemon'/>}/>   
        <hr/>
        <div ref={ref} className='experience-container'>
          <div>
            <h2 id='experience' >Experience</h2>
            <ExperienceCard title='Junior Test Engineer' subtitle='May 2023 - Present' company='Topcon Healthcare Solutions'/>

          </div>
          {/* <div className='vertical-line'></div> */}
          {isWideScreen 
            ? <div className='vertical-line' style={{height: verticalLineHeight}}/>
            : <hr/>
          }
          {/* <span style={{display: 'inline-block', width:'1px', height:'100px', background:'#000', margin: '0 2px',}}></span> */}
          <div>
            <h2 id='education' >Education</h2>
            <ExperienceCard title='Information technology' subtitle='2021 - Present' company='Oulu University of Applied Sciences' />
          </div>
        </div>
        <hr/>
        <div className='courses-container'>
          <h2 id='experience' >Courses</h2>
          <div>
            <CourseCard title='Robot Framework Test Automation - Level 1 ( Selenium )' author='Bryan Lamb' url='https://www.udemy.com/course/robot-framework-level-1/'/>
            <CourseCard title='Robot Framework Test Automation - Level 2' author='Bryan Lamb' url='https://www.udemy.com/course/robot-framework-2/'/>
          </div>
        </div>
        <hr/>
        <h2 id='skills' >Skills</h2>
        <div className='skills-container'>
          <div> 
            <div className='skills-group'>
              <div style={{display:'flex', gap: "9px",}}>
                <TextBox text='React'/>
                <TextBox text='JavaScript'/>
                <TextBox text='Software Testing'/>
                <TextBox text='Robot Framework'/>
                <TextBox text='Python'/>
                <TextBox text='Test Automation'/>
                <TextBox text='SQL'/>
                <TextBox text='Problem Solving'/>
                <TextBox text='Java'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
