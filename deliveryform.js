const FORM = document.getElementById('delivery-form');

const nameInput = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const deliveryDate = document.getElementById('delivery-date');
const address = document.getElementById('address');
const houseNumber = document.getElementById('house-number');
const flatNumber = document.getElementById('flat-number');
const result = document.getElementById('result');
const btn = document.getElementById('submitButton')
btn.setAttribute('disabled','disabled');
const emptyStr = '';


const checkParametrs = () => {
    const nameInputValue = nameInput.value;
    if (nameInputValue.length < 4) return false;

    return true;
        
}


FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = checkParametrs();

    if (!isValid) return;
     
    const survey = `<p>The order created</p>
                    <p>The delivery address is: ${document.getElementById('address').value + ' ' + document.getElementById('house-number').value+ ' ' + document.getElementById('flat-number').value}</p>
                    <p>Customer: ${document.getElementById('name-input').value}</p>
                    <p>Delivery date: ${document.getElementById('delivery-date').value}</p>`
    result.innerHTML = 'Success!' + survey;

})

nameInput.addEventListener('change', (event) => {
    const nameInputValue = nameInput.value;
    const regExp = /[0-9]/;
    const primer = regExp.test(nameInputValue);
    if (nameInputValue.length < 4 || primer) {
        event.target.classList.add('invalid');
        btn.setAttribute('disabled','disabled');
    }else {
        event.target.classList.remove('invalid'); 
    }
});

surnameInput.addEventListener('change',(event) => {
    const surnameInputValue = surnameInput.value;
    const regExp = /[0-9]/;
    const primer = regExp.test(surnameInputValue);
    if (surnameInputValue.length < 5 || primer){
        event.target.classList.add('invalid');
        btn.setAttribute('disabled','disabled');
    }else {
        event.target.classList.remove('invalid'); 
    }
})

flatNumber.addEventListener('change',(event)=>{
    const flatNumberValue = flatNumber.value;
    const numflatNumberValue = Number(flatNumberValue);
    const regExp = /[A-Za-z]/;
    const primer = regExp.test(flatNumberValue);
    if (primer || numflatNumberValue <= 0){
        event.target.classList.add('invalid');
        btn.setAttribute('disabled','disabled');
    }else {
        event.target.classList.remove('invalid'); 
    }   
})

address.addEventListener('change',(event)=>{
    const addressValue = address.value;
    if (addressValue.length < 5) {
        event.target.classList.add('invalid');
        btn.setAttribute('disabled','disabled');
        
    }else{
        event.target.classList.remove('invalid'); 
    }
})

houseNumber.addEventListener('change',(event)=>{
    const houseNumberValue = houseNumber.value;
    const numhouseNumberValue = Number(houseNumberValue);
    if(numhouseNumberValue <= 0){
        event.target.classList.add('invalid');
        btn.setAttribute('disabled','disabled');
    }else{
        event.target.classList.remove('invalid'); 
    }
})

function toggleButton() {
    if(nameInput.value && surnameInput.value && address.value && houseNumber.value && flatNumber.value){
        btn.removeAttribute('disabled');
    }else{
        btn.setAttribute('disabled','disabled');
    }
}