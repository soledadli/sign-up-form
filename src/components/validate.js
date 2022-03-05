import emailValidate from "./emailValidate";

const validate = (values) => {

    let errors = {};

    if (!values.firstname.trim()) {
        errors.firstname = "First Name cannot be empty";
        values.stylefirstname = "form-control-error";
    } else {
        values.stylefirstname = "form-control";
    }
    if (!values.lastname.trim()) {
        errors.lastname = "First Name cannot be empty";
        values.stylelastname = "form-control-error";
    } else {
        values.stylelastname = "form-control";
    }
    if (!values.email.trim()) {
        errors.email = "Email address cannot be empty";
        values.styleemail = "form-control-error";
    } else if (!emailValidate(values.email)) {
        errors.email = "Looks like this is not an email"
        values.styleemail = "form-control-error";
    } else {
        values.styleemail = "form-control";
    }
    if (!values.password.trim()) {
        errors.password = "Password cannot be empty";
        values.stylepassword = "form-control-error";
    } else {
        values.stylepassword = "form-control";
    }
    return errors;
}

export default validate