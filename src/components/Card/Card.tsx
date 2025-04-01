import React from 'react';
import styles from './Card.module.scss';
import { Tag } from '@components/Tag/Tag.tsx';


interface CardProps {
	title: string;
	headIcon: string;
	description: string;
	rating: number;
	tag: string;
}

export const Card: React.FC<CardProps> = ({
	title = 'Креативный дизайн',
	headIcon = '✨',
	description = 'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего\n' +
		'\t\t\t\tбренда и привлекают внимание целевой аудитории.',
	rating = 4.9,
	tag = 'Дизайн',
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.iconWrapper}>{headIcon}</div>

			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>

			<div className={styles.footer}>
				<div className={styles.rating}>
					<span className={styles.star}>★</span>
					<span className={styles.score}>{rating}</span>
				</div>
				<Tag>{tag}</Tag>
				{/*<div className={styles.tag}>{tag}</div>*/}
			</div>
		</div>
	);
};
