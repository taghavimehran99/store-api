let inputJson=[
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Floral Kirby",
        "price":"$329.10",
        "detel-titel":"SALE",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Open knit switer",
        "price":"$29.10",
        "detel-titel":"SALE",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Official trendy",
        "price":"$350.00-355.00",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Frock short",
        "price":"$249",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Sleeve dress",
        "price":"$59.10",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Stylish dress",
        "price":"$99.00",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
        "titel":"Body suite",
        "price":"$329.10",
        "btn-buy-bascket":"nnn",
        "btn-buy-faviert":"mmm",
    },
    {
        "imag1":"url()" ,
        "imag2":"url()" ,
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


    divCard.className('');
    cardImag.className('');
    cardImag1.className('');
    cardBady.className('');


    

    divCard.innerHTML=`
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    `;

    
    parentDiv.appendChild(divCard,cardImag,cardImag1,cardBady)

}




