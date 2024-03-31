import { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { defaultComments, IComments } from '../../services/comments.interface';
import { getCommentById } from '../../services/commentsService';
import { ICommentsPageProps } from './interface';
import { centerDivStyle } from './styles';
import CustomCard from '../../components/Card';

const CommentsPage = (props: ICommentsPageProps) => {
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
		<div style={centerDivStyle}>
			<Box sx={{ flexGrow: 1 }}>
				<Button variant="contained">+ Novo Comentário</Button>
			</Box>
			<Grid container spacing={2} direction="column" justifyContent="center">
				{comments
					.map((comment) => (
						<Grid key={comment.id} item>
							<CustomCard id={props.id?.toString()} title={comment.name} body={comment.body} />
						</Grid>
					))}
			</Grid>
			{error && <p className="error">{error}</p>}
		</div>
	);
}

export default CommentsPage;

