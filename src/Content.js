import React from 'react';
import load from './load';
import UserTable from './components/UserTable';
import Filter from './components/Filter';
import ActiveUser from './components/ActiveUser';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import UserForm from './components/UserForm'

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sort: 'asc',
            arrowDir: '',
            sortField : 'id',
            data : null,
            active: 0,
            currentPage : 0,
            term : '',
            passedJSON : null,
            userForm : false
        };
        this.loadData();
        this.showUserForm = this.showUserForm.bind(this);
    }

    loadData() {
        load(this.props.data).then(users => {
          this.initialData = JSON.parse(users);
          this.setState({
            data: this.initialData
          });
        });
      }

    updateData(config) {
        this.setState(config);
        this.setState({ arrowDir : '' })
    }

    pageChangeHandler = ({selected}) => (
        this.setState({currentPage: selected})
      )

    
    
    onSort = sortField => {
    
        const cloneData = this.state.data.concat();
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        sortType === 'asc' ? this.setState({ arrowDir : '🡇' }) : this.setState({ arrowDir : '🡅' });
        const orderedData = _.orderBy(cloneData, sortField, sortType);
  
        this.setState({
        data: orderedData,
        sort: sortType,
        sortField
        })
      }
      
    showUserForm(){
        this.setState({
        userForm : true
        });
    }

    addUser = (generateJSON) => {
        this.state.data.push(generateJSON);
    }


    render() {

        return(
             <div>
                <br />
                {
                    this.state.data != null ? 
                    <div className="loaded">
                        <div className="app container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                <Filter
                                    term={this.state.term}
                                    data={this.initialData}
                                    update={this.updateData.bind(this)}
                                />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="tables-flex">
                                <div className="user-selected">
                                    <ActiveUser data={this.state.data} active={this.state.active} />
                                    <button className="btn btn-primary" onClick={this.showUserForm}>add user</button>
                                    { this.state.userForm ? <UserForm onUserForm={this.addUser} /> : null }
                                </div>

                                <div className="table-return">
                                    <div className="table-users">
                                        <UserTable data={_.chunk(this.state.data, 50)[this.state.currentPage]} update={this.updateData.bind(this)} onSort={this.onSort} arrowDir={this.state.arrowDir} />
                                    </div>

                                    {
                                    this.state.data.length > 50
                                    ? <ReactPaginate
                                    previousLabel={'<'}
                                    nextLabel={'>'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={Math.ceil(this.state.data.length / 50)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.pageChangeHandler}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    nextClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextLinkClassName="page-link"
                                    forcePage={this.state.currentPage}
                                    /> : null
                                    }
                        
                                </div>
                            </div>
                        
                            
                        <p>{JSON.stringify(this.state.data)}</p>
                        </div>
                    </div>
                    : <h3 className="floating">loading...</h3>
                }
            
        </div>
        );   
    }
};