import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Styled from './styles';
import { deletePost } from '../../services/postService';
import { IDeleteButton } from './interface';

function DeleteButton(props: IDeleteButton) {
	const [show, setShow] = useState(false);

	const closeModal = () => setShow(false);
	const openModal = () => setShow(true);

	async function deletePostFunction(id: React.ReactNode) {
		var data = await deletePost(id)
			.then(() => {
				alert('Post deletado!');
			})
			.finally(closeModal);
		return data;
	}

	return (
		<>
			<Styled.Button onClick={openModal}>
				<FontAwesomeIcon icon={faTrash} />
			</Styled.Button>

			<Modal show={show} onHide={closeModal}>
				<Modal.Body>
					<h4 style={{ color: 'red' }}>Atenção! Ao excluir esta postagem os comentários também serão excluídos</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Cancelar
					</Button>
					<Button variant="primary" onClick={() => deletePostFunction(props.id)}>
						Excluir
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteButton;
