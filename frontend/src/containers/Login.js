import React, { useState } from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { Navigate,  Link} from "react-router-dom";
import CSRFToken from '../components/CSRFToken'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  const { username, password} = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password)
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container mt-5">
        <h1>Sign In</h1>
        <p>Sign into your Math Wizard Account</p>
        <form onSubmit={e => onSubmit(e)}>
          <CSRFToken />
            <div className="form-group">
                <label className="form-label mt-3">Username: </label>
                <input
                className="form-control"
                type="text"
                placeholder="Username*"
                name="username"
                value={username}
                onChange={e => onChange(e)}
                required
                />
            </div>
        
            <div className="form-group">
                <label className="form-label mt-3">Password: </label>
                <input
                className="form-control"
                type="password"
                placeholder="Password*"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                minLength='6'
                required
                />
            </div>
            <button className="btn btn-primary mt-4" type="submit">Sign In</button>
        </form>
        <p className="mt-3">
          Don't have an account? <Link to='/register'>Sign Up!</Link>
        </p>
    </div>
  )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
