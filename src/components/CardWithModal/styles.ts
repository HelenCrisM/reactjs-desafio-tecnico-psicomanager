import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	border-radius: 8px;
	box-shadow: 0 8px 16px #26395338;
	width: 350px;
	height: 50%;
	margin-top: 1rem;
	overflow-y: auto;
	margin-right: 1rem;
	padding: 0px 10px;
`;

const Card = styled.div`
	cursor: pointer;

	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--color-blue-light);
	}

	&:hover {
		#img {
			height: 100px;
		}
	}
	&:active {
		background: grey;
		transition: background 1s;
	}

	@media (max-width: 800px) {
		width: 250px;
		height: 150px;
	}
`;

const TopCard = styled.div`
	padding: 20px 10px 5px 10px;
`;

const Title = styled.h4`
	font-size: 1rem;
	font-weight: 400;
	text-align: justify;

	@media (max-width: 800px) {
		font-size: 0.7rem;
	}
`;

const SubTitle = styled.h3`
	font-size: 0.7rem;
	font-weight: 400;

	@media (max-width: 800px) {
		font-size: 0.5rem;
	}
`;

const MediaCard = styled.div`
	padding: 5px 10px;
	font-size: 0.9rem;

	@media (max-width: 800px) {
		font-size: 0.7rem;
	}
`;


const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Label = styled.label`
	width: 80%;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: bold;
`;

const Input = styled.input`
	display: block;
	margin-bottom: 25px;
	height: 6vh;
	width: 100%;
`;



export default {
	Container,
	Card,
	TopCard,
	Title,
	SubTitle,
	MediaCard,
	Form,
	Input,
	Label,
};
