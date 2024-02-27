import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/slideshow.module.css'
import ProjectCard from './ProjectCard';
import ButtonArrowLeft from './buttons/ButtonArrowLeft';
import ButtonArrowRight from './buttons/ButtonArrowRight';

const Slideshow = ({ images , projectCard = <ProjectCard/>}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState()
  const imageObjects = images.map((image, index) => 
  <img src={image} alt={`Slide ${index}`} style={{maxWidth:'80%', maxHeight:'100%'}} />
  )
  const [itemsList] = useState([projectCard, ...imageObjects])
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(()=>{
      if (currentIndex === 0){
        setHeight(ref.current.offsetHeight)
      }
     }, 200)

    const handleResize = () => {
      // Perform actions on window resize
      if (currentIndex === 0){
        setHeight(ref.current.offsetHeight)
        console.log(currentIndex)
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsList.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div style={{width:'100%'}}>
      <div className={styles.Container} style={{height:height}}  >
        <ButtonArrowLeft isDisabled={currentIndex === 0} onClick={prevSlide}/>
        <div ref={ref} className={styles['list-container']} style={{height:currentIndex === 0 ? 'auto' : '100%'}} >
          {itemsList[currentIndex]}
        </div>
        <ButtonArrowRight isDisabled={currentIndex === itemsList.length -1} onClick={nextSlide}/>
      </div>
      <div className={styles['dot-indicators']}>
        {itemsList.map((item ,index) => (
          <span key={index} className={index === currentIndex ? `${styles.dot} ${styles.active}` : styles.dot} onClick={() => handleDotClick(index)}/>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
