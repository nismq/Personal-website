import React from 'react'
import { Icon } from '@iconify/react';
import styles from '../styles/cards.module.css'
import TextBox from './TextBox';
import Button from './buttons/Button'

export default function ExperienceCard({
    title="Title",
    subtitle="...",
    company="skill 1",
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat, justo cursus posuere fringilla, enim sapien elementum urna, non aliquam sem sem nec sem. Maecenas consectetur massa porta suscipit laoreet. Vestibulum quis massa ut libero malesuada."
    }) {

  return (
    <div className={styles.Container}>
        <div className={styles.Card}>
            <h3>{title}</h3>
            <p className={styles.text}>{subtitle}</p>
            <div className={styles.SkillsContainer}>
                <TextBox text={company}/>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
        
    </div>
  )
}
