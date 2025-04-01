import React from 'react';
import styles from './WorkCard.module.scss';

export interface WorkCardProps {
	id: number;
	title: string;
	description?: string;
	tag?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, tag }) => {
	return (
		<div className={styles.card}>
			<div className={styles['card-hover-content']}>
				<h1>{title}</h1>
				{tag && <p className={styles.tag}>{tag}</p>}
				{description && <button>Подробнее</button>}
			</div>
			<span className={styles.placeholder}>{title}</span>
		</div>
	);
};

export default WorkCard;
