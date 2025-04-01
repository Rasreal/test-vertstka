import styles from './Solutions.module.scss';
import { Card } from '@components/Card/Card.tsx';
import clsx from 'clsx';

const cardData = [
	{
		title: 'Креативный дизайн',
		rating: 4.9,
		description:
			'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
		tag: 'Дизайн',
		headIcon: '✨',
	},
	{
		title: 'Быстрая разработка',
		rating: 4.8,
		description:
			'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
		tag: 'Разработка',
		headIcon: '🚀',
	},
	{
		title: 'Мобильная оптимизация',
		rating: 4.7,
		description:
			'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		tag: 'Оптимизация',
		headIcon: '📱',
	},
	{
		title: 'Мобильная оптимизация',
		rating: 4.7,
		description:
			'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		tag: 'Оптимизация',
		headIcon: '📱',
	},
	{
		title: 'Мобильная оптимизация',
		rating: 4.7,
		description:
			'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		tag: 'Оптимизация',
		headIcon: '📱',
	},
];

export const Solutions = () => {
	return (
		<div className={styles.maxContainer}>
			<div className={styles.solutions}>
				<h1>Инновационные решения для вашего бизнеса</h1>

				<div className={clsx(styles.solutions, styles.solutions_cards)}>
					{cardData.map((card, index) => (
						<Card
							key={index}
							title={card.title}
							rating={card.rating}
							description={card.description}
							tag={card.tag}
							headIcon={card.headIcon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
