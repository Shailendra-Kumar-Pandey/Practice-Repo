if(window.location.href.includes('reviwe.html')){
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const date = localStorage.getItem('date');
    const number = localStorage.getItem('number');

    document.querySelector('#firstName').innerText = firstName;
    document.querySelector('#lastName').innerText = lastName;
    document.querySelector('#email').innerText = email;
    document.querySelector('#date').innerText = date;
    document.querySelector('#number').innerText = number;

    document.querySelector('#submit').addEventListener('click',function(){
        alert("Details Confirmed!")
        localStorage.clear();
    })
}