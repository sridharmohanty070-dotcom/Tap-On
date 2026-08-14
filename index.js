const contact = document.getElementById("contact");

contact.addEventListener('click', ()=>{
    alert("Please contact:   sridharmohanty070@gmail.com");
});

const div = document.querySelector('#time');
setInterval(()=>{
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
},1000);
