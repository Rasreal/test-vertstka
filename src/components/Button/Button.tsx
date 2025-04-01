import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
	className?: string;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'primary',
	className = '',
}) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
