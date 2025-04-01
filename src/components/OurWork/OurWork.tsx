import { Navbar } from '@/components/Navbar/Navbar';
import WorkCardGrid from '@components/WorkCardGrid/WorkCardGrid.tsx';
import styles from './OurWork.module.scss';
import { useEffect, useState } from 'react';

export const OurWork = () => {
	const [categoryActive, setCategory] = useState('Главная');

	// Load from saved storage
	useEffect(() => {
		const savedActiveNavChoice = localStorage.getItem('activeNavTabChoice');
		if (savedActiveNavChoice) setCategory(savedActiveNavChoice);
		console.log("123" + savedActiveNavChoice);
	}, [categoryActive]);

	console.log('categoryActive', categoryActive);
	return (
		<div className={styles.ourwork}>
			<h1>Наши Работы</h1>
			<p>Ознакомьтесь с нашими лучшими проектами в различных категориях</p>

			<Navbar setCategory={setCategory} />
			<WorkCardGrid category={categoryActive} />
		</div>
	);
};
