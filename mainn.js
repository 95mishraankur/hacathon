
const selected=document.querySelectorAll("#selected");
const cartlayout=document.querySelector(".cart-layout")
const cart=document.querySelector(".cart")
const carts=document.querySelector(".cart-btn")
const cartItam=document.querySelector(".cart-itam")
const cartContent=document.querySelector(".cart-content")
const cartitam=document.querySelector("#cartitam")
const productDOM=document.querySelector(".product-center")

async function fetching(url) {
    const value=await fetch(url);
    return value.json();
  }
fetching('https://fakestoreapi.com/products')
.then(data=>
    { const users=data;
    console.log(users);
    let result='';
        
            users.forEach(user => {
          
              
             result+=`<article class="product">
             <div id=${user.id} style="padding:10px;margin:10px;" >
             <div class="img-container">
              <img src=${user.image}  height=150px width=150px class="product-img" />
            
              <p style="font-size:20px;color:blue;"> <strong> $</strong>${user.price}</p>
             <button class="bag-btn" onclick="fun(user)" data-id=${user.id}> packMe <i class="fas fa-shopping-cart"></i></button>
             
             </div>
             </div>
        
    
          </article>
              `;
          
              
            
           
        })
        productDOM.innerHTML=result;
      })
   
    carts.addEventListener("click",()=>
    {
      if (cartlayout.style.display === "none") {
        cartlayout.style.display = "block";
      } else {
        cartlayout.style.display = "none";
      }
    }
    );
        
        //  userlist.addEventListener("click",(e)=>
        //  { 
        //     console.log(e.target)
        
        //   const cartli=document.createElement("li");
        //    cartli.innerHTML=`
        //    <div>
        //     <img src=${e.target.image} hight=200px width=200px/>
        //     <p style="color:blue;">${e.target.price}</p>
        //    <p> ${e.target.title}</p>
        //      <p> ${e.target.description}</p>
        //     </div>
        //      `
        //      cartitam.appendChild(cartli);
  
          
    
       // })  