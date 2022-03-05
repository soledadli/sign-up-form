const emailValidate = (values) => {
    return  (/^\w+([- \.]?\w+)@([\w -]+)\.([a-z]{2,})$/.test(values.trim()))
}

export default emailValidate;