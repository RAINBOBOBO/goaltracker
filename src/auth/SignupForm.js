import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

//TODO: pass a signup function as a prop + uncomment signup await
function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
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
      // need to await the request to the backend, if not, then React will 
      // immediately run history.push()
      // await to stop and resolve the promise and if there are any errors, 
      // then catch will catch the error   
      
      //await signup(formData);
      history.push("/goals");
    } catch (err) {
      setErrors(err)
    }
  }

  return (
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3"> Sign up!</h2>
        <div className="card">
          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="SignupForm-username">Username</label>
                <input
                  className="form-control"
                  id="SignupForm-username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="SignupForm-password">Password</label>
                <input
                  className="form-control"
                  id="SignupForm-password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="SignupForm-firstName">First Name</label>
                <input
                  className="form-control"
                  id="SignupForm-firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="SignupForm-lastName">Last Name</label>
                <input
                  className="form-control"
                  id="SignupForm-lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="SignupForm-email">Email</label>
                <input
                  className="form-control"
                  id="SignupForm-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary">Submit</button>
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

export default SignupForm;