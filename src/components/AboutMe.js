import React, { useState } from 'react'
import styles from '../styles/aboutme.module.css'
import TextBox from './TextBox';
import ButtonArrowLeft from './buttons/ButtonArrowLeft';
import ButtonArrowRight from './buttons/ButtonArrowRight';

const adjectivesList = [
  <TextBox text='Analytical'/>,
  <TextBox text='Eager to understand'/>,
  <TextBox text='Patient'/>,
  <TextBox text='Friendly'/>,
  <TextBox text='Curious'/>,
  <TextBox text='Honest'/>,
  <TextBox text='Goal-oriented'/>,
  <TextBox text='Skilled at teamwork'/>,
]

export default function AboutMe() {
  const [adjectiveIndex, setAdjectiveIndex] = useState(0)

  const nextSlide = () => {
    setAdjectiveIndex((prevIndex) => (prevIndex + 1) % adjectivesList.length);
  };

  const prevSlide = () => {
    setAdjectiveIndex((prevIndex) =>
      prevIndex === 0 ? adjectivesList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles['about-me-container']}>
      <div className={styles['about-me-inner-container']}>
        <div className={styles['header-and-text-container']}>
          <h2 id='aboutMe'>Jere Nissinen</h2>
          <div className={styles['about-me-text']}>
            <p>
              Hey I'm Jere.
              What started as a small spark of interest in game development has grown into an ever-growing interest
               for the IT field. While still early in my career, I’m confident in sharing my insights and eager to
               tackle challenges head-on. I am studying my fourth year in the option of software 
               development at Oulu University of Applied Sciences and work as a junior test engineer.
            </p>
            <br/>
            <p>
              I am naturally curious, and my desire to learn and develop constantly drives me forward. 
              When faced with challenges, I dig deeper and explore different perspectives, always seeking 
              new solutions and challenging both my own and others' ways of thinking. 
            </p>
            <br/>
            <p>
              At this stage in my career, I am focused on improving both my social and technical skills, aiming for a 
              comprehensive understanding of the IT field rather than honing just one skill. Currently, 
              I am highly interested in testing, but I also want to further develop my programming skills, 
              as I believe these areas complement each other.
            </p>
          </div>
        </div>
        <img className={styles['facial-image']} src={require('../assets/images/jere_10.2.-12.jpg')} alt='Portrate'/>
      </div>
      <div className={styles['adjective-wrapper']}>
        <p className={styles['adjective-info-text']}>My coworkers and peers could describe me as:</p>
        <div className={styles['adjective-slider']}>
          <ButtonArrowLeft onClick={prevSlide}/>
          <div className={styles['adjective-slots']}>
            <div className={styles['disabled-slot']}>
              {adjectiveIndex === 0 ? adjectivesList[adjectivesList.length -1] : adjectivesList[adjectiveIndex - 1]}
            </div>
            <div >
              {adjectivesList[adjectiveIndex]}
            </div>
            <div className={styles['disabled-slot']}>
              {adjectiveIndex === adjectivesList.length -1 ? adjectivesList[0] : adjectivesList[adjectiveIndex + 1]}
            </div>
              
          </div>
          <ButtonArrowRight onClick={nextSlide}/>
        </div>
      </div>
    </div>
  )
}
