//Object property shorthand

const name='Ranjitha'
const userAge=24

const user={
    // name:name,
    // name:name and name, both are same
    name,
    // age:userAge,
    userAge,
    location:'Karnataka'
}

console.log(user)

//Object destructuring

const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.2
}

// const label=product.label
// const stock=product.stocks

const{label:productLabel,stock,rating=5}=product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction=(type,{label,stock=0}={})=>{
    console.log(type,label,stock)
}

transaction('order',product)
// transaction('order')