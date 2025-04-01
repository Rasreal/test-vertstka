import React from 'react';
import styles from './Tag.module.scss';

type TagProps = {
	children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({ children }) => {
	return <div className={`${styles.tag}`}>{children}</div>;
};
