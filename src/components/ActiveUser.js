import React from 'react';

export default ({ data, active }) => {
  if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }

  const user = data[active];

  return (
    <div>

      <div className="user-thumbnail">
        <h5>User selected: <b>{user.firstName + ' ' + user.lastName}</b></h5>
        <p>Description: <textarea className="form-control desc-area">{user.description}</textarea></p>
        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Adreess:</td>
              <td>{user.address.streetAddress}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{user.address.city}</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>{user.address.state}</td>
            </tr>
            <tr>
              <td>Postal code:</td>
              <td>{user.address.zip}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};