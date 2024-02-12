let item_val=document.querySelector("#items");
let items=1;
let itemSpace=0;
let minus=document.querySelector("#minus");
let plus=document.querySelector("#plus");
//bismillah page pr redirect karna
let checkout=0;


minus.addEventListener("click",()=>{
  if(items>1){
    items=items-1;
  }
item_val.innerText=items;
itemSpace=items
console.log(itemSpace)
})
plus.addEventListener("click",()=>{
items=items+1;
item_val.innerText=items;
itemSpace=items;
console.log(itemSpace)

})

let add_cart=document.querySelector("#add-cart");
add_cart.addEventListener("click",()=>{
  alert("added to cart")
})

// price valuue fix karna
let price_val=document.querySelector("#price");


let kg_box=document.querySelectorAll(".kg-box");
kg_box[0].addEventListener("click",()=>{
let price=350;
  if(price>175){
    
    price=350/2*itemSpace;
    price_val.innerText="₹ "+price;
    
  }
  
  plus.addEventListener("click",()=>{
    checkout=0;
    price=price+175;
    price_val.innerText="₹ "+price;
    checkout=price;
    console.log(checkout);

    })
  minus.addEventListener("click",()=>{
    if(price>175){
      checkout=0;
      price=price-175;
      price_val.innerText="₹ "+price;
      checkout=price;
    console.log(checkout);
    }
    })

})
kg_box[1].addEventListener("click",()=>{
   let price=350;
   price=price*itemSpace
  price_val.innerText="₹ "+price;

  plus.addEventListener("click",()=>{
    checkout=0;
    price=price+350;
    price_val.innerText="₹ "+price;
    checkout=price;
    console.log(checkout);
    })
  minus.addEventListener("click",()=>{
    checkout=0;
    if(price>350){
      price=price-350;
      price_val.innerText="₹ "+price;
      checkout=price;
    console.log(checkout);
    }
    })

})
kg_box[2].addEventListener("click",()=>{
  let price=700;
    price=price*itemSpace;
    price_val.innerText="₹ "+price;

    plus.addEventListener("click",()=>{
      checkout=0;
      price=price+700;
      price_val.innerText="₹ "+price;
      checkout=price;
    console.log(checkout);
      })
    minus.addEventListener("click",()=>{
      checkout=0;
      if(price>700){
        price=price-700;
        price_val.innerText="₹ "+price;
        checkout=price;
    console.log(checkout);
      }
      })

})
kg_box[3].addEventListener("click",()=>{
 let price=1750;
    price=price*itemSpace;
    price_val.innerText="₹ "+price;

    plus.addEventListener("click",()=>{
      checkout=0;
      price=price+1750;
      price_val.innerText="₹ "+price;
      checkout=price;
    console.log(checkout);
      })
    minus.addEventListener("click",()=>{
      checkout=0;
      if(price>1750){
        price=price-1750;
        price_val.innerText="₹ "+price;
        checkout=price;
    console.log(checkout);
      }
      })

})

