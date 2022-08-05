import styled from "styled-components";

const backgroundColor = (props)=>props.primary ? '#5964e0': '#F4F6F8';
const textColor = (props)=>props.primary?'#fff':'#5964e0';
const buttonWidth = (props)=>props.primary ? '141px': '166px'


export const Button = styled.button`
  background: ${backgroundColor};
  border-radius: 5px;
  width: ${buttonWidth};
  height: 48px;
  padding: 16px 31px;
  border: none;
  color: ${textColor};
  display: flex;
  justify-content:center;
  align-items:center;
  &:hover {
    background: #939bf4;
  }
`;


