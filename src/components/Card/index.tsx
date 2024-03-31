import { Card, CardContent, Typography, CardActionArea, CardActions, Grid } from '@mui/material';

import { ICardProps } from './interface';

import DeleteButton from '../DeleteButton';
import { defaultComments, IComments } from '../../services/comments.interface';
import { useEffect, useState } from 'react';
import { getCommentById } from '../../services/commentsService';

export default function CustomCard(props: ICardProps) {
	const [comments, setComments]: [IComments[], (posts: IComments[]) => void] = useState(defaultComments);
	const [error, setError]: [string, (error: string) => void] = useState('');

	useEffect(() => {
		(async () => {
			await getCommentById(props.id)
				.then((response) => {
					setComments(response.data);
					console.log('Data: ', response.data);
				})
				.catch((ex) => {
					const error = ex.response.status === 404 ? 'Resource Not found' : 'An unexpected error has occurred';
					setError(error);
				});
		})();
	}, []);
	return (
		<>
			<Card variant="outlined" sx={{ minWidth: 275, maxWidth: 596 }}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.id} - {props.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{props.body}
						</Typography>
					</CardContent>
				</CardActionArea>
				<Grid container spacing={2} direction="column" justifyContent="center">
					{comments.map((comment) => (
						<Grid key={comment.id} item>
							<CustomCard id={props.id?.toString()} title={comment.name} body={comment.body} />
						</Grid>
					))}
				</Grid>
				{error && <p className="error">{error}</p>}

				<CardActions>
					<DeleteButton id={props.id} />
				</CardActions>
			</Card>
		</>
	);
}
