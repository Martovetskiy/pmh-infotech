import styles from "./NotFoundPage.module.css"
import React from "react";

export const NotFoundPage:React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.text_group}>
                <p className={styles.text_404}>404</p>
                <p className={styles.text_lost}>
                    Эта страница не найдена. <br/>Убедитесь что ссылка верна или данные актуальны.
                </p>
            </div>
        </div>
    );
}
