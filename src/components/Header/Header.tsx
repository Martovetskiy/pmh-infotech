import React from "react";
import styles from "./Header.module.css";
import DownloadIcon from "../../assets/download.png";
// import MenuIcon from "../../assets/menu.png";
import {useLocation} from "react-router-dom";

const Header: React.FC = () =>{
    const location = useLocation()

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
                    <a href={location.pathname} className={styles.download}>
                        <img src={DownloadIcon} className={styles.download__img} alt="dowload"/>
                        <span className={styles.download__text}>Скачать PDF</span>
                    </a>
                    <a href="" className={styles.logo}/>
                </div>
            </div>
        </header>
    )
}

export default Header;