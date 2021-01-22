const CART = 'CART';
const defaultEmptyCart = [];

export function findById(id, array){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (id === item.id) {

            return item;

        }

    }
}

export function calcItemTotal(quantity, price) { 

    const total = quantity * Math.round(price * 100) / 100;


    // console.log(total);


    return total;  
}

export function calcOrderTotal(userCart, plants) {

    let total = 0; 

    for (let item of userCart) {

        const plant = findById(item.id, plants);

        const totalPrice = calcItemTotal(item.quantity, plant.price);
        
        total = total + totalPrice;
        
    }
    
    return total; 
}

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    // only grabbing the stringyCart from local Storage if there IS a cart in local Storage *** a user has been to the site before and has established a cart..even if there is nothing in there YET
    if (stringyCart) { 
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    }
    else {
    // if there is no cart, go ahead and add an stringify a default empty cart....this is the first time someone is visiting the site and does not have a cart created for them...
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);

        return defaultEmptyCart;
    }
}

export function setCart(cart) {
    // putting the whole cart in local Storage
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);

}

export function addToCart(id) {
    // if an item with existing id...increment it, if id is not found, start a new one
    const cart = getCart();

    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newCartItem = {
            id: id, 
            quantity: 1
        };

        cart.push(newCartItem);
    }
    setCart(cart);
}

export function clearCart() {
    // for when a user has bought items in a cart, and those items now have to disappear because the cart is empty
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart); 

    localStorage.setItem(CART, stringyDefaultCart);
}