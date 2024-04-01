import axios from 'axios';
import { IComments } from './comments.interface';
import { ReactNode } from 'react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getCommentById = async (id: ReactNode) => {
	const data = await axios.get<IComments[]>(`${baseUrl}/posts/${id}/comments`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return data;
};

export const createNewComment = async (comment: IComments) => {
	const data = await axios.post<IComments[]>(`${baseUrl}/comments`, comment);
	return data;
};
