import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './MainLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Header from '@components/Header/Header.tsx';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	classNames,
}) => {
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<div>
				<Header />
			</div>
			<div className={clsx(s.wrap__body, classNames?.body)}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</div>
			<div className={clsx(s.wrap__footer, classNames?.footer)}>
				{' '}
				© 2025 All rights reserved.{' '}
			</div>
		</div>
	);
};
