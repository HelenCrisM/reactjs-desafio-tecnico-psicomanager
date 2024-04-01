import styled from 'styled-components';

const Button = styled.button`
	background: #bf4f74;
	color: #fff;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #bf4f74;
	border-radius: 3px;
	cursor: pointer;

	&:active {
		background: grey;
		transition: background 1s;
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
	Button,
	Input,
	Label,
	Form,
};
