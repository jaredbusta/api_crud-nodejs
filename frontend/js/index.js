( async ()=>{
    const response = await fetch("http://localhost:3000/api/v1/products");
    const data = await response.json();
    let section_prod = document.getElementById('productos');
    for(var i=0; i < data.length; i++){
        section_prod.innerHTML+=
        `<li> ${data[i].name} => $ ${data[i].price}  </li>`;
    }

})();

( async ()=>{
    const response = await fetch("http://localhost:3000/api/v1/users");
    const data = await response.json();
    console.log(data);

})();

