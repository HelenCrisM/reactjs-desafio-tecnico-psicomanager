import axios from 'axios';
import { IPost } from './post.interface';
import { ReactNode } from 'react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getAllPosts = async () => {
	const data = await axios.get<IPost[]>(`${baseUrl}/posts`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return data;
};

export const deletePost = async (id: ReactNode) => {
	const data = await axios.delete<IPost[]>(`${baseUrl}/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return data;
};
