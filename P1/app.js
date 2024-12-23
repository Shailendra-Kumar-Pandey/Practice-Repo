const submit = document.querySelector("#submit");
submit.addEventListener('click', function(){
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const date = document.querySelector("#date").value;
    const number = document.querySelector("#number").value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('email', email);
    localStorage.setItem('date', date);
    localStorage.setItem('number', number);

    window.location.href = 'reviwe.html';
})