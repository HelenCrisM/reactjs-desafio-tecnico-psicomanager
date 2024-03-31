import axios from 'axios';
import { IComments } from './comments.interface';
import { ReactNode } from 'react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getCommentById = async (id: ReactNode) => {
	const data = await axios.get<IComments[]>(`${baseUrl}/comments?postid=${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return data;
};
