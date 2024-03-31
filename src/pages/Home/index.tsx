import { useEffect, useState } from 'react';
import { defaultPosts, IPost } from '../../services/post.interface.ts';
import { getAllPosts } from '../../services/postService';
import CustomCard from '../../components/Card';
import { Box, Button, Grid, Typography } from '@mui/material';
import { centerDivStyle } from './styles.ts';
import Header from '../../components/Header/index.tsx';

function Home() {
	const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);
	const [error, setError]: [string, (error: string) => void] = useState('');

	useEffect(() => {
		(async () => {
			await getAllPosts()
				.then((response) => {
					setPosts(response.data);
					console.log('Data: ', response.data);
				})
				.catch((ex) => {
					const error = ex.response.status === 404 ? 'Resource Not found' : 'An unexpected error has occurred';
					setError(error);
				});
		})();
	}, []);

	return (
		<Grid container direction={'column'} spacing={2}>
			<Header title="Lista de Postagens" nameButton="+ Nova Postagem" />
			<Grid container spacing={2} direction="column" justifyContent="center" alignItems={'center'}>
				{posts
					.sort((a, b) => {
						const firstTitle = a.title.toLowerCase(),
							secondTitle = b.title.toLowerCase();
						return firstTitle == secondTitle ? 0 : firstTitle > secondTitle ? 1 : -1;
					})
					.map((post) => (
						<Grid key={post.id} item>
							<CustomCard id={post.id} title={post.title} body={post.body} />
						</Grid>
					))}
			</Grid>
			{error && <p className="error">{error}</p>}
		</Grid>
	);
}

export default Home;
