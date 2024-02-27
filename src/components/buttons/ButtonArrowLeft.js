import React from 'react'
import styles from '../../styles/buttons.module.css'
import { Icon } from '@iconify/react';

export default function ButtonArrowLeft({onClick, isDisabled}) {

    function handleClick() {
        console.log("Left arrow clicked");
    }

    return (
        <button className={styles['btn-arrow']} disabled={isDisabled} onClick={onClick ? onClick : handleClick}>
            <Icon icon="iconamoon:arrow-left-2-bold" width="32" height="32"/>
        </button>
    )
}
