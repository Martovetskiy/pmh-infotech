import styles from "./TabBar.module.css";
import React, {ReactNode, useState} from "react";

export interface Tab {
    index: number,
    label: string,
    content: ReactNode
}

interface TabBarProps{
    tabs: Tab[]
}



export const TabBar: React.FC<TabBarProps> = ({tabs}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <div className={styles.tabBar}>
            <div className={styles.tabBar__tabs}>
                {tabs.map((item, index) => (
                    <div key={index} className={(currentIndex === item.index) ? styles.tabActive : styles.tab} onClick={() =>setCurrentIndex(index)}>{item.label}</div>
                ))}
            </div>
            {tabs[currentIndex].content}
        </div>
    )
}