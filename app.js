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
    alert(pizzaLarge)
    document.getElementById('size-result').innerHTML = 'Large'
}

function mediumPizza (){
    let pizzaMedium= parseInt(document.getElementById('medium').value);
    alert(pizzaMedium)
    document.getElementById('size-result').innerHTML = 'medium'
}

function smallPizza (){
    let pizzaSmall = parseInt(document.getElementById('small').value);
    alert(pizzaSmall)
    document.getElementById('size-result').innerHTML = 'small'
}

// crust

function stuffedCrust (){
    let crustStuffed = parseInt(document.getElementById('stuffed').value);
    alert(crustStuffed)
    document.getElementById('crust-type').innerHTML = 'Stuffed Crust'
}

function crispyCrust (){
    let crustCrispy = parseInt(document.getElementById('crispy').value);
    alert(crustCrispy)
    document.getElementById('crust-type').innerHTML = 'Crispy Crust'
}

function gluttenCrust (){
    let crustGlutten = parseInt(document.getElementById('glutten').value);
    alert(crustGlutten)
    document.getElementById('crust-type').innerHTML = 'Glutten Crust'
}
// topping

function sausageToping(){
    let big = document.getElementById('size-result').innerHTML
    let topingSausage = parseInt(document.getElementById('sausage').value);
    document.getElementById('toping-type').innerHTML = 'sausage toping';
    if(big=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (big=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (big=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }

    }

function meatToping (){
    let big = document.getElementById('size-result').innerHTML
    let topingMeat = document.getElementById('meat').value;
    document.getElementById('toping-type').innerHTML = 'meat toping'
    if(big=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (big=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (big=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }
}
function onionToping (){
    let big = document.getElementById('size-result').innerHTML
    let topingOnion = document.getElementById('onion').value;
    document.getElementById('toping-type').innerHTML = 'onion toping'
    if(big=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (big=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (big=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }
}
function cheeseToping (){
    let big = document.getElementById('size-result').innerHTML
    let topingCheese = document.getElementById('cheese').value;
    document.getElementById('toping-type').innerHTML = 'cheese toping'
    if(big=='Large'){
        document.getElementById('toping-price').innerHTML =String(300)
    }else if (big=='medium'){
        document.getElementById('toping-price').innerHTML =String(250)
    }else if (big=='small'){
        document.getElementById('toping-price').innerHTML =String(200)
    }
}

























