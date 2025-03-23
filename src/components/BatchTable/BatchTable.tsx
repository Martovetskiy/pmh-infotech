import styles from "./BatchTable.module.css"
import {Batch} from "../../model/Batch.ts";
import React from "react";

interface BatchTableProps {
    batches: Batch[]
}

const BatchTable: React.FC<BatchTableProps> = ({batches}) => {
    return (
        <table className={styles.batchTable}>
            <thead className={styles.batchTable__head}>
                <tr className={styles.head__tr}>
                    <th>№ п/п</th>
                    <th>№ поизации</th>
                    <th>Номер плавки</th>
                    <th>Требования к химическому составу</th>
                    <th>Технические требования</th>
                    <th>Профильный стандарт</th>
                    <th>Класс проката</th>
                    <th>Размер профиля, мм</th>
                    <th>Длина, мм</th>
                    <th>Сорт</th>
                    <th>Количество мест</th>
                    <th>Масса нетто, т</th>
                    <th>Масса брутто, т</th>
                </tr>
            </thead>
            <tbody>
                {batches.map(batch => (
                    <tr className={styles.body__tr} key={batch.id}>
                        <td>{batch.id}</td>
                        <td>{batch.positionNumber}</td>
                        <td>{batch.meltNumber}</td>
                        <td>{batch.chemicalCompositionGOST}</td>
                        <td>{batch.technicalRequirementsGOST}</td>
                        <td>{batch.profileStandardGOST}</td>
                        <td>{batch.steelClass}</td>
                        <td>{batch.profileSize}</td>
                        <td>{batch.length}</td>
                        <td>{batch.grade}</td>
                        <td>{batch.totalPlaces}</td>
                        <td>{batch.netWeight}</td>
                        <td>{batch.grossWeight}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BatchTable;