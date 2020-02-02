import React from 'react';
import Users from './GenerateUsers';

export default ({ data, update, onSort, arrowDir }) => {

    const users = data.map((user, index) => {
        return (<Users user={user} index={index} update={update} />);
      });

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={onSort.bind(null, 'id')}>{arrowDir} ID</th>
          <th onClick={onSort.bind(null, 'firstName')}>First Name</th>
          <th onClick={onSort.bind(null, 'lastName')}>Last Name</th>
          <th onClick={onSort.bind(null, 'email')}>E-mail</th>
          <th onClick={onSort.bind(null, 'phone')}>Phone</th>
        </tr>

      </thead>
      <tbody>
        {users}
      </tbody>
    </table>
  );
};