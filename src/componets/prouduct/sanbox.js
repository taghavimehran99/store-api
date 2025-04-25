let inputJson=[
    {
        "id":"1",
        "imag1":"/public/imags/1/322.jpg" ,
        "imag2":"/public/imags/1/444.jpg" ,
        "titel":"Floral Kirby",
        "priceLin":"",
        "price":"$329.10",
        "deteltitel":"SALE",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "id":"2",
        "imag1":"/public/imags/2/111.jpg" ,
        "imag2":"/public/imags/2/444.jpg" ,
        "titel":"Open knit switer",
        "priceLin":"",
        "price":"$29.10",
        "deteltitel":"",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "id":"3",
        "imag1":"/public/imags/3/222.jpg" ,
        "imag2":"/public/imags/3/322.jpg" ,
        "titel":"Official trendy",
        "priceLin":"",
        "price":"$350.00-355.00",
        "deteltitel":"SALE",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    
    },
    {
        "id":"4",
        "imag1":"/public/imags/4/111.jpg" ,
        "imag2":"/public/imags/4/322.jpg" ,
        "titel":"Frock short",
        "priceLin":"",
        "price":"$249",
        "deteltitel":"",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "id":"5",
        "imag2":"/public/imags/5/322.jpg" ,
        "imag1":"/public/imags/5/222.jpg" ,
        "titel":"Sleeve dress",
        "priceLin":"",
        "price":"$59.10",
        "deteltitel":"",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "id":"6",
        "imag1":"/public/imags/6/222.jpg" ,
        "imag2":"/public/imags/6/322.jpg" ,
        "titel":"Stylish dress",
        "priceLin":"",
        "price":"$99.00",
        "deteltitel":"",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "id":"7",
        "imag1":"/public/imags/7/111.jpg" ,
        "imag2":"/public/imags/7/444.jpg" ,
        "titel":"Body suite",
        "priceLin":"",
        "price":"$329.10",
        "deteltitel":"",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "id":"8",
        "imag1":"/public/imags/8/222.jpg" ,
        "imag2":"/public/imags/8/322.jpg" ,
        "titel":"Body suite",
        "priceLin":"$60 ",
        "price":" $50.10",
        "deteltitel":"",
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


    

   

    
    parentDiv.appendChild(divCard)


 divCard.innerHTML=`
     <div class="cardImag">
     <a href=""><img src="${vv.imag2}" alt=""></a>
      <button class="parent-icon-part-product"><i class="biii bi-cart-fill icon-part-product"></i></button>
      <button class="parent-icon-part-product1"><i class="biii bi-heart-fill icon-part-product"></i></button>
    </div>
  

   
    <div class="cardImag1">
     <a href=""><img src="${vv.imag1}" alt="Default Image"></a>
    </div>
  
    <div class="cardBady">
      <p class="p-titel-product">${vv.titel}</p>
      <p class="p-price-product"><s>${vv.priceLin}</s> ${vv.price}</p>
    </div>
    <p class="${vv.deteltitel ? 'text-off' : "" }">${vv.deteltitel}</p>

    `;


// if (vv.deteltitel==='sale') {
//     .text-off
// }


    cardBady.innerHTML=`
     
  
    // <div>
    //   <pt>${vv.titel}</p>
    //   <p>${vv.price}</p>
    // </div>
    

    `;
}




