import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../assets/components.module.css'
import SquareButton from './SquareButton'

function Board ({ calculateWinner }) {

    const [popunjenaPolja, setPopunjenaPolja] = useState(Array(9).fill(null));
    const [xJeNaRedu, setxJeNaRedu] = useState(true);
    const [imaNull, setImaNull] = useState(true);
    let winner = calculateWinner(popunjenaPolja).winner;
    let winnerPolja = calculateWinner(popunjenaPolja).winnerPolja;
    
    const handleClick = (i) => {
        if (popunjenaPolja[i] || winner) {
            return;
        }
        const novaPopunjenaPolja = popunjenaPolja.slice(); //metoda .slice() radi kopiju prvotnog arraya
        if (xJeNaRedu) {
            novaPopunjenaPolja[i] = "V";
        } else {
            novaPopunjenaPolja[i] = "I";
        }
        setPopunjenaPolja(novaPopunjenaPolja);
        setxJeNaRedu(!xJeNaRedu);
    }

    useEffect(() => {
        if (!popunjenaPolja.includes(null)) {
            setImaNull(false);
        }
    }, [popunjenaPolja]);

    const dodijeliBoju = (i) => {
        for (let j=0; j<winnerPolja.length; j++) {
            if (i === winnerPolja[j]) {
                return ('#520524'); 
            }
        }
    }

    return (
        <>            
            <div className={styles.redak}>
                <SquareButton klik={popunjenaPolja[0]} onSquareClick={() => handleClick(0)} winner={winner}
                    boja={dodijeliBoju(0)}/>
                <SquareButton klik={popunjenaPolja[1]} onSquareClick={() => handleClick(1)} winner={winner}
                    boja={dodijeliBoju(1)}/>
                <SquareButton klik={popunjenaPolja[2]} onSquareClick={() => handleClick(2)} winner={winner}
                    boja={dodijeliBoju(2)}/>
            </div>
            <div className={styles.redak}>
                <SquareButton klik={popunjenaPolja[3]} onSquareClick={() => handleClick(3)} winner={winner}
                    boja={dodijeliBoju(3)}/>
                <SquareButton klik={popunjenaPolja[4]} onSquareClick={() => handleClick(4)} winner={winner}
                    boja={dodijeliBoju(4)}/>
                <SquareButton klik={popunjenaPolja[5]} onSquareClick={() => handleClick(5)} winner={winner}
                    boja={dodijeliBoju(5)}/>
            </div>
            <div className={styles.redak}>
                <SquareButton klik={popunjenaPolja[6]} onSquareClick={() => handleClick(6)} winner={winner}
                    boja={dodijeliBoju(6)}/>
                <SquareButton klik={popunjenaPolja[7]} onSquareClick={() => handleClick(7)} winner={winner}
                    boja={dodijeliBoju(7)}/>
                <SquareButton klik={popunjenaPolja[8]} onSquareClick={() => handleClick(8)} winner={winner}
                    boja={dodijeliBoju(8)}/>
            </div>

            
            {winner && <h3>POBJEDNIK JE {winner}</h3>}
            {!imaNull && <h3>NEMA POBJEDNIKA</h3>}
            {winner && 
                <button onClick={() => {setPopunjenaPolja(Array(9).fill(null))}}
                        className={styles.revans}>
                    REVANŠ!
                </button>
            }
        </>
    )
};

export default Board;

