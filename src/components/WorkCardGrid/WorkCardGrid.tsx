import WorkCard, { WorkCardProps } from '../WorkCard/WorkCard';
import styles from './WorkCardGrid.module.scss';
import { useEffect } from 'react';

interface WorkCardGridProps {
	category: string;
}

const cardData: Record<string, WorkCardProps[]> = {
	Главная: [
		{
			id: 1,
			title: 'E-commerce платформа',
			tag: 'Веб-платформа',
			description:
				'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
		},
		{ id: 2, title: 'Проект 2' },
		{ id: 3, title: 'Проект 3' },
		{ id: 4, title: 'Проект 4' },
		{ id: 5, title: 'Проект 5' },
		{ id: 6, title: 'Проект 6' },
	],
	'О нас': [
		{
			id: 1,
			title: 'О нас проект',
			tag: 'История',
			description: 'Наша история и миссия.',
		},
	],
};

const WorkCardGrid: React.FC<WorkCardGridProps> = ({ category }) => {
	const cards = cardData[category] || [];

	useEffect(() => {
		console.log('catreeogr' + category);
		console.log(cards);
	}, [category]);
	return (
		<center>
			<div className={styles.grid}>
				{cards.map((card) => (
					<WorkCard key={card.id} {...card} />
				))}
			</div>
		</center>
	);
};

export default WorkCardGrid;
