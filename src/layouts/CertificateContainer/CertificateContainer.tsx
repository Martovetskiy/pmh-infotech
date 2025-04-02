import { Certificate } from "../../model/Certificate.ts";
import React from "react";
import styles from './CertificateContainer.module.css';
import { formatDate } from "../../lib/Utils.ts"; // Убедитесь, что здесь нет .ts
import { GridItem } from "../../components/GridItem/GridItem.tsx"; // Убедитесь, что здесь нет .tsx

interface CertificateContainerProps {
    certificate: Certificate;
}

const CertificateContainer: React.FC<CertificateContainerProps> = ({ certificate }) => {

    const issueDate = new Date(certificate.issueDate);
    const contractDate = new Date(certificate.contractDate);

    return (
        <div className={styles.container}>
            <div className={styles.container__certificateWrapper}>
                <span className={styles.certificate__title}>СЕРТИФИКАТ № {certificate.certificateId}</span>
                <span className={styles.certificate__date}>от {formatDate(issueDate)}</span>
            </div>
            <div className={styles.container__productWrapper}>
                <span className={styles.product__title}>Наименование продукции</span>
                <span className={styles.product__name}>{certificate.productName}</span>
            </div>
            <div className={styles.container__infoGrid}>
                <GridItem keyV="№ Заказа" value={certificate.orderId.toString()} />
                <GridItem keyV="Номер контракта" value={certificate.contractNumber} />
                <GridItem keyV="Дата контракта" value={formatDate(contractDate)} />
                <GridItem keyV="Номер спецификации" value={certificate.specificationNumber} />
                <GridItem keyV="Чистый вес" value={certificate.netWeight.toString()} />
                <GridItem keyV="Валовый вес" value={certificate.grossWeight.toString()} />
                <GridItem keyV="Общее количество мест" value={certificate.totalPlaces.toString()} />
                <GridItem keyV="Тип упаковки" value={certificate.packagingType} />
            </div>
        </div>
    );
}


export default CertificateContainer;
