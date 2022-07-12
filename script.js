const ratingNumbers =document.querySelectorAll('.ratingNum')
const btn = document.getElementById('btn')
const spanNumber =document.getElementById('spanelement')
const mainElement =document.querySelector('.secondmain')

ratingNumbers.forEach(number=>{
  number.addEventListener('click',()=>{
    spanNumber.innerHTML = ' '+ number.innerHTML+' '
    btn.disabled = false 
  })
})
btn.addEventListener('click',clickFunction)

function clickFunction(){
   if(spanNumber.innerHTML ==""){
   btn.disabled = true;
   }
   else{
    mainElement.classList.add('active')
   }
}
