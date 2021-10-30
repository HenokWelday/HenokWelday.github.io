function calcTip(){
    var subTotal = parseInt(document.getElementById("subtotal").value)
    var tip = parseInt(document.getElementById("tip").value)/100
    var total = subTotal +(tip * subTotal)
    var t = document.getElementById("total")
    t.innerHTML = total
}


