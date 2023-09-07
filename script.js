const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});
let x= document.getElementById('product-cards');
let prod=[
    {
        id:1,
        Image:"https://img.freepik.com/premium-photo/model-wears-pink-hat-with-white-tank-top-pink-shorts_908846-3918.jpg?w=740",
        name:"Marks & Spencer",
        description:"Boys Fashion Vest",
        price: "$ 19",
        buy:"Buy Now"
    },
    {   id:2,
        Image:"https://img.freepik.com/free-photo/street-fashion-interested-woman-wearing-hat-blue-jeans-wide-hat-transperent-glasses-balcony_231208-3083.jpg?w=360&t=st=1693915530~exp=1693916130~hmac=9d53720ea5c0194d98a63c77fefca0749fed56fe6ffefad93c31b0322d9da959",
        name:"Marks & Spenc",
        description:"Peplum Tops for Women",
        price: "$19",
        buy:"Buy Now"
    },
    {   id:3,
        Image:"https://img.freepik.com/free-photo/young-pretty-brunette-woman-posing-beige-marble-background-wearing-linen-beige-shorts-caramel-leather-luxury-bag-white-shirt-gold-accessories-street-style-outfit_291049-1753.jpg?size=626&ext=jpg&uid=R80763454&ga=GA1.2.1596815926.1673784877&semt=ais",
        name:"9 Impression",
        description:"Printed Pintucks ",
        price: "$ 19",
        buy:"Buy Now"
    },
    {   
        id:4,
        Image:"https://img.freepik.com/free-photo/portrait-beautiful-smiling-brunette-model-dressed-summer-hipster-clothes-trendy-girl-posing-street-near-white-wall-funny-positive-woman-having-fun_158538-16137.jpg?size=626&ext=jpg&uid=R80763454&ga=GA1.2.1596815926.1673784877&semt=ais",
        name:"rytras",
        description:"Women's Floral Printed Cotton Top",
        price: "$ 19",
        buy:"Buy Now"
    },
    {
        id:5,
        Image:"https://img.freepik.com/free-photo/young-teenage-girl-recording-reels-herself-outdoors-social-media_23-2149749821.jpg?size=626&ext=jpg&uid=R80763454&ga=GA1.2.1596815926.1673784877&semt=ais",
        name:"Leriya Fashion",
        description:"Women's Plus Size Short Sleeve  ",
        price: "$ 9",
        buy:"Buy Now"
    },
    {
        id:6,
        Image:"https://img.freepik.com/free-photo/young-stylish-woman-model-casual-summer-green-clothes-brown-hat-with-red-lips-posing-near-white-wall_158538-7352.jpg?size=626&ext=jpg&uid=R80763454&ga=GA1.2.1596815926.1673784877&semt=ais",
        name:"Harpa",
        description:"Women's Top",
        price: "$ 19",
        buy:"Buy Now"
    },
    {
        id:7,
        Image:"https://img.freepik.com/premium-photo/model-wears-pink-hat-with-white-tank-top-pink-shorts_908846-3918.jpg?w=740",
        name:"Make it ",
        description:"Boys Fashion Vest",
        price: "$ 19",
        buy:"Buy Now"
    },
];
for(let i=0;i<=prod.length;i++)
{
   
    x.innerHTML += ` <div class="product-container">
    <div class="product-card">
    <img src= ${prod[i].Image}>
    <h2>${prod[i].name}</h2>
    <p>${prod[i].description}</p>
    <span class="price">${prod[i].price}</span><br>
    <button class="buy-button">${prod[i].buy}</button>
    </div>
    <div class="product-card">
    <img src= ${prod[i+1].Image}>
    <h2>${prod[i+1].name}</h2>
    <p>${prod[i+1].description}</p>
    <span class="price">${prod[i+1].price}</span>
    <br>
    <button class="buy-button">${prod[i+1].buy}</button>
    </div>
    <div class="product-card">
    <img src= ${prod[i+2].Image}>
    <h2>${prod[i+2].name}</h2>
    <p>${prod[i+2].description}</p>
    <span class="price">${prod[i+2].price}</span>
    <br>
    <button class="buy-button">${prod[i+2].buy}</button>
    </div>
    
    </div>`
    i+=2;
}

function filterProducts() {
    let filter=document.getElementById('search-input').value.toLowerCase(); 
    let item ="";
  

    for(var i=0;i<prod.length;i++)
    {
        if(filter=="")
        {
            location.replace("./ecom.html");
        }
        else if(prod[i].name.toLowerCase().includes(filter))
        {
            item+= `
            <div class="product-card" >
            
            <img src= ${prod[i].Image}>
            <h2>${prod[i].name}</h2>
            <p>${prod[i].description}</p>
            <span class="price">${prod[i].price}</span>
            </div>`

        }
    }
    document.getElementById('product-container').innerHTML=item;
}












