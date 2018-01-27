var stock = ["socks", "cereal","laptop"];
var requested = [];
var amount = {socks:10,cereal:10,laptop:10};
var user = process.argv[2]; 
 
 function buy (){
     console.log(`this will all be replaced with code I create later today.`);
    if (!user){
        console.log(`enter something to buy (we only have socks cereal and laptops though)`);
    }else if(user === "socks"){
        amount.socks --;

    } else if (user === "cereal"){
        amount.cereal --;
    }else if (user === "laptop"){
        amount.laptop --;
    }
    
}

//create a database which i can then link to this piece of code and make these 
//transactions easier with an inqurirer prompt.



 