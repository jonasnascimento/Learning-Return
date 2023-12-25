// Calcula Desconto:
// Todos os Produtos acima de R$ 30,00 tem desconto de 10%.


const cart = [10, 244, 99, 2, 20, 33, 250]
let finalvalue = 0

cart.forEach(value => {
    finalvalue = finalvalue + value
});







const cartwithdiscount = [10, 244, 99, 2, 20, 33, 250]
let finalvaluewithdiscount = 0


function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

 cartwithdiscount.forEach(value => {
    

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalvaluewithdiscount = finalvaluewithdiscount + (value - discount)
    }
    else{
        finalvaluewithdiscount = finalvaluewithdiscount + value 
    }
});


const discountvalue = finalvalue - finalvaluewithdiscount
























console.log(`O valor total da compra foi de R$ ${finalvalue.toFixed(2)}, 
Com desconto estará saindo por R$ ${finalvaluewithdiscount.toFixed(2)},
Você economizou R$ ${discountvalue.toFixed(2)} `)