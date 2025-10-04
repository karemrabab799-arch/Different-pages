let products = [
     
            { name: "Laptop", stock: 0 },
            { name: "Headphones", stock: 3 },
            { name: "Smartphone", stock: 7 },
            { name: "Iphone", stock: 0 },
        
             { name:"T-shirt",stock:3},
            {name:"SKirt",stock:7},
        
            {name:"C++ Books",stock:1},
          {name:"HTML Books ",stock:5},
            {name:"Paython Books ",stock:0},
        
        ];
        let container = document.getElementById("products");

      
        for (let i = 0; i < products.length; i++) {
             let status = "";
        


           

            if (products[i].stock === 0) {
                status = "&#10060 Out of stock";
            } else if (products[i].stock < 5) {
                status = "&#9888 Only " + products[i].stock + " left";
            } else {
                status = "&#9989 In stock";
            }
            container.innerHTML += `
        <div class="col-md-12 mb-3">
            <div class="card border-primary shadow-sm">
                <div class="card-body text-center">
                    <h5 class="card-title">${products[i].name}</h5>
                    <p class="card-text">${status}</p>
                </div>
            </div> 
        </div>`
    
      ;
    }