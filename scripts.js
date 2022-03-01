let submit = document.querySelector('.submit');
submit.addEventListener('click',()=> {
    let email = document.getElementById('email').value;
    localStorage.setItem('email',email)})

