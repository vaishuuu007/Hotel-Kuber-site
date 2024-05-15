
function addtocart() {
  let cartsList = document.getElementById("cart");
    cartsList = alert("Added to Cart successfully");
  }
  
  function darkmode(){
      const imgDark = document.getElementById("dark");
      imgDark.classList.add("active");
  
      const imgLight = document.getElementById("light");
      imgLight.classList.remove("active");
  
      const bodyElement = document.getElementById("body");
      bodyElement.className = "dark-theme";
  }
  function lightmode(){
      const imgDark = document.getElementById("dark");
      imgDark.classList.remove("active");
  
      const imgLight = document.getElementById("light");
      imgLight.classList.add("active");
  
      const bodyElement = document.getElementById("body");
      bodyElement.className= "light-theme";
  }
  
  function submit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    if (name && email && phone != '') {
      alert("wait for a while..")
    }
    else {
      alert("Please fill all required fields")
    }
  }


  function order(){

 let orderList = document.getElementById("order");
    orderList.src= document.URL('C:\Users\shahaji waditke\Desktop\sunshine-cafe\project 2\menu.html');
  }
  
  
  const listFromLocalStorage = localStorage.getItem("submit");
  if(listFromLocalStorage)
  {
      Feedback = JSON.parse(listFromLocalStorage);
      data();
  }
  function data(){
      const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Phone = document.getElementById("phone").value;
    console.log('Name Email Phone');
  }

  function changeImage(imageName){
    const mainImage = document.getElementById('main-img');
      mainImage.src = imageName;
}



function inc() {
    const quantityText = document.getElementById("quantity-text");
    const showQuantity = document.getElementById("show-quantity");
    const showTotal = document.getElementById("show-total");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 20) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you can't add more than 20 items ")
    }
    showQuantity.innerText = `Total Produccts: ${quantity}×349`;

    showTotal.innerText = `Total: ${quantity * 349}`;

}

function dec() {
    const quantityText = document.getElementById("quantity-text");
    const showQuantity = document.getElementById("show-quantity");
    const showTotal = document.getElementById("show-total");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you can't add less than 1 items ")
    }
    showQuantity.innerText = `Total Products: ${quantity}1499`;

    showTotal.innerText = `Total: ${quantity * 1499}`;

}

function inc1() {
    const quantityText = document.getElementById("quantity-text0");
    const showQuantity = document.getElementById("show-quantity0");
    const showTotal = document.getElementById("show-total0");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 20) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you can't add more than 20 items ")
    }
    showQuantity.innerText = `Total Produccts: ${quantity}×1999`;

    showTotal.innerText = `Total: ${quantity * 1999}`;

}
function dec1() {
    const quantityText = document.getElementById("quantity-text0");
    const showQuantity = document.getElementById("show-quantity0");
    const showTotal = document.getElementById("show-total0");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you can't add less than 1 items ")
    }
    showQuantity.innerText = `Total Products: ${quantity}×1999`;

    showTotal.innerText = `Total: ${quantity * 1999}`;

}


function inc2() {
    const quantityText = document.getElementById("quantity-text1");
    const showQuantity = document.getElementById("show-quantity1");
    const showTotal = document.getElementById("show-total1");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 20) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you can't add more than 20 items ")
    }
    showQuantity.innerText = `Total Produccts: ${quantity}×1500`;

    showTotal.innerText = `Total: ${quantity * 1500}`;

}
function dec2() {
    const quantityText = document.getElementById("quantity-text1");
    const showQuantity = document.getElementById("show-quantity1");
    const showTotal = document.getElementById("show-total1");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you can't add less than 1 items ")
    }
    showQuantity.innerText = `Total Products: ${quantity}×1500`;

    showTotal.innerText = `Total: ${quantity * 1500}`;

}

