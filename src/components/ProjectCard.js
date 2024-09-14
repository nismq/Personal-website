import React from 'react'
import styles from '../styles/cards.module.css'
import TextBox from './TextBox';
import Button from './buttons/Button'

export default function ProjectCard({
    title="Title",
    subtitle="...",
    skill1="skill 1",
    skill2="skill 2",
    skill3="skill 3", 
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat, justo cursus posuere fringilla, enim sapien elementum urna, non aliquam sem sem nec sem. Maecenas consectetur massa porta suscipit laoreet. Vestibulum quis massa ut libero malesuada.",
    url='https://github.com/nismq'
  }) {

  const handleClick = () => {
    window.open(url, "_blank")
  }


  return (
    <div id={styles['project-card']} className={styles.card}>
        <h3>{title}</h3>
        <p className={styles.text}>{subtitle} project</p>
        <div className={styles['skills-container']}>
          <TextBox text={skill1}/>
          <TextBox text={skill2}/>
          <TextBox text={skill3}/>
        </div>
        <p className={styles.text}>{text}</p>
        <a href={url} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
          <Button show_icon text='GitHub'/>
        </a>
    </div>
  )
}
