import styled from "styled-components";

const Button = styled.button`
	background: white;
	color: red;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid white;
	border-radius: 3px;
	cursor: pointer;

	&:active {
		background: grey;
		transition: background 1s;
	}
`;

export default { Button }
