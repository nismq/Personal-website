import React from 'react'
import styles from '../../styles/buttons.module.css'
import { Icon } from '@iconify/react';

export default function Button({text="button", show_icon=false, onClick}) {

    function handleClick() {
        // console.log(text + " : clicked");
    }

    return (
        <button onClick={onClick ? onClick : handleClick} className={styles.btn} >
            <p className={styles.btn_text} >{text}</p>
            {show_icon &&
                <Icon icon="iconamoon:arrow-right-2-bold" width="14" height="14"/>
            }
        </button>
    )
}
