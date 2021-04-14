// ============== Variables =============

let Items1: number = 0;
let Average1: number = 0;



let Items2: number = 0;
let Average2: number = 0;


let Items3: number = 0;
let Average3: number = 0;




let product1Item: number[] = [];
let product1Price: number[] = [];

let product2Item: number[] = [];
let product2Price: number[] = [];

let product3Item: number[] = [];
let product3Price: number[] = [];

// product 1

var noItems1 = document.querySelector("#noItems1");
var average1 = document.querySelector("#average1");


// product 2


var noItems2 = document.querySelector("#noItems2");
var average2 = document.querySelector("#average2");



// product 3



var noItems3 = document.querySelector("#noItems3");
var average3 = document.querySelector("#average3");






// ********* Add Product **********

function addItems(form) {
  
    let option: string = form.products.value;
    let number:  number = form.itemsCount.value;
    let price: number = form.itemsPrice.value;
      if (option === "1") {
        product1Item.push(number);
        product1Price.push(price);
        
    }
    else if (option === "2") {
        product2Item.push(number);
        product2Price.push(price);
        
    }
    else if (option === "3") {
        product3Item.push(number);
        product3Price.push(price);
   
    }
   
    Items1 = 0;
    for (let i = 0; i < product1Item.length; i++) {
        Items1 = Items1 + product1Item[i];
        
    }
    Items2 = 0;
    for (let i = 0; i < product2Item.length; i++) {
        Items2 = Items2 + product2Item[i];       
    }
    Items3 = 0;
    if (product3Item.length > 0) {
    for (let i = 0; i < product3Item.length; i++) {
        Items3 = Items3 + product3Item[i];
        
        }
    }

// averages 

    Average1 = 0;
    if (product1Item.length > 0) {
    for (let i = 0; i < product1Item.length; i++) {
        Average1 = Average1 + product1Price[i];       
    }
    Average1 = Average1 / product1Item.length;
    Average1 = Math.round(Average1);
}
    

    Average2 = 0;
    if (product2Item.length > 0) {
    for (let i = 0; i < product2Item.length; i++) {
        Average2 = Average2 + product2Price[i];       
    }
    Average2 = Average2 / product2Item.length;
    Average2 = Math.round(Average2);
}


    Average3 = 0;
    if (product3Item.length > 0) {
        for (let i = 0; i < product3Item.length; i++) {
        Average3 = Average3 + product3Price[i];       
    }
    Average3 = Average3 / product3Item.length;
    Average3 = Math.round(Average3);

    }
    

// Output To The DOM

noItems1.innerHTML = Items1.toString();
average1.innerHTML = Average1.toString();

noItems2.innerHTML = Items2.toString();
average2.innerHTML = Average2.toString();


noItems3.innerHTML = Items3.toString();
average3.innerHTML = Average3.toString();

    form.reset();
}




// ********* Remove Product **********

var usedEmail = [];
function removeItems(form) {
    
    let option: string = form.products.value;
    let email: string = form.email.value;
    let ItemCount: number = form.itemsCount.value;

    var pushEmail = true;
    for (let i =0; i<usedEmail.length; i++) {
        if (email === usedEmail[i]) {
            alert("Email Already Used To Remove Stock");
            pushEmail = false;
            break;
        }
    }
    if (pushEmail) {

        usedEmail.push(email);
    }

    if (option === "1") {
        Items1 = Items1 - ItemCount;
        
    }
    else if (option === "2") {
        Items2 = Items2 - ItemCount;
       
    }
    else if (option === "3") {
        Items3 = Items3 - ItemCount;
       
    }

    noItems1.innerHTML = Items1.toString();
    average1.innerHTML = Average1.toString();

    noItems2.innerHTML = Items2.toString();
    average2.innerHTML = Average2.toString();


    noItems3.innerHTML = Items3.toString();
    average3.innerHTML = Average3.toString();
   

    form.reset();

}



