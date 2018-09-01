import React from 'react'
import { connect } from 'react-redux'
import * as UserActions from './../../actions/UserActions'
import Header from '../Header/Header';

class UserFormContainer extends React.Component{

    componentDidMount(){
        if(this.props.match.params && this.props.match.params.id){
            this.props.getUser(this.props.match.params.id)
        }
    }
    handleOnChange = (e, propName) =>{
        this.props.updateCurrentUser({[propName]: e.target.value})
    }

    handleSubmit = () =>{
        this.props.createUser(this.props.currentUser)
    }

    handleSubmitUpdate = () => {
        this.props.updateUser(this.props.currentUser)
    }

    render(){
        const { currentUser } = this.props

        return (
            <div>
                < Header />
                <form>
                    <div className="form-group">
                        <label for="username" class="control-label">Name</label>
                        <input placeholder="Enter Username" 
                            type="text" 
                            id="username" 
                            value={currentUser.username}
                            className="form-control" 
                            onChange={(e) => this.handleOnChange(e,"username")}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password" class="control-label">Password</label>
                        <input placeholder="Enter Password" 
                            type="password" 
                            id="password"
                            value={currentUser.password}
                            className="form-control" 
                            onChange={(e) => this.handleOnChange(e,"password")}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                            value="Submit" 
                            className={!currentUser._id ? "btn" : "btn hidden"} 
                            onClick={this.handleSubmit} 
                        />
                        <input type="submit" 
                            value="Update" 
                            className={currentUser._id ? "btn" : "btn hidden"} 
                            onClick={this.handleSubmitUpdate}    
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      currentUser: state.user.currentUser
    }
  }
  
  const mapDispatchToProps = {
    getUser: UserActions.getUser,
    createUser: UserActions.createUser,
    deleteUser: UserActions.deleteUser,
    updateCurrentUser: UserActions.updateCurrentUser,
    updateUser: UserActions.updateUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer)