import React, { useState } from 'react'
import styles from '../styles/aboutme.module.css'
import { Icon } from '@iconify/react';
import TextBox from './TextBox';
import ButtonArrowLeft from './buttons/ButtonArrowLeft';
import ButtonArrowRight from './buttons/ButtonArrowRight';

const adjectivesList = [
  <TextBox text='Analytical'/>,
  <TextBox text='Resposible'/>,
  <TextBox text='Thoughtful'/>,
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
    <div className={styles.AboutMeContainer}>
        <h2 id='aboutMe'>Me</h2>
        <div className={styles['about-me-text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat, justo cursus posuere fringilla, enim sapien elementum urna, non aliquam sem sem nec sem. Maecenas consectetur massa porta suscipit laoreet. Vestibulum quis massa ut libero malesuada.
        </div>
        <div className={styles.PlaceHolderImage}></div>
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
  )
}
