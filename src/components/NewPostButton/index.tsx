import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Styled from './styles';
import { createNewPost } from '../../services/postService';

const NewPostButton = () => {
	const [show, setShow] = useState(false);

	const closeModal = () => setShow(false);
	const openModal = () => setShow(true);
	const data = {
		title: '',
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
			title: dataInput.title,
			body: dataInput.body,
		};
		await createNewPost(userData)
			.finally(() => {
				clearForm();
				closeModal();
			});
	};

	return (
		<>
			<Styled.Button onClick={openModal}>+ Nova Postagem</Styled.Button>
			<Modal show={show} onHide={closeModal}>
				<Styled.Form onSubmit={handleSubmit}>
					<Modal.Body>
						<Styled.Label>
							Título:
							<Styled.Input type="text" name="title" value={dataInput.title} onChange={handleChange} />
						</Styled.Label>
						<Styled.Label>
							Descrição:
							<Styled.Input type="text" name="body" value={dataInput.body} onChange={handleChange} />
						</Styled.Label>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeModal}>
							Cancelar
						</Button>
						<Button type="submit" variant="primary" onClick={handleSubmit}>
							Salvar
						</Button>
					</Modal.Footer>
				</Styled.Form>
			</Modal>
		</>
	);
};

export default NewPostButton;
