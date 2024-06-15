import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
    return (
        <header className={styles.header} id="header">
            <a href="./index.html">
                <h1>{titulo}</h1>
            </a>
        </header>
    );
};

export default Header;
