import React from "react";
import styles from "./Header.module.css";
import DownloadIcon from "../../assets/download.png";
// import MenuIcon from "../../assets/menu.png";

interface HeaderProps{
    pdfAction: () => void;
}

const Header: React.FC<HeaderProps> = ({pdfAction}) =>{

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                {/*<div className={styles.content__itemLeft}>*/}
                {/*    <div className={styles.menu}>*/}
                {/*        <button className={styles.menu__button}>*/}
                {/*            <img src={MenuIcon} className={styles.menu__img} alt="menu"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <a href="" className={styles.logo}/>*/}
                {/*</div>*/}
                <div className={styles.content__itemRight}>
                    <a onClick={pdfAction} className={styles.download}>
                        <img src={DownloadIcon} className={styles.download__img} alt="dowload"/>
                        <span className={styles.download__text}>Скачать PDF</span>
                    </a>
                    <a onClick={pdfAction} className={styles.logo}/>
                </div>
            </div>
        </header>
    )
}

export default Header;