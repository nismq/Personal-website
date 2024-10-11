import React, { useRef, useState } from 'react'
import { useClickAway } from "react-use";
import styles from '../styles/header.module.css'
import Button from './buttons/Button'
import { Icon } from '@iconify/react';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isWideScreen = useMediaQuery({minWidth: 640})
  const ref = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useClickAway(ref, () => {
    setMenuOpen(false);
  });

  return (
    <header>
      <div ref={ref} className={styles['outer-container']}>
        <h2>JERE NISSINEN</h2>
        <Icon className={styles['menu-icon']} icon="iconamoon:menu-burger-horizontal-bold" width="24" height="24" onClick={toggleMenu}/>
        {isWideScreen ? 
          <div className={styles['inner-container']}>
            <a href='#aboutMe' style={{textDecoration:'none'}}>
              <Button text='About Me'/>
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
          :
          <ul className={menuOpen ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
            <li className={styles['nav-item']}>
              <a href='#aboutMe' onClick={() => setMenuOpen(false)}>
                <Button text='About Me'/>
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href='#projects' onClick={() => setMenuOpen(false)}>
                <Button text='Projects'/>
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href='#experience' onClick={() => setMenuOpen(false)}>
                <Button text='Experience'/>
              </a>
            </li><li className={styles['nav-item']}>
              <a href='#education' onClick={() => setMenuOpen(false)}>
                <Button text='Education'/>
              </a>
            </li><li className={styles['nav-item']}>
              <a href='#skills' onClick={() => setMenuOpen(false)}>
                <Button text='Skills'/>
              </a>
            </li>
          </ul> 
        }
      </div>
      <h1 className={styles['welcome-text']} >"What started as a small spark of interest in game development has turned into an ever-growing interest
      for the IT field."</h1>
      <Icon className={styles.icon} icon="iconamoon:arrow-down-2-bold" width="24" height="24"/>
    </header>
  )
}
