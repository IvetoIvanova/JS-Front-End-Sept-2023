function getOrdersPrice(order, quantity){
    const drinkPrices = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    };

    const price = drinkPrices[order];
    const totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}

getOrdersPrice("water", 5);
getOrdersPrice("coffee", 2);