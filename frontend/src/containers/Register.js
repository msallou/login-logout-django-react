import React, { useState } from "react";
import { register } from "../actions/auth";
import { connect } from "react-redux";
import { Navigate,  Link} from "react-router-dom";
import CSRFToken from '../components/CSRFToken'

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const { username, first_name, last_name, email, password, re_password } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      register(username, first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (accountCreated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
        <h1>Register</h1>
        <p>Create a Math Wizard Account</p>
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
                <label className="form-label mt-3">First Name: </label>
                <input
                className="form-control"
                type="text"
                placeholder="First Name*"
                name="first_name"
                value={first_name}
                onChange={e => onChange(e)}
                required
                />
            </div>
            <div className="form-group">
                <label className="form-label mt-3">Last Name: </label>
                <input
                className="form-control"
                type="text"
                placeholder="Last Name*"
                name="last_name"
                value={last_name}
                onChange={e => onChange(e)}
                required
                />
            </div>
            <div className="form-group">
                <label className="form-label mt-3">Email: </label>
                <input
                className="form-control"
                type="text"
                placeholder="Email*"
                name="email"
                value={email}
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
            <div className="form-group">
                <label className="form-label mt-3">Confirm Password: </label>
                <input
                className="form-control"
                type="password"
                placeholder="Confirm Password*"
                name="re_password"
                value={re_password}
                onChange={e => onChange(e)}
                minLength='6'
                required
                />
            </div>
            <button className="btn btn-primary mt-4" type="submit">Register</button>
        </form>
        <p className="mt-3">
          Already have an account? <Link to='/login'>Sign in</Link>
        </p>
    </div>
  )
};

export default connect(null, { register })(Register);
