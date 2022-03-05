import React from 'react'
import useForm from './useForm'

const SignUpForm = () => {
    const { handleChange, handleFormSubmit, values, errors } = useForm();

    return (
        <div>
            <button className="btn info-button" type="button"><span>Try it free 7 days</span>
                then $20/mo. thereafter
            </button>
            <div className="container registration-form-container">
                <form className="form" action="/" method="POST">
                    <div className="row">
                        <input type="text" aria-describedby="firstNameHelp" className={values.stylefirstname} id="firstNameInput"
                            placeholder="First Name" name="firstname" value={values.firstname}
                            onChange={handleChange}></input>
                        {errors.firstname && <div className="error-msg">{errors.firstname}</div>}

                    </div>
                    <div className="row">
                        <input aria-describedby="lastNameHelp" className={values.stylelastname} id="lastNameInput"
                            placeholder="Last Name" type="text" name="lastname" value={values.lastname}
                            onChange={handleChange}></input>
                        {errors.lastname && <div className="error-msg">{errors.lastname}</div>}
                    </div>
                    <div className="row">
                        <input aria-describedby="emailHelp" className={values.styleemail} id="emailInput"
                            placeholder="Email Address" type="text" name="email" value={values.email}
                            onChange={handleChange}></input>
                        {errors.email && <div className="error-msg">{errors.email}</div>}
                    </div>
                    <div className="row">
                        <input aria-describedby="passwordHelp" className={values.stylepassword} id="passwordInput"
                            placeholder="Password" type="password" name="password" value={values.password}
                            onChange={handleChange}></input>
                        {errors.password && <div className="error-msg">{errors.password}</div>}
                    </div>
                    <div className="row">
                        <button className="btn btn-lg claim-button" role="claim-button" onClick={handleFormSubmit}>CLAIM YOUR FREE TRIAL</button>
                    </div>
                    <div className="claim-notification-text">By clicking the button, you are agreeing to our <a
                        className="terms-and-services" href={values.termlink} rel="noopener noreferrer" target="_blank"><span>Terms and Services</span></a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
