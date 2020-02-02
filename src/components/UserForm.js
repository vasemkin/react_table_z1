import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            firstName : '',
            lastName : '',
            email : '',
            phone : '',
            streetAddress : '',
            city : '',
            district : '',
            zip: '',
            desc : ''
        }
        
        this.handleId = this.handleId.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleStreet = this.handleStreet.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleDistrict = this.handleDistrict.bind(this);
        this.handleZip = this.handleZip.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleId(event) {
        this.setState({id: event.target.value});
      }

    handleFirstName(event) {
        this.setState({firstName: event.target.value});
      }

    handleLastName(event) {
      this.setState({lastName: event.target.value});
      }    

    handleEmail(event) {
      this.setState({email: event.target.value});
      }  

    handlePhone(event) {
      this.setState({phone: event.target.value});
      } 

    handleStreet(event) {
      this.setState({streetAddress: event.target.value});
      } 
    
    handleCity(event) {
      this.setState({city: event.target.value});
      } 
    
    handleDistrict(event) {
      this.setState({district: event.target.value});
      } 

    handleZip(event) {
      this.setState({zip: event.target.value});
      } 

    handleDesc(event) {
      this.setState({desc: event.target.value});
      } 

    nullifyState() {
      this.setState(
        {
          id : '',
          firstName : '',
          lastName : '',
          email : '',
          phone : '',
          streetAddress : '',
          city : '',
          district : '',
          zip: '',
          desc : ''
      }
      )
    }

    handleSubmit(event) {
      if(
        this.state.id == '' || this.state.firstName == ''  || this.state.lastName == ''  ||
        this.state.email == ''  || this.state.phone == '' || this.state.streetAddress == ''|| 
        this.state.city == ''|| this.state.district == ''|| this.state.zip == ''|| this.state.desc == ''
      ){ alert('Please fill all fields!')}
      else{
      let formedJSON = {
        id : parseInt(this.state.id),
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        address: {
          streetAddress: this.state.streetAddress,
          city: this.state.city,
          state: this.state.district,
          zip: this.state.zip
        },
        description: this.state.desc,
      };
      this.props.onUserForm(formedJSON);  
      this.nullifyState();
    };
      event.preventDefault();
      }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className="user-form form-inline">
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> id:  </label>
                <input type="text" className="form-control form-margin" placeholder="1r" value={this.state.id} onChange={this.handleId} />  
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> First name:  </label>
                <input type="text" className="form-control form-margin" placeholder="Vladislav" value={this.state.firstName} onChange={this.handleFirstName} />
              </div>

              <div className="form-group">
                <label className="form-control-plaintext form-margin"> Last name:  </label>
                <input type="text" className="form-control form-margin" placeholder="Semkin" value={this.state.lastName} onChange={this.handleLastName} />
              </div>

              <div className="form-group">
                <label className="form-control-plaintext form-margin"> email:  </label>
                <input type="email" className="form-control form-margin" placeholder="vasemkin@ya.ru" value={this.state.email} onChange={this.handleEmail} />
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> Phone:  </label>
                <input type="text" className="form-control form-margin" placeholder="(612)211-6296" value={this.state.phone} onChange={this.handlePhone} />
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> Street address:  </label>
                <input type="text " className="form-control form-margin" placeholder="9792 Mattis Ct" value={this.state.streetAddress} onChange={this.handleStreet} />
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> City:  </label>
                <input type="text " className="form-control form-margin" placeholder="Waukesha" value={this.state.city} onChange={this.handleCity} />
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> State:  </label>
                <input type="text " className="form-control form-margin" placeholder="WI" value={this.state.district} onChange={this.handleDistrict} />
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> Postal code:  </label>
                <input type="text " className="form-control form-margin" placeholder="22178" value={this.state.zip} onChange={this.handleZip} />
              </div>
              
              <div className="form-group">
                <label className="form-control-plaintext form-margin"> Descriprion:  </label>
                <textarea type="text " className="form-control form-margin" placeholder="lorem ipsum sit dolor amet..." value={this.state.desc} onChange={this.handleDesc} />
                <input type="submit" value="Send" className="btn btn-secondary form-margin"/>
              </div>
            </form>
        )
    }

};