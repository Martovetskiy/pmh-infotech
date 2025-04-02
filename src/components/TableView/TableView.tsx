import React from "react";
import styles from "./TableView.module.css";

interface TableRowProps{
    children: React.ReactNode;
}

interface TableViewProps {
    fields: string[];
    children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({children}) => {
    return <tr className={`${styles.tableRow}`}>{children}</tr>;
}

export const TableView: React.FC<TableViewProps> = ({fields, children }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.theadRow}>
                    {fields.map((field, index) => (
                        <th key={field}>{fields[index]}</th>
                    ))}
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {children}
            </tbody>
        </table>
    );
};
