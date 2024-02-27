import React from 'react'
import styles from '../styles/footer.module.css'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className={styles.container}>
        <div style={{display: 'flex', gap: '7px'}}>
            <Icon icon="mdi:linkedin" width='18' height='18' />
            <Icon icon="mdi:github" width="18" height="18" />
        </div>
        <p>Copyright C Jere Nissinen 2024</p>
    </div>
  )
}
