import React from 'react';

export default ({ term, data, update }) => {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        let filter = data.filter(user => {
          return (((user.firstName.toLowerCase() + 
          ' ' + user.lastName.toLowerCase()
          + user.email.toLowerCase()
          + user.id 
          + user.phone
          ).includes(value) == false
          ));
        });

        value == '' ? filter = data : console.log('empty search');
    
        update({
          data: filter,
          active: 0,
          term: value
        });
        
      };
    
      return (
        <div className="searchbar form-group">
          <input
            value={term}
            type="text"
            className="form-control"
            placeholder="filter users by data..."
            onChange={dataSearch}
          />
        </div>
      );
    };