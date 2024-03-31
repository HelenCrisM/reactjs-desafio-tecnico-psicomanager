import { Button, Grid, Typography } from '@mui/material';
import { IHeaderProps } from './interface';

// import { Container } from './styles';

const Header = (props: IHeaderProps) => {
  return (
		<>
			<Grid container spacing={2} direction="row" justifyContent="space-around">
				<Grid item>
					<Button variant="contained">{props.nameButton}</Button>
				</Grid>
				<Grid item>
					<Typography gutterBottom variant="h5" component="div">
						{props.title}
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default Header;