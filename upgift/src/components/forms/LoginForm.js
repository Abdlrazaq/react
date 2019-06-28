import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class LoginForm extends Component {
    validateForm() {
    return this.props.cred.email.length > 0 && this.props.cred.password.length > 0;
    }
    render() {
        return(
            <div className=" w-50">
               <form onSubmit={this.props.onSubmit}>
               <h2>LOGGA IN</h2>
                <div className="form-group">
                    <label htmlFor="email">E-Postadress</label> <br/>
                    <input type="email" className="form-control" id="email" placeholder="Ange e-postadress" value={this.props.cred.email} onChange={this.props.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Lösenord</label>
                    <input type="password" className="form-control" id="password" placeholder="Ange lösenord" value={this.props.cred.password} onChange={this.props.onChange} /> <br/>
                </div>
            
                <button type="submit" className="btn btn-primary" disabled={!this.validateForm()}>Logga in</button>
                <Link to="/Register" className="btn btn-link">Register</Link>
            </form>
        </div>
           
        )
    }
}

export default LoginForm