
import React from "react";
import styles from "./AdditionalInfoContainer.module.css"
import { GridItem } from "../../components/GridItem/GridItem.tsx";
import {AdditionInfo} from "../../model/AdditionInfo.ts"; // Убедитесь, что здесь нет .tsx

interface AdditionalInfoContainerContainerProps {
    data: AdditionInfo;
}

const AdditionalInfoContainer: React.FC<AdditionalInfoContainerContainerProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__infoGrid}>
                <GridItem keyV="Грузополучатель" value={data.recipient} />
                <GridItem keyV="Адрес грузополучателя" value={data.addressRecipient} />
                <GridItem keyV="Станция назначения" value={data.destinationStation} />
                <GridItem keyV="Номер трнаспортного средства" value={data.numberVehicle} />
            </div>
        </div>
    );
}

export default AdditionalInfoContainer;
