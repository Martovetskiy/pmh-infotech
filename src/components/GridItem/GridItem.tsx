import React from "react";
import styles from './GridItem.module.css';

interface GridItemProps{
    keyV: string
    value: string
}

export const GridItem: React.FC<GridItemProps> = ({keyV, value}) =>{
    return (
        <div className={styles.container}>
            <span className={styles.container__key}>{keyV}</span>
            <span className="container__value">{value}</span>
        </div>
    )
}