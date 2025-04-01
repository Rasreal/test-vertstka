import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

const navLinks = [
	{ name: 'Главная', href: '/' },
	{ name: 'О нас', href: '/' },
	{ name: 'Услуги', href: '/' },
	{ name: 'Портфолио', href: '/' },
	{ name: 'Контакты', href: '/' },
];

interface NavbarProps {
	setCategory: Dispatch<SetStateAction<string>>;
}

export const Navbar = ({ setCategory }: NavbarProps) => {
	const [activeNavTab, setActiveNavTab] = useState('Главная');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedActiveNavChoice = localStorage.getItem('activeNavTabChoice');
			if (savedActiveNavChoice) setActiveNavTab(savedActiveNavChoice);
		}
	}, []);

	console.log('active navbar:', activeNavTab);

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__menu}>
				{navLinks.map((link) => (
					<li key={link.name}>
						<a
							className={`${styles.navbar__item} ${activeNavTab === link.name ? styles.active : ''}`}
							onClick={(e) => {
								e.preventDefault();
								console.log('Clicked:', link.name);
								setActiveNavTab(link.name);
								localStorage.setItem('activeNavTabChoice', link.name);
								setCategory(link.name);
							}}
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
