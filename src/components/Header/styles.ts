import styled from 'styled-components';

const Header = styled.header`
	padding: 10px 20px;
	display: flex;
	gap: 30%;
	align-items: center;
`;

const Title = styled.h4`
	font-size: 1rem;
	font-weight: 400;

	@media (max-width: 800px) {
		font-size: 0.7rem;
	}
`;



export default {
	Header,
	Title,
};
