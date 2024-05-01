function clearForm() {
    document.getElementById("form").reset();
    }
    window.onload = clearForm;
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const no = document.getElementById('no');
    const age = document.getElementById('age');
    const list = document.getElementById('list');
    form.addEventListener('submit', e=>
    {
    
    e.preventDefault();
    validateInputs();
    });
    const setError = (element,message) =>
    {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    }
    const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    };
    const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
    const validateInputs = () => {
    const nameValue = name1.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const ageValue = age.value.trim();
    const noValue = no.value.trim();
    const listValue = list.value.trim();
    if(nameValue === '') {
    setError(name1, 'name is required');
    } else {
    setSuccess(name1);
    }
    
    if(emailValue === '') {
    setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
    } else {
    setSuccess(email);
    }
    if(passValue === '') {
    setError(pass, 'Password is required');
    } else if (passValue.length < 8 ) {
    setError(pass, 'Password must be at least 8 character.')
    } else {
    setSuccess(pass);
    }
    if(ageValue === '')
    {
    setError(age,'Age is required');
    }else if(age.value < 18)
    {
    setError(age,'Age should be above 18.')
    }else{
    setSuccess(age);
    }
    if(noValue === '')
    {
    setError(no,'Phone no is required');
    }else{
    setSuccess(no);
    }
    if(listValue === '')
    {
    setError(list,'Choose anything');
    }else{
    setSuccess(list);}};