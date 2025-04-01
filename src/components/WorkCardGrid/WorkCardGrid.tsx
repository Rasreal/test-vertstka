import WorkCard, { WorkCardProps } from '../WorkCard/WorkCard';
import styles from './WorkCardGrid.module.scss';
import { useEffect } from 'react';
import { workCardData } from '@/data/workCardData';

interface WorkCardGridProps {
	category: string;
}

const WorkCardGrid: React.FC<WorkCardGridProps> = ({ category }) => {
	const cards: WorkCardProps[] = workCardData[category] || [];

	useEffect(() => {
		console.log('Category: ' + category);
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
