import React from 'react';

const List = ({ users }) => {
  return (
    <ul>
      {
        users.map(({ login, password }, idx) => <li key={idx}>
          {login}({password})
        </li>)
      }
    </ul>
  );
};

export default List;
