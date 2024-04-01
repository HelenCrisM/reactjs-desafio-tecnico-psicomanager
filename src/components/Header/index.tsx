import React from 'react';
import Styled from './styles';
import NewPostButton from '../NewPostButton';

const Header: React.FC = () => {
	return (
		<Styled.Header>
			<NewPostButton />
			<Styled.Title>Lista de Postagens</Styled.Title>
		</Styled.Header>
	);
};

export default Header;
