

function number(){
    let pizza =parseInt(document.getElementById('ordered').value)

    let siz = parseInt(document.getElementById('size').value)
    alert(siz)

    let crust = parseInt(document.getElementById('crust').value)
    alert(crust)

    let totalPrice =((crust + size)*pizza)
    alert(totalPrice)

    let topping = document.getElementById('toping').value
    alert(topping)

    let type = document.getElementById('type').value;
    alert(type)


    if(siz== 1000 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'large' +' ' + 'stuffed' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'stuffed' + ' ' + topping)
    }else if(siz== 1000 && crust==150) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'large' +' ' + 'gluten' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'gluten' + ' ' + topping)
    }else if(siz== 1000 && crust==300) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'large' +' ' + 'crispy' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'crispy' + ' ' + topping)
    }else if(siz== 800 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'medium' +' ' + '' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'medium' +' ' + 'stuffed' + ' ' + topping)
    }else if(siz== 800 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'medium' +' ' + 'gluten' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'medium' +' ' + 'gluten' + ' ' + topping)
    }else if(siz== 800 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'medium' +' ' + 'crispy' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'medium' +' ' + 'crispy' + ' ' + topping)
    }else if(siz== 600 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'small' +' ' + 'stuffed' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'small' +' ' + 'stuffed' + ' ' + topping)
    }else if(siz== 600 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'small' +' ' + 'gluten' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'small' +' ' + 'gluten' + ' ' + topping)
    }else if(siz== 600 && crust==200) {
        document.getElementById('result').innerHTML =['You have selected' +' '+ pizza + ' ' + type + ' ' + 'small' +' ' + 'crispy' + ' ' + topping ] 
        alert('You have selected' +' ' + pizza +' ' + type + ' ' + 'small' +' ' + 'crispy' + ' ' + topping)
    }







    



}