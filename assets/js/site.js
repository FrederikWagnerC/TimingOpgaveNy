// write cool JS hwere!!


// TILE SWAPPER TIL GALLERY 
const bigImg = document.getElementById('bigImg')

const smallImgs = document.getElementsByClassName('smallImg')
const smallImgsArray = Object.keys(smallImgs)

function tileSwapper() {
    let bigImgSrc = bigImg.src
    let smallImgSrc = event.target.src

    bigImg.src = smallImgSrc
    event.target.src = bigImgSrc
}

for (let i = 0; i < smallImgs.length; i++) {
    let smallImg = smallImgs[i]
    smallImgs[i].addEventListener('click', tileSwapper)
}


// FORM VALIDERING 
const formName = document.getElementById('name')
const formAddress = document.getElementById('address')
const formTlf = document.getElementById('tlf')
const formZipcode = document.getElementById('zipcode')
const formEmail = document.getElementById('email')
const formGender = document.getElementById('gender')
const formSubmit = document.getElementById('submit')





formName.addEventListener('keyup', (event) => {
    if (formName.value.length >= 2) {
        formName.classList.add('formValid')
        formName.classList.remove('formInvalid')
        formNameBoo = true
    } else {
        formName.classList.add('formInvalid')
        formName.classList.remove('formValid')
        formNameBoo = false
    }
})
const addressRegex = /\d{1}$/
formAddress.addEventListener('keyup', (event) => {
    if (formAddress.value.length >= 2 && addressRegex.test(formAddress.value)) {
        formAddress.classList.add('formValid')
        formAddress.classList.remove('formInvalid')
        formLastnameBoo = true
    } else {
        formAddress.classList.add('formInvalid')
        formAddress.classList.remove('formValid')
        formLastnameBoo = false
    }
})
const tlfRegex = /\d{8}$/g
formTlf.addEventListener('keyup', (event) => {
    console.log(formTlf.value.length);
    if (tlfRegex.test(formTlf.value) && formTlf.value.length === 8) {
        formTlf.classList.add('formValid')
        formTlf.classList.remove('formInvalid')
        formLastnameBoo = true
    } else {
        formTlf.classList.add('formInvalid')
        formTlf.classList.remove('formValid')
        formLastnameBoo = false
    }
})
const zipRegex = /\d{4}$/g
formZipcode.addEventListener('keyup', (event) => {
    if (formZipcode.value.length === 4 && zipRegex.test(formZipcode.value)) {
        formZipcode.classList.add('formValid')
        formZipcode.classList.remove('formInvalid')
        formLastnameBoo = true
    } else {
        formZipcode.classList.add('formInvalid')
        formZipcode.classList.remove('formValid')
        formLastnameBoo = false
    }
})

const mailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
formEmail.addEventListener('keyup', (event) => {
    let formEmailValue = formEmail.value.toLowerCase()+event.key;
    const emailRegex = 
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(formEmailValue.toLowerCase().match(mailRegex)) {
        formEmail.classList.add('formValid')
        formEmail.classList.remove('formInvalid')
        formMailBoo = true
    } else {
        formEmail.classList.add('formInvalid')
        formEmail.classList.remove('formValid')
        formMailBoo = false
    }
})




formSubmit.addEventListener('click', (event) => {
    event.preventDefault()
})



const cookiesSubmit = document.getElementById('cookiesSubmit')
const cookieDiv = document.getElementById('cookie-policy')

cookiesSubmit.addEventListener('click', (event) =>{
    event.preventDefault()
    cookieDiv.classList.add('hidden')

})
