import styles from "./Spinner.module.css";
import React from "react";

export const Spinner:React.FC = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinnerWrapper}>
                <div className={styles.spinner}></div>
            </div>

            <span className={styles.load}>Загрузка...</span>
        </div>
    )
}