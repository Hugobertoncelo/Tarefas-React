import styled from 'styled-components';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box; 
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 600px; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  ul {
    padding: 0;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  width: calc(100% - 140px); 
  padding: 0 10px; 
  box-sizing: border-box; 

  @media (max-width: 480px) {
    width: 100%; 
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background: #8052EC;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  line-height: 1;
  height: 40px;
  border: none;
  color: #FFFFFF;
  width: 130px; 
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    width: 100%; 
    margin-left: 0; 
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px; 
  padding: 10px;  
  word-break: break-word; 

  li {
    list-style: none;
    flex-grow: 1;
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    flex-direction: row; 
    align-items: flex-start; 
    padding: 8px; 
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
  font-size: 24px;
  min-width: 24px; 
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
  font-size: 24px;
  min-width: 24px; 
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch; 
  }
`;
