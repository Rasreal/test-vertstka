import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';


const navLinks = [
	{ name: 'Главная', href: '/' },
	{ name: 'О нас', href: '/about' },
	{ name: 'Услуги', href: '/service' },
	{ name: 'Портфолио', href: '/portfolio' },
	{ name: 'Контакты', href: '/contacts' },
];

interface HeaderProps {
	logo?: string;
}

const Header: React.FC<HeaderProps> = ({ logo = 'CompanyName' }) => {
	const [active, setActive] = useState(() => {
		return localStorage.getItem('activeNav') || 'Главная';
	});


	//componentDidUpdate
	useEffect(() => {
		localStorage.setItem('activeNav', active);
	}, [active]);

	return (
		<div className={styles.maxContainer}>
			<header className={styles.header}>
				<div className={styles.logo}>{logo}</div>
				<nav>
					<ul className={styles.nav__menu}>
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className={clsx(styles.nav__item, { [styles.active]: active === link.name })}
									onClick={() => setActive(link.name)}
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
