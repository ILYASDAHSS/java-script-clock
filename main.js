let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sc = document.getElementById("sc")
setInterval(()=> {
    let current = new Date();
    hr.innerHTML = (current.getHours()<10?"0":"") +current.getHours();
    min.innerHTML = (current.getMinutes()<10?"0":"") +current.getMinutes();
    sc.innerHTML = (current.getSeconds()<10?"0":"") +current.getSeconds();
},1000)
