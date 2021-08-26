import React from 'react';
import Hello from './examples/Hello';
import InputSample from './examples/InputSample';
import Wrapper from './examples/Wrapper';
import UserList from './examples/UserList';

function App(){

  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  // 4 가 current 의 기본값이 됨
  const nextId = useRef(4);
  const onCreate = () => {

    nextId.current += 1;
  }

  return (
    <Wrapper>
      <UserList users = {users} />
    </Wrapper>
  )
}
export default App;
