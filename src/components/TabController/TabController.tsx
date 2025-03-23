import styles from './TabController.module.css'
import React, {useState} from "react";
import {Batch} from "../../model/Batch.ts";
import BatchTable from "../BatchTable/BatchTable.tsx";

const TabController: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<string>("Tab_Batch");

    const batches: Batch[] = [
        {
            id: 2,
            positionNumber: 23,
            meltNumber: 201847, // Primary (example for the second batch)
            chemicalCompositionGOST: "ГОСТ 34028-2016",
            technicalRequirementsGOST: "ГОСТ 34028-2016",
            profileStandardGOST: "ГОСТ 34028-2016",
            steelClass: "A500C",
            profileSize: 20,
            length: "МД 1170",
            grade: "1C",
            totalPlaces: 21,
            netWeight: 68.996,
            grossWeight: 69.164
        },
        {
            id: 2,
            positionNumber: 23,
            meltNumber: 201847, // Primary (example for the second batch)
            chemicalCompositionGOST: "ГОСТ 34028-2016",
            technicalRequirementsGOST: "ГОСТ 34028-2016",
            profileStandardGOST: "ГОСТ 34028-2016",
            steelClass: "A500C",
            profileSize: 20,
            length: "МД 1170",
            grade: "1C",
            totalPlaces: 21,
            netWeight: 68.996,
            grossWeight: 69.164
        }
    ];


    let content;
    switch (currentTab) {
        case 'Tab_Batch':
             content = <BatchTable batches={batches}/>
             break;
        case 'Tab_Chemical':
            content = <span>2</span>;
            break;
        case 'Tab_Testing':
            content = <span>3</span>;
            break;
        case 'Tab_Product':
            content = <span>4</span>;
            break;
    }
    return (
        <div className={styles.container}>
            <div className={styles.tabController}>
                <div className={currentTab === "Tab_Batch" ? styles.tabActive : styles.tab} onClick={() => setCurrentTab("Tab_Batch")}>Партии</div>
                <div className={currentTab === "Tab_Chemical" ? styles.tabActive : styles.tab} onClick={() => setCurrentTab("Tab_Chemical")}>Химический анализ</div>
                <div className={currentTab === "Tab_Testing" ? styles.tabActive : styles.tab} onClick={() => setCurrentTab("Tab_Testing")}>Лабораторные испытания</div>
                <div className={currentTab === "Tab_Product" ? styles.tabActive : styles.tab} onClick={() => setCurrentTab("Tab_Product")}>Единицы продукции</div>
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    )
}

export default TabController;