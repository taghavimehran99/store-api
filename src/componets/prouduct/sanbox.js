let inputJson=[
    {
        "imag1":"/public/imags/1/322.jpg" ,
        "imag2":"/public/imags/1/444.jpg" ,
        "titel":"Floral Kirby",
        "price":"$329.10",
        "detel-titel":"SALE",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"/public/imags/2/111.jpg" ,
        "imag2":"/public/imags/2/444.jpg" ,
        "titel":"Open knit switer",
        "price":"$29.10",
        "detel-titel":"SALE",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"/public/imags/3/222.jpg" ,
        "imag2":"/public/imags/3/322.jpg" ,
        "titel":"Official trendy",
        "price":"$350.00-355.00",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    
    },
    {
        "imag1":"/public/imags/4/111.jpg" ,
        "imag2":"/public/imags/4/322.jpg" ,
        "titel":"Frock short",
        "price":"$249",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag2":"/public/imags/5/322.jpg" ,
        "imag1":"/public/imags/5/222.jpg" ,
        "titel":"Sleeve dress",
        "price":"$59.10",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"/public/imags/6/222.jpg" ,
        "imag2":"/public/imags/6/322.jpg" ,
        "titel":"Stylish dress",
        "price":"$99.00",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"/public/imags/7/111.jpg" ,
        "imag2":"/public/imags/7/444.jpg" ,
        "titel":"Body suite",
        "price":"$329.10",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"/public/imags/8/222.jpg" ,
        "imag2":"/public/imags/8/322.jpg" ,
        "titel":"Body suite",
        "priceLin":"$60",
        "price":"$60",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
        
    }

];

const parentDiv=document.getElementById('parentDiv')



for (let i = 0; i < inputJson.length; i++) {
    const vv = inputJson[i];
    
    const divCard=document.createElement('div');
    const cardImag=document.createElement('div');
    const cardImag1=document.createElement('div');
    const cardBady=document.createElement('div');


    divCard.className='divCard';
    cardImag.className='cardImag';
    cardImag1.className='cardImag1';
    cardBady.className='cardBady';


    

   

    
    parentDiv.appendChild(divCard,cardImag,cardImag1,cardBady)


 divCard.innerHTML=`
     <div class="cardImag">
     <a href=""><img src="${vv.imag2}" alt="Hover Image"></a>
      <button class="parent-icon-part-product"><i class="biii bi-cart-fill icon-part-product"></i></button>
      <button class="parent-icon-part-product1"><i class="biii bi-heart-fill icon-part-product"></i></button>
    </div>
  
   
    <div class="cardImag1">
     <a href=""><img src="${vv.imag1}" alt="Default Image"></a>
    </div>
  
    <div>
      <p>${vv.titel}</p>
      <p>${vv.price}</p>
    </div>
    `;





    cardBady.innerHTML=`
     
  
    // <div>
    //   <pt>${vv.titel}</p>
    //   <p>${vv.price}</p>
    // </div>
    

    `;
}




