
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