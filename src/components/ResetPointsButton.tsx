import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ResetPointsButton.module.css';


export function ResetPointsButton() {

    const { resetPoints } = useContext(ChallengesContext);

    return (
        // <div className={styles.container}>
        //     <button type='button' className={styles.first} onClick={resetPoints} >
        //         reset points
        //     </button>
        // </div >
    );
}