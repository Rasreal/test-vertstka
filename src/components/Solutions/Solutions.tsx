import styles from './Solutions.module.scss';
import { Card } from '@components/Card/Card.tsx';
import clsx from 'clsx';
import { cardData, CardData } from '@/data/cardData'; // Import the data and types

export const Solutions = () => {
	return (
		<div className={styles.maxContainer}>
			<div className={styles.solutions}>
				<h1>Инновационные решения для вашего бизнеса</h1>

				<div className={clsx(styles.solutions, styles.solutions_cards)}>
					{cardData.map((card: CardData, index: number) => (
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
