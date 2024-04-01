import DeleteButton from '../DeleteButton';
import { ICard } from './interface';
import Styled from './styles';


export function Card(props: ICard) {

	return (
		<>
			<Styled.Container>
				<Styled.Card>
					<Styled.TopCard>
						<Styled.Title>
							{props.id} - {props.title}
						</Styled.Title>
					</Styled.TopCard>
					<Styled.SubTitle>{props.body}</Styled.SubTitle>
				</Styled.Card>
				<div>
					<DeleteButton id={props.id} />
				</div>
			</Styled.Container>
		</>
	);
}
