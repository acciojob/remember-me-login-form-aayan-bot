//your JS code here. If required.
let subbtn=document.getElementById("submit");
let username=document.getElementById("username")
let checkbox=document.getElementById("checkbox")
let password=document.getElementById("password")
let existing=document.getElementById("existing")

let data1= JSON.parse(localStorage.getItem("object")).username
let data2=localStorage.getItem("object")
if(data2!==null){
	existing.style.display="block";
}
subbtn.addEventListener("click",()=>{
    alert(`Logged in as ${username.value}`)
})


checkbox.addEventListener("change",(e)=>{
     if (checkbox.checked){

    let obj={"username":username.value,"password":password.value}
    localStorage.setItem("object",JSON.stringify(obj))
   let data= JSON.parse(localStorage.getItem("object"))
   console.log(data)
   existing.style.display="block";
   } 
   else{
    localStorage.clear()
   }
})

existing.addEventListener("click",()=>{
    alert(`Logged in as ${data1} `)
})
