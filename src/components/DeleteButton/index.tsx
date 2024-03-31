/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomModal from '../Modal';
import { deletePost } from '../../services/postService';
import { IDeleteButtonProps } from './interface';

export default function DeleteButton(props: IDeleteButtonProps) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

		async function deletePostFunction(id: React.ReactNode) {
			return await deletePost(id).then(() => {
				alert('Post deleted!');
				setPost(null);
			});
		}

	return (
		<div>
			<IconButton aria-label="delete" color="error" onClick={handleOpen}>
				<DeleteIcon />
			</IconButton>
			<CustomModal
				buttonsRowChildren={
					<Grid container direction="row" justifyContent="space-between" alignItems="center">
						<Grid item xs={2} sm={4} md={4}>
							<Button variant="outlined" onClick={handleClose}>
								cancelar
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button variant="contained" onClick={deletePostFunction(props.id)}>
								excluir
							</Button>
						</Grid>
					</Grid>
				}
				title="Atenção! Ao excluir esta postagem os comentáriostambém serão excluídos"
				open={open}
				colorTitle="#ff0000"
				handleClose={handleClose}
			/>
		</div>
	);
}
