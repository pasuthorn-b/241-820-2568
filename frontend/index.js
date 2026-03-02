const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');
    let genderDOM = document.querySelector('input[name="gender"]:checked');
    let interestsDOM = document.querySelectorAll('input[name="interests"]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');
        let interest = ''
    for(let i=0; i<interestsDOM.length; i++){
        interest += interestsDOM[i].value
        if(i!==interestsDOM.length-1){
            interest += ', '
        }
    }
    let userData = {
        firstName: firstNameDOM ? firstNameDOM.value : "",
        lastName: lastNameDOM ? lastNameDOM.value : "",
        age: ageDOM ? ageDOM.value : '',
        gender: genderDOM ? genderDOM.value : "",
        description: descriptionDOM ? descriptionDOM.value : '',
        interests: interest
    }
    try{
    const response = await axios.post('http://localhost:8000/users', userData)
    console.log('response', response.data);
    messageDOM.innerText ='บันทึกข้อมูลสำเร็จ';
    messageDOM.className = 'message success';
    }catch(error){
        if (error.response) {
            console.error('Error response:', error.response.data.messageDOM);
        }
        messageDOM.innerText = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
        messageDOM.className = 'message danger';
    }
    console.log('submitData', userData);
}