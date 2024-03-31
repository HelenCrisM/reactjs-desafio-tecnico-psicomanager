import { ReactNode } from 'react';

export interface IModalProps {
	id?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	email?: ReactNode;
	handleClose?: () => void;
	open: boolean;
	buttonsRowChildren?: ReactNode;
	colorTitle?: string;
}


