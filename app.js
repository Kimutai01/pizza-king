

function number(){
    let pizza =parseInt(document.getElementById('ordered').value)

    let siz = parseInt(document.getElementById('size').value)
    alert(siz)

    let crust = parseInt(document.getElementById('crust').value)
    alert(crust)

    let topping = parseInt(document.getElementById('toping').value)
    alert(topping)


    let totalPrice =((crust + siz + topping)*pizza)
    alert(totalPrice)


    let type = document.getElementById('type').value;
    alert(type)

    


    if(siz== 1000 && crust==200) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'stuffed' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })

    }else if(siz== 1000 && crust==150) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'gluten' + ' ' +topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 1000 && crust==150) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'gluten' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 1000 && crust==150) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'gluten' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 1000 && crust==300) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'large' +' ' + 'crispy' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 800 && crust==200) { 
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'medium' +' ' + 'stuffed' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 800 && crust==150) { 
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'medium' +' ' + 'gluten' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 800 && crust==300) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'medium' +' ' + 'crispy' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 600 && crust==200) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'small' +' ' + 'stuffed' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })

    }else if(siz== 600 && crust==150) { 
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'small' +' ' + 'gluten' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }else if(siz== 600 && crust==300) {
        swal({
            title:"your order is recieved",
            text:'You have selected' +' ' + pizza +' ' + type + ' ' + 'small' +' ' + 'crispy' + ' ' + topping +' ' +'and the price is ' + ' ' +totalPrice,
            icon: "success",
        })
    }

    let delivery = prompt('do you want it to be delivered', 'yes')







    



}