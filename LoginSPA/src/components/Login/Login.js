import React from 'react';
import { connect } from 'react-redux'
import * as UserActions from './../../actions/UserActions'
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnChange = (e, propName) =>{
        this.props.updateCurrentUser({[propName]: e.target.value})
    }

    handleSubmit = () => {
        this.props.loginUser(this.props.currentUser);
    }

    render() {
        const { currentUser } = this.props
        
        if (currentUser.isRedirect == true) {
            return <Redirect to='/users' />;
        }

        return(
            <div class="container row">
                <div class="jumbotron col-sm-4 pull-center">
                    <div>
                        <label>Username:</label>
                        <input type="text" 
                            value={currentUser.username}
                            onChange={(e) => this.handleOnChange(e,"username")}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password"
                            value={currentUser.password}
                            onChange={(e) => this.handleOnChange(e,"password")}
                        />
                    </div>
                   <br />
                   <div hidden={!currentUser.isRedirect}><p>Username and password does not match!</p></div>
                    <div>
                        <input class="btn btn-primary" 
                            type="submit" 
                            value="Log In"
                            onClick={this.handleSubmit}
                        />
                    </div>               
                </div>          
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
      currentUser: state.user.currentUser
    }
  }
  
  const mapDispatchToProps = {
    loginUser: UserActions.loginUser,
    updateCurrentUser: UserActions.updateCurrentUser,
    resetForm: UserActions.resetForm
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)