
const cartlayout=document.querySelector(".cart-layout")
const cart=document.querySelector(".cart")
const carts=document.querySelector(".cart-btn")
const cartItam=document.querySelector(".cart-itam");
const cartItams=document.querySelector(".cart-itams")
const cartContent=document.querySelector(".cart-content")
//const cartitam=document.querySelector("#cartitam")
const productDOM=document.querySelector(".product-center")
const searched=document.querySelector("#selected")
const done=document.querySelector(".do")
const deec=document.querySelector("#input")
const sbtn=document.querySelector(".s-btn")




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
             <div class="productParent" style="padding:10px;margin:10px;" >
             <div class="img-container">
              <img src=${user.image}  height=150px width=150px class="product-img" />
               <p style="color:756d64" class="text">${user.title}</p> 
              <div style="display:inline"><strong>$</strong>
               <p style="font-size:20px;color:blue; display:inline;" class="productPrice">${user.price}</p></div>
             <button class="bag-btn"  data-id=${user.id}> packMe <i class="fas fa-shopping-cart"></i></button>
             
             </div>
             </div>
        
    
          </article>
              `;  

           
        })
         
       
        productDOM.innerHTML=result;
     
      })
      .then(()=>
         {
           //let results='';
          const btns=document.querySelectorAll(".bag-btn")
         btns.forEach( use=>
           { 
            use.addEventListener("click",(e)=>
           {
             current=e.target;
             parrent=current.parentElement;
             productPrice=parrent.getElementsByClassName("productPrice")[0].innerText;
             productimg=parrent.getElementsByClassName("product-img")[0].src;
             //productTitle=parrent.getElementsByClassName("ptitle")[0].innerText;
             console.log(productimg);
            
            div = document.createElement('div');
            div.classList.add('row');
            results = `
            <div class="cartImage"> <img src=${productimg} hight=15px width=150px></div>
       
              <div class="ScartPrice"> ${productPrice}</div>
              <button class="removeButton"> Remove</button>
              <hr>
              `;
            div.innerHTML = results
            cartItam.appendChild(div);
            prissing();
            removeButton = document.getElementsByClassName('removeButton');
            for (var i = 0; i < removeButton.length; i++) {
                
                removeButton[i].addEventListener('click', (e)=>
               {e.target.parentElement.remove()
                 })
              
              }
              
             
           })
           
           })
           
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
    
  
       function search()
       {
        let inputs=document.getElementById("searchproduct").value.toUpperCase();
        const text=document.querySelectorAll(".text");
        const productimg=document.querySelectorAll(".product-img");
        const preice=document.querySelectorAll(".productPrice");
      
         for(var i=0;i<text.length;i++)
         {if(inputs==text[i].innerText.toUpperCase())
       { console.log(productimg[i].src)
        
        resultt = `<div class="col-6"> <img src=${productimg[i].src} hight=150px width=150px /></div>
           <div> <p style="font-size:30px">${text[i].innerText}</p>
          <div style="font-size:50px; color:blue;"> ${preice[i].innerText}</div>
        `;
        done.innerHTML = resultt;
        console.log(preice[i].innerText)
        //  done.innerHTML=`
        //  <p class="totals" style="font-size:10px; color=blue;>
        //  `
         }
        }
       }

         sbtn.addEventListener("click",()=>
         {
           if(done.style.display==="none")
          {done.style.display="block";
         }
          else{
           done.style.display="none";
          }
         });

         const icon=document.querySelector(".close-icon")
         icon.addEventListener("click",()=>
         {
          cartlayout.style.display = "none";
         })
         
         
         function prissing()
         {const totalprice=document.querySelectorAll(".ScartPrice");
          const totals=document.querySelector(".totals")
           let total=0;
           //console.log(totalprice)
          for(let i=0;i<totalprice.length;i++)
          { 
             pass=totalprice[i].innerText;
             total=total+parseFloat(pass);
          } 
            totals.innerText=total;
            console.log(totals.innerText)
        }
        const disp=document.querySelector(".carousel-inner")
        disp.addEventListener("click",()=>
        {
          if(done.style.display==="block")
          {
            done.style.display="none"
          }
        })
