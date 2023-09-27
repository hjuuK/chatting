import styled, {css} from 'styled-components';

const StyleButton = styled.button`
    width: 300px;
    height: 50px;
    background: ${props => props.bg || 'black'};
    border: 0;
    color: #fff;

    ${props => props.border && css`
      border: 10px solid blue;
      border-radius: 5px;
    `}

    &:hover {
      background: gray;
    }

    i {
      font-size: 2rem;
      color: orange;
    }
`;

const App = () => {
  
  return (
    <StyleButton bg="red" border={true}><i>1</i>클릭!</StyleButton>
  );
};

export default App;