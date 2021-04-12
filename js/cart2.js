function chooseMethod() {
    // console.log("clicked");
    let discount = 0;
    let delivery = 0;
    
    // let chosenMethod = document.querySelector('input[name="paymentMethod"]:checked').nodeValue;
    let chosenMethod = $('input[name=paymentMethod]:checked').val();
    // console.log(chosenMethod);
    
    if (chosenMethod === "sevenEleven" || chosenMethod === "familyMart") {
        delivery = "60元";
        discount = "-60元";
        // console.log(delivery + "and" + discount);
    }
    
    document.getElementById("costDelivery").innerHTML = delivery;
    document.getElementById("costDiscount").innerHTML = discount;
}

$('input[type=radio]').bind('click', chooseMethod);