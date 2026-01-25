function submitData(){
    let firstNameDOM = document.querySelector('input[name=firstName]');
    let lastNameDOM = document.querySelector('input[name=lastName]');
    let ageDOM = document.querySelector('input[name="age"]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestsDOM = document.querySelectorAll('input[name=interests]:checked');

    let descriptionDOM = document.querySelector('textarea[name=description]');
    let interest = ''
    for(let i=0; i<interestsDOM.length; i++){
        interest += interestsDOM[i].value
        if(i!==interestsDOM.length-1){
            interest += ', '
        }
    }

    let userData = {
        firstName:firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender:genderDOM.value,
        descriptionDOM: descriptionDOM.value,
        interests: interest
    }
    console.log('submitData', userData);
}