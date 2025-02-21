import styles from '../assets/components.module.css'
import { useState } from 'react';


function SquareButton ({ klik, onSquareClick, winner, boja }) {

    if (winner) {
        
    }

    return (
     <>
        <button
            className={styles.kvadrat}
            onClick={onSquareClick}
            disabled={winner !== null || klik !==null}
            style={{backgroundColor: boja}}
        >
            <span className={styles.xo}>{klik}</span>
        </button>
     </>
    )
}

export default SquareButton;