/* eslint-disable @typescript-eslint/no-explicit-any */
import { IModalProps } from './interface';

import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material';
import { style } from './styles';


export default function CustomModal(props: IModalProps) {

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={props.open}
				onClose={props.handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={props.open}>
					<Box sx={style}>
						<Typography id="transition-modal-title" variant="h6" component="h2" color={props.colorTitle}>
							{props.title}
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}>
							{props?.email}
							{props.description}
						</Typography>
            {props.buttonsRowChildren}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
