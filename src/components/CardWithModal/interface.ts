import { ReactNode } from 'react';

export interface ICard {
	id: ReactNode;
	title: ReactNode;
	body: ReactNode;
	onClick?: () => void;
}
