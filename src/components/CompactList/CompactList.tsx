import React, {ReactNode} from "react";
import styles from "./CompactList.module.css";

interface CompactListItemProps {
    label: string,
    children: ReactNode
}

export const CompactListItem: React.FC<CompactListItemProps> = ({label, children}) => {
    return (<div className={styles.compactListItem}>
        <div className={styles.titleWrapper}>
            <span className={styles.title}>{label}</span>
        </div>
        {children}
    </div>)
}

interface CompactListProps {
    onNextPage: () => void;
    onPrevPage: () => void;
    currentPage: number;
    totalPages: number;
    children: ReactNode
}

export const CompactList: React.FC<CompactListProps> = ({onNextPage, onPrevPage, currentPage, totalPages, children}) => {
    return (
        <div className={styles.compactList}>
            <div className={styles.compactList__toolbar}>
                <button onClick={onPrevPage} disabled={currentPage===1}>Назад</button>
                <span className={styles.toolbar__pages}>{currentPage} / {totalPages}</span>
                <button onClick={onNextPage} disabled={currentPage===totalPages}>Вперед</button>
            </div>
            {children}
        </div>
    )
}