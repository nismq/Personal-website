import React from 'react'
import styles from '../styles/textbox.module.css'

export default function TextBox({text="TextBox"}) {
  return (
    <div className={styles.container}>
        <p className={styles.text}>{text}</p>
    </div>
  )
}
