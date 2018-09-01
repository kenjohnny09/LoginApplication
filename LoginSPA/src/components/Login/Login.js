import React from 'react';
import { connect } from 'react-redux'
import * as UserActions from './../../actions/UserActions'
import { Redirect } from 'react-router-dom';
import '../../style/styles.css';

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
        
        if(currentUser.isRedirect)
        {
            if (currentUser.isRedirect == true) {
                return <Redirect to='/users' />;
            }
        }
        return(
            <div className="loginContainer">
                <div className="jumbotron col-sm-4 pull-center">
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
                    <div>
                        <input className="btn btn-primary" 
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