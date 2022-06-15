import React from 'react';
import styles from './Layout.module.css';
import Image from 'next/image';

const Layout = () => {
    return (
        <>
            <header>

            </header>
            <main>{children}</main>
            <footer>
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by Hugo Gama{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </>
    );
}

export default Layout;