function AddToCart(name, price, country, pic){
    var productsInCart = []

    if(JSON.parse(localStorage.getItem("products"))){
        productsInCart = JSON.parse(localStorage.getItem("products"));
    }
   
    var array_of_products = {name, price, country, pic};

    if(productsInCart !== null){
        productsInCart.push(array_of_products);
       
    }
    
    localStorage.setItem("products", JSON.stringify(productsInCart));
    
    console.log(JSON.parse(localStorage.getItem("products")));
}