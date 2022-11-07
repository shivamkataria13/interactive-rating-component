const mainty = document.querySelector(".main-ty")

const btn = document.querySelector(".btn")

function submit(){
    mainty.style.visibility = "visible"
}



const rateagain = document.querySelector(".rateagain")

function rate_again(){
    mainty.style.visibility = "hidden"
}




const rates = document.querySelectorAll('.ratings')
const ratinggiven = document.querySelector('.rating-given')


rates.forEach((rate)=>{
    rate.addEventListener('click', () => {
        ratinggiven.innerHTML = rate.innerHTML
    })
})





