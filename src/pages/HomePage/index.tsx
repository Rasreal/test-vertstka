import { FC } from 'react';
import s from './HomePage.module.scss';
import { Solutions } from '@components/Solutions/Solutions.tsx';
import { OurWork } from '@components/OurWork/OurWork.tsx';

export const HomePage: FC = () => {
	return (
		<div className={s.wrap}>
			<div className={s.container}>
				<Solutions />
				<OurWork />
			</div>
		</div>
	);
};
