import React from 'react'
import styles from '../styles/cards.module.css'
import TextBox from './TextBox';
import Button from './buttons/Button'

export default function CourseCard({
    title="Title",
    author="Author",
    skill1="skill 1",
    skill2="skill 2",
    skill3="skill 3", 
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat, justo cursus posuere fringilla, enim sapien elementum urna, non aliquam sem sem nec sem. Maecenas consectetur massa porta suscipit laoreet. Vestibulum quis massa ut libero malesuada.",
    button_text = 'Udemy',
    url='https://www.google.com/',
  }) {

  const handleClick = () => {
    window.open(url, "_blank")
  }


  return (
    <div id={styles['course-card']} className={styles.card}>
        <h3>{title}</h3>
        <p className={styles.text}>{author}</p>
        <a href={url} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
          <Button show_icon text={button_text}/>
        </a>  
    </div>
  )
}
