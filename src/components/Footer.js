import React from 'react'
import styles from '../styles/footer.module.css'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className={styles.container}>
        <div style={{display: 'flex', gap: '7px'}}>
            <a href='https://www.linkedin.com/in/jere-nissinen-418756258/' target='_blank' rel="noreferrer" className={styles.link}>
              <Icon icon="mdi:linkedin" width='18' height='18' />
            </a>
            <a href='https://github.com/nismq' target='_blank' rel="noreferrer" className={styles.link}>
              <Icon icon="mdi:github" width="18" height="18" />
            </a>
        </div>
        <p>Copyright C Jere Nissinen 2024</p>
    </div>
  )
}
