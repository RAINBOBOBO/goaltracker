import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

//TODO: pass a login function as a prop + uncomment login await
function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    // redirect to /goals using history
    evt.preventDefault();
    try {
      // await login(formData);
      history.push("/goals")
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="card">
          <h2 className="mb-3"> Log In</h2>
          <div className="card-body">

            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="LoginForm-username">Username</label>
                <input
                  name="username"
                  id="LoginForm-username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="username"
                  autoComplete="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="LoginForm-password">Password</label>
                <input
                  id="LoginForm-password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  autoComplete="password"
                />
              </div>

              <button className="btn btn-primary float-right" >Submit!</button>
            </form>

            <div>
              {errors.length ? <Alert messages={errors} /> : null}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;