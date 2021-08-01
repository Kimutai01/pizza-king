// pizza type
function typeHawaian(){
   let hawaianType = document.getElementById('hawaian').value 
    document.getElementById('result').innerHTML = 'hawaian pizza'
}

function typeDeluxe(){
    let deluxeType = document.getElementById('deluxe').value 
     document.getElementById('result').innerHTML = 'Meat Deluxe pizza'
 }

 function typePepperoni(){
    let pepperoniType = document.getElementById('pepperoni').value;
     document.getElementById('result').innerHTML = 'Chicken & beef pepperoni';
 }

 function typeVeg(){
    let vegType = document.getElementById('veg').value ;
     document.getElementById('result').innerHTML = 'veg Feast';
 }

//  pizza-size

function largePizza (){
    let pizzaLarge = parseInt(document.getElementById('large').value);
    document.getElementById('size-price').innerHTML =pizzaLarge
    document.getElementById('size-result').innerHTML = 'Large'
}

function mediumPizza (){
    let pizzaMedium= parseInt(document.getElementById('medium').value);
    document.getElementById('size-price').innerHTML =pizzaMedium
    document.getElementById('size-result').innerHTML = 'medium'
}

function smallPizza (){
    let pizzaSmall = parseInt(document.getElementById('small').value);
    document.getElementById('size-price').innerHTML =pizzaSmall
    document.getElementById('size-result').innerHTML = 'small'
}



// crust

function stuffedCrust (){
    let crustPrice = document.getElementById('size-result').innerHTML
    let crustStuffed = parseInt(document.getElementById('stuffed').value);
    alert(crustStuffed)
    document.getElementById('crust-type').innerHTML = 'Stuffed Crust'

    if(crustPrice=='Large'){
        document.getElementById('crust-price').innerHTML =String(200)
    }else if (crustPrice=='medium'){
        document.getElementById('crust-price').innerHTML =String(150)
    }else if (crustPrice=='small'){
        document.getElementById('crust-price').innerHTML =String(100)
    }

}

function crispyCrust (){
    let crustPrice = document.getElementById('size-result').innerHTML
    let crustCrispy = parseInt(document.getElementById('crispy').value);
    alert(crustCrispy)
    document.getElementById('crust-type').innerHTML = 'Crispy Crust'
    if(crustPrice=='Large'){
        document.getElementById('crust-price').innerHTML =String(200)
    }else if (crustPrice=='medium'){
        document.getElementById('crust-price').innerHTML =String(150)
    }else if (crustPrice=='small'){
        document.getElementById('crust-price').innerHTML =String(100)
    }

}

function gluttenCrust (){
    let crustPrice = document.getElementById('size-result').innerHTML
    let crustGlutten = parseInt(document.getElementById('glutten').value);
    alert(crustGlutten)
    document.getElementById('crust-type').innerHTML = 'Glutten Crust'

    if(crustPrice=='Large'){
        document.getElementById('crust-price').innerHTML =String(200)
    }else if (crustPrice=='medium'){
        document.getElementById('crust-price').innerHTML =String(150)
    }else if (crustPrice=='small'){
        document.getElementById('crust-price').innerHTML =String(100)
    }

}
// topping

