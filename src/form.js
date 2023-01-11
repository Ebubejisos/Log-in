import account from './images/account-circle.svg';
import eye from './images/eye-outline.svg';
import closeEye from './images/eye-off-outline.svg';
import { mapValues } from 'lodash';

function form() {
  const element = document.createElement('form');
  element.action = '#';

  const heading = ()=>{
    const div = document.createElement('div');
    div.className = 'heading';
    const h1 = document.createElement('h1');
    h1.innerText = 'Sign up';
    const img = document.createElement('img');
    img.src = account;
    
    div.append(h1,img);
    return div;
  }
  
  const input = ()=>{
    const div = document.createElement('div'); 
    div.className = 'input';

    // Username Input
    const div1 =document.createElement('div');
    div1.className = 'userInp';
    const username = document.createElement('input');
    Object.assign(username, {
    id: 'username',
    type: 'text',
    name: 'username',
    placeholder: 'Username',
    autofocus: 'true',
    pattern: '^[A-Za-z0-9_]{4,15}$',
    title: 'Enter a unique name between 4-15 characters with or without underscore'
    });
    username.minLength = '4';
    username.maxLength = '15'
    const span1 = document.createElement('span');
    span1.className = 'error';
    const label1= document.createElement('label');
    label1.setAttribute('for', 'username');
    label1.innerHTML = 'Username <br>';
    div1.append(label1,username,span1);
    username.addEventListener('change',()=>{
      username.classList.remove('redBorder');
      if(username.validity.tooShort){
        username.classList.add('redBorder');
        span1.textContent = '*Name is too short';
      }
      else if(username.validity.patternMismatch){
        span1.textContent = '*Please remove special characters and any spaces';
        username.classList.add('redBorder');
      }
      else{
        span1.textContent = ''
      }
    });
    
    
    // Email Input
    const div2 =document.createElement('div');
    div2.className = 'emailInp';
    const email = document.createElement('input');
    Object.assign(email, {
    id: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    title: 'Enter your active email'
    });
    const span2 = document.createElement('span');
    span2.className = 'error';

    const label2= document.createElement('label');
    label2.setAttribute('for', 'email');
    label2.innerHTML = 'email <br>';
    div2.append(label2,email,span2);
    
    email.addEventListener('change',()=>{
      email.classList.remove('redBorder');
      if(email.validity.typeMismatch){
        span2.textContent = '*Invalid Email';
        email.classList.add('redBorder');
      }
      else{
        span2.textContent = ''
      }
    })
    
    // Country Input
    const div3 =document.createElement('div');
    div3.className = 'countryInp';
    const country = document.createElement('input');
    Object.assign(country, {
    id: 'country',
    type: 'text',
    name: 'country',
    placeholder: 'Country',
    pattern: '[A-Za-z]{3,}',
    title: 'current country'
    });
    country.maxLength = '20';
    const label3= document.createElement('label');
    label3.setAttribute('for', 'country');
    label3.innerHTML = 'country <br>';
    const span3 = document.createElement('span');
    span3.className = 'error';
    div3.append(label3,country,span3);
    country.onchange = ()=>{
      country.classList.remove('redBorder');
      if(country.validity.patternMismatch){
        span3.textContent = '*Invalid input';
        country.classList.add('redBorder');
      }
      else{
        span3.textContent = ''
      }
    }
    //Zip-code Input  
    const div4 =document.createElement('div');
    div4.className = 'zipInp';
    const zipCode = document.createElement('input');
    Object.assign(zipCode, {
    id: 'zipCode',
    type: 'text',
    name: 'zipCode',
    placeholder: 'Zip Code',
    pattern: '[0-9]{5,6}',
    title: 'State postalcode'
    });
    zipCode.maxLength = '6';
    const label4= document.createElement('label');
    label4.setAttribute('for', 'zipCode');
    label4.innerHTML = 'zip code <br> ';
    const span4 = document.createElement('span');
    span4.className = 'error';

    zipCode.onchange = ()=>{
      zipCode.classList.remove('redBorder');
      if(zipCode.validity.patternMismatch){
        span4.textContent = '*Enter a valid zip/postal code';
        zipCode.classList.add('redBorder')
      }
      else{
        span4.textContent = ''
      }
    }
    
    div4.append(label4,zipCode,span4);

    // Password Input
    const div5 =document.createElement('div');
    div5.className = 'pswdInp';
    const password = document.createElement('input');
    Object.assign(password, {
    id: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter Password',
    pattern: '(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$',
    title: 'Not less than 8 characters with uppercase,lowercase and number/special charaters'
    });
    password.minLength = '8';
    const label5= document.createElement('label');
    label5.setAttribute('for', 'password');
    label5.innerHTML = 'password <br> ';
    const img = new Image();
    img.src = closeEye;
    img.title = 'show password';
    img.onclick = ()=>{
      if(password.getAttribute('type') === 'password'){
        password.setAttribute('type','text');
        img.src = eye;
        img.title = 'hide password';
      }
      else{
        password.setAttribute('type','password');
        img.src = closeEye;
        img.title = 'show password';
      }
    }
    const span5 = document.createElement('span');
    span5.className = 'error';
    // Password Validation  
    password.onchange = ()=>{
      password.classList.remove('redBorder');
      password.classList.remove('green');
      if(password.validity.tooShort){
        span5.textContent = '*Password is too short';
        password.classList.add('redBorder');
      }
      else if(password.validity.patternMismatch){
        span5.textContent = '*Password must contain atleast uppercase,lowercase,number/special character'
        password.classList.add('redBorder');
      }
      else{
        span5.textContent = ''
      }
    }
    
    div5.append(label5, password,img,span5);
    
    // Password Confirmation 
    const div6 =document.createElement('div');
    div6.className = 'pswdConfirm';
    const password2 = document.createElement('input');
    Object.assign(password2, {
    id: 'password2',
    type: 'password',
    name: 'password2',
    placeholder: 'Confirm Password',
    title: 'unmask passwords when necessary'
  })
    const label6= document.createElement('label');
    label6.setAttribute('for', 'password2');
    label6.innerHTML = 'confirm password <br> ';
    const mask = document.createElement('img');
    mask.src = closeEye;
    mask.title = 'show password';
    mask.onclick = ()=>{
      if(password2.getAttribute('type') === 'password'){
        password2.setAttribute('type','text');
        mask.src = eye;
        mask.title = 'hide password';
      }
      else{
        password2.setAttribute('type','password');
        mask.src = closeEye;
        mask.title = 'show password';
      }
    }
    const span6 = document.createElement('span');
    span6.className = 'error';
    
    password2.addEventListener('input',()=>{
      password2.classList.remove('redBorder','green');
      password.classList.remove('green');
      if(password.value != password2.value){
        password2.classList.add('redBorder');
        span6.textContent = '*Password does not match'
      }
      else{
        span6.textContent = '';
        password2.classList.add('green');
        password.classList.add('green')
      }
    })

    div6.append(label6,password2,mask,span6);
    
    div.append(div1,div2,div3,div4,div5,div6);
    return div
  }


  const button = document.createElement('button');
  button.innerText = 'Submit';
  button.type = 'button'
  button.onclick = ()=>{
    const inputs = Array.from(document.querySelectorAll('form input'));
    inputs.map(el=>el.setAttribute('required','true'));
    const isValid = inputs.reduce((total,input)=>{
      return total += input.checkValidity()
    },0);
    console.log(isValid);
    if(isValid < 6 ){
      window.alert('Please fill in the form correctly')
    }
    else{
      const login = document.querySelector('.login');
      const main = document.querySelector('.main');
      main.innerHTML = '';
      login.style.display = 'block';
      overlay.style.display = 'none';
      // inputs.map(el=>el.value = '');
      window.alert('Thanks for taking your time to fill in the details, this is a dummy form by Ebubejisos, proceed to login with your credentials')
    }
/* 
    for(let i =0;i<inputs.length;i++){
      if(inputs[i].value == '' || inputs.c){

      }
    }*/
  }
  element.append(heading(),input(),button);
  return element
}

const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.append(form());


export default overlay;
