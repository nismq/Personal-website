import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/slideshow.module.css'
import ProjectCard from './ProjectCard';
import ButtonArrowLeft from './buttons/ButtonArrowLeft';
import ButtonArrowRight from './buttons/ButtonArrowRight';
import { useMediaQuery } from 'react-responsive';

const Slideshow = ({ images , projectCard = <ProjectCard/>}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState()
  const imageList = images.map((image, index) => 
  <img src={image} alt={`Slide ${index}`} className={styles['project-photo']} />
  )
  const [itemsList] = useState([projectCard, ...imageList])
  const ref = useRef(null)
  const isWideScreen = useMediaQuery({minWidth: 1000})

  useEffect(() => {
    setTimeout(()=>{
      setRefHeightToContainer()
     }, 200)

    window.addEventListener('resize', setRefHeightToContainer);
    return () => {
      window.removeEventListener('resize', setRefHeightToContainer);
    };

  }, [currentIndex])

  
  const setRefHeightToContainer = () =>{
        if (currentIndex === 0){
          setContainerHeight(ref.current.offsetHeight)
        }
  };

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

  if (isWideScreen){
    return (
      <div className={styles['component-wrapper']}>
        <div ref={ref} className={styles['project-card-container']}>
          {projectCard}
        </div>
        <div style={{height:containerHeight + 25, width:'50%'}} >
          <div className={styles.Container} >
            <ButtonArrowLeft isDisabled={currentIndex === 0} onClick={prevSlide}/>
            <div className={styles['list-container']} >
              {imageList[currentIndex]}
            </div>
            <ButtonArrowRight isDisabled={currentIndex === imageList.length -1} onClick={nextSlide}/>
          </div>
          {imageList.length > 1 && 
            <div className={styles['dot-indicators']}>
              {imageList.map((item ,index) => (
                <span key={index} className={index === currentIndex ? `${styles.dot} ${styles.active}` : styles.dot} onClick={() => handleDotClick(index)}/>
              ))}
            </div>
          }
        </div>
      </div>
    );
  }else {
    return (
      <div style={{width:'100%'}}>
        <div className={styles.Container} style={{height:containerHeight}}  >
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
    )
  }
};

export default Slideshow;