function sausageToping(){
    let topingPrice = document.getElementById('size-result').innerHTML
    let topingSausage = parseInt(document.getElementById('sausage').value);
    document.getElementById('toping-type').innerHTML = 'sausage toping';
    if(topingPrice=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (topingPrice=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (topingPrice=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }

    }

function meatToping (){
    let  topingPrice = document.getElementById('size-result').innerHTML
    let topingMeat = document.getElementById('meat').value;
    document.getElementById('toping-type').innerHTML = 'meat toping'
    if(topingPrice=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (topingPrice=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (topingPrice=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }
}
function onionToping (){
    let  topingPrice = document.getElementById('size-result').innerHTML
    let topingOnion = document.getElementById('onion').value;
    document.getElementById('toping-type').innerHTML = 'onion toping'
    if(topingPrice=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (topingPrice=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (topingPrice=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }
}
function cheeseToping (){
    let topingPrice = document.getElementById('size-result').innerHTML
    let topingCheese = document.getElementById('cheese').value;
    document.getElementById('toping-type').innerHTML = 'cheese toping'
    if(topingPrice=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (topingPrice=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (topingPrice=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }
}

function thePrice(){
    let numm=document.getElementById('num').value
    document.getElementById('num3').innerHTML= numm
    let sum= (parseInt(document.getElementById('size-price').innerHTML)+parseInt(document.getElementById('toping-price').innerHTML) + parseInt( document.getElementById('crust-price').innerHTML))
    let totalSum= sum * document.getElementById('num3').innerHTML
    document.getElementById('total-price').innerHTML = totalSum
    


}

function withoutDelivery(){

    swal({
        title: "order recieved",
        text: 'Your order has been recieved for ' + ' ' + document.getElementById('num3').innerHTML + ' ' +  document.getElementById('result').innerHTML+ ' ' + document.getElementById('size-result').innerHTML + ' ' + document.getElementById('crust-type').innerHTML + ' ' + ' with ' + ' ' + document.getElementById('toping-type').innerHTML + ' and the total price is ' + ' ' + document.getElementById('total-price').innerHTML + ' ' + 'you will recieve your order in 15 minutes',
        icon: "success",
      });
}

function withDelivery(){
  swal('Delivery cost is 250 shillings')
  document.getElementById('delivery-fee').innerHTML = 'The delivery price is' + 250
  let myLocation = prompt('what is your location');
  let phoneNo = prompt('Enter your phone number')
  document.getElementById('info').innerHTML= 'Your Location is' + ' ' + myLocation
  document.getElementById('phone').innerHTML=  'Your phone number is ' + ' ' + phoneNo
  swal('view your price list below');

  let grandTotal = parseInt(document.getElementById('total-price').innerHTML) + parseInt(250);

  document.getElementById('grand').innerHTML= 'your grand total is ' + ' ' + grandTotal

  document.getElementById('every').innerHTML = 'The total amount together with delivery fee is ' +' ' + grandTotal + ' ' + 'your order will be delivered to ' + ' ' +  myLocation + ' ' + 'within 30 minutes' + ' ' + 'you will be contacted through' + ' ' + phoneNo + ' ' + 'when the pizza is delivered'

if(myLocation=='' && phoneNo==''){
   swal('please enter location and pone number');
   document.getElementById('grand').innerHTML=''
   document.getElementById('every').innerHTML=''
   document.getElementById('info').innerHTML=''
   document.getElementById('phone').innerHTML=''
   document.getElementById('delivery-fee').innerHTML=''

}else if(myLocation==''){
    swal('please enter location');
    document.getElementById('grand').innerHTML=''
    document.getElementById('every').innerHTML=''
    document.getElementById('info').innerHTML=''
    document.getElementById('phone').innerHTML=''
    document.getElementById('delivery-fee').innerHTML=''
}else if(phoneNo==''){
    swal('please enter phone number')
    document.getElementById('grand').innerHTML=''
    document.getElementById('every').innerHTML=''
    document.getElementById('info').innerHTML=''
    document.getElementById('phone').innerHTML=''
    document.getElementById('delivery-fee').innerHTML=''
}else if(myLocation==null && phoneNo==null){
    swal('please enter location and pone number');
    document.getElementById('grand').innerHTML=''
    document.getElementById('every').innerHTML=''
    document.getElementById('info').innerHTML=''
    document.getElementById('phone').innerHTML=''
    document.getElementById('delivery-fee').innerHTML=''
 
}else if (myLocation==null){
    swal('please enter location');
    document.getElementById('grand').innerHTML=''
    document.getElementById('every').innerHTML=''
    document.getElementById('info').innerHTML=''
    document.getElementById('phone').innerHTML=''
    document.getElementById('delivery-fee').innerHTML=''
}else if(phoneNo==null){
    swal('please enter phone number')
    document.getElementById('grand').innerHTML=''
    document.getElementById('every').innerHTML=''
    document.getElementById('info').innerHTML=''
    document.getElementById('phone').innerHTML=''
    document.getElementById('delivery-fee').innerHTML=''
}


}






























