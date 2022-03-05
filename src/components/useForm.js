import { useState } from 'react'
import validate from './validate';

const useForm = () => {

const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    termlink: "",
    stylefirstname: "form-control",
    stylelastname: "form-control",
    styleemail: "form-control",
    stylepassword: "form-control",
})

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    })
    return values 
};

const handleFormSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values));
};

    return { handleChange, handleFormSubmit, values, errors }
}

export default useForm