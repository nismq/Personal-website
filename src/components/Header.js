import React from 'react'
import styles from '../styles/header.module.css'
import Button from './buttons/Button'

export default function Header() {

  return (
    <header>
      <div className={styles['outer-container']}>
        <h2>JERE NISSINEN</h2>
        <div className={styles['inner-container']}>
            <a href='#aboutMe' style={{textDecoration:'none'}}>
              <Button text='About'/>
            </a>
            <a href='#projects' style={{textDecoration:'none'}}>
              <Button text='Projects'/>
            </a>
            <a href='#experience' style={{textDecoration:'none'}}>
              <Button text='Experience'/>
            </a>
            <a href='#education' style={{textDecoration:'none'}}>
              <Button text='Education'/>
            </a>
            <a href='#skills' style={{textDecoration:'none'}}>
              <Button text='Skills'/>
            </a>
        </div>
      </div>
      <h1 className={styles['welcome-text']} >WELCOME</h1>
    </header>
  )
}
