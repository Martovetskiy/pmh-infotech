import styles from "./Footer.module.css"
import React from "react";

interface FooterProps{
    pdfAction: () => void;
}

export const Footer: React.FC<FooterProps> = ({pdfAction}) => {
    return (
        <footer className={styles.footer}>
            <a onClick={pdfAction} className={styles.download}>Скачать PDF-сертификат</a>
            <span className={styles.copyright}>Указаная в сертификате продукция соответсвует дейсвтующим в России стандартам и техническим условиям. При переписке по вопросам качества ссылаться на номер телефона.</span>
        </footer>
    )
}