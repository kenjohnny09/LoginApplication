import React from 'react'
import { connect } from 'react-redux'
import * as UserActions from './../../actions/UserActions'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

class UserContainer extends React.Component{
    componentDidMount(){
        this.props.retrieveUsers();
    }
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/users/create" className="btn btn-success">Create User</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.userList.map((o,i) =>{
                                    return (
                                        <tr key={i}>
                                            <td>{o._id}</td>
                                            <td>{o.username}</td>
                                            <td>
                                                <Link to={`/users/${o._id}`}>Edit</Link> | <a href="#">Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      userList: state.user.userList
    }
  }
  
  const mapDispatchToProps = {
    retrieveUsers: UserActions.retrieveUsers
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)