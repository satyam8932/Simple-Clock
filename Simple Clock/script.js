alert("Hello Guys , This is a Template Website and Under Development")


function follow(){
    alert("Thanks for Subscribing")
}

function follow2(){
    alert("Thanks for Following Us")
}



setInterval(function(){
    let date = new Date()
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    document.getElementById('times').innerHTML = `${time} on ${date.toLocaleDateString()}`
}, 1000);
