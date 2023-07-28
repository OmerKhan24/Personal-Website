var tablinks=document.getElementsByClassName("tab-link");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

var menu=document.getElementById("menu");

function openmenu(){
    menu.style.right="0";
}

function closemenu(){
    menu.style.right="-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJGR1gVn3nhszlTm2KtDdR7DQt9HfqjEz2UcuD4ek5s0N0zqOMyhM6HvnUsn2ONA0/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Submitted Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
