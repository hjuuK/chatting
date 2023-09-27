import styled from './common.module.scss';

const App = () => {
  

  return (
    <div className={styled.container}>
      <button className={styled.red}>클릭</button>
      <button className='orange'>클릭</button>
      <button className='green'>클릭</button>
      <button className={styled.blue}>클릭</button>
    </div>
  );
};

export default App;