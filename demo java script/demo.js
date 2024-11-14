let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click', inputmsg);
function inputmsg (){
        let name = prompt('Enter Name of Contry');
        namastebtn.textContent='namaste '+ name;
}
