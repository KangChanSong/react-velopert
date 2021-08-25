import React from 'react';
import Hello from './examples/Hello';
import Wrapper from './examples/Wrapper';

function App(){
  return (
    <Wrapper>
      <Hello />
      <Hello name = "강찬" color = "blue" />
    </Wrapper>
  )
}
export default App;
