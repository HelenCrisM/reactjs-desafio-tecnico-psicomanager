import { useEffect, useState } from 'react';
import { defaultComments, IComments } from '../../services/comments.interface';
import DeleteButton from '../DeleteButton';
import { ICard } from './interface';
import Styled from './styles';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { createNewComment, getCommentById } from '../../services/commentsService';
import { Card } from '../Card';


export function CardWithModal(props: ICard) {
	const [comments, setComments]: [IComments[], (comments: IComments[]) => void] = useState(defaultComments);

	const [show, setShow] = useState(false);

	const closeModal = () => setShow(false);
	const openModal = () => setShow(true);

	const data = {
		name: '',
		email: '',
		body: '',
	};
	const [dataInput, setInputData] = useState(data);

	const handleChange = (e: any) => {
		const value = e.target.value;
		setInputData({
			...dataInput,
			[e.target.name]: value,
		});
	};

	const clearForm = () => {
		setInputData(data);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const userData = {
			name: dataInput.name,
			email: dataInput.email,
			body: dataInput.body,
		};
		await createNewComment(userData)
			.finally(() => {
				clearForm();
				closeModal();
			});
	};

	useEffect(() => {
		(async () => {
			await getCommentById(props.id).then((response) => {
				setComments(response.data);
			});
		})();
	}, []);

	return (
		<>
			<Styled.Container>
				<Styled.Card onClick={openModal}>
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
			<Modal className="modal-dialog-scrollable" show={show} onHide={closeModal}>
				<Styled.Form onSubmit={handleSubmit}>
					<Modal.Body>
						<Styled.Label>
							Nome:
							<Styled.Input type="text" name="name" value={dataInput.name} onChange={handleChange} />
						</Styled.Label>
						<Styled.Label>
							Email:
							<Styled.Input type="text" name="email" value={dataInput.email} onChange={handleChange} />
						</Styled.Label>
						<Styled.Label>
							Comentário:
							<Styled.Input type="text" name="body" value={dataInput.body} onChange={handleChange} />
						</Styled.Label>
						<Button type="submit" variant="primary" onClick={handleSubmit}>
							Salvar
						</Button>
						<hr />
						{comments.map((comment) => {
							return (
								<div key={comment.id}>
									<Card id={comment.id} title={comment.name} body={comment.body} />
								</div>
							);
						})}
					</Modal.Body>
				</Styled.Form>
			</Modal>
		</>
	);
}
