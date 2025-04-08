import styles from "./NotFoundClient.module.css"
import React from "react";
import {useParams} from "react-router-dom";

export const NotFoundClient: React.FC = () => {
    const { id } = useParams<{id: string}>()

    return (
        <div className={styles.wrapper}>
            <div className={styles.text_group}>
                <p className={styles.text_404}>404</p>
                <p className={styles.text_lost}>
                    Похоже, сертификат {id} не существует.
                </p>
            </div>
        </div>
    )
}