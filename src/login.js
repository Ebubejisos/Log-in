import account from './images/account-circle.svg';
import eye from './images/eye-outline.svg';
import closeEye from './images/eye-off-outline.svg';
import './styles/login.scss';

const login = ()=>{
  const div = document.createElement('div');
  div.className = 'login';

  const header = ()=>{
    const div = document.createElement('div');
    div.className = 'heading';
    const h1 = document.createElement('h1');
    h1.textContent = 'Log in';
    const img = new Image();
    img.src = account;

    div.append(h1,img);
    return div
  }

  const form = ()=>{
    const form = document.createElement('form');
    form.action = '#';
    function username(){
      const div = document.createElement('div');
      div.className = 'loginUsername';

      const username = document.createElement('input');
      const inp = document.querySelector('#username');
      Object.assign(username, {
        type: 'text',
        id: 'inpUsername',
        name: 'inpUsername',
      });
      const label = document.createElement('label');
      label.setAttribute('for','inpUsername');
      label.innerHTML = 'username <br> ';
      div.append(label,username);
      return div
    }
    
    function password(){
      const div = document.createElement('div');
      div.className = 'loginPassword';

      const password = document.createElement('input');
      Object.assign(password, {
        type: 'password',
        id: 'inpPassword'
      });
      
      const label = document.createElement('label');
      label.setAttribute('for','inpPassword');
      label.innerHTML = 'password   <br> ';
      const img = new Image();
      img.src = closeEye;
      img.title = 'unmask';
      img.onclick = ()=>{
        if(password.getAttribute('type') === 'password'){
          password.setAttribute('type','text');
          img.src = eye;
          img.title = 'mask';
        }
        else{
          password.setAttribute('type','password');
          img.src = closeEye;
          img.title = 'unmask';
        }
      }
  
      div.append(label,password,img);
      return div
    }
    const hr = document.createElement('hr');
    const button = document.createElement('button');
    button.textContent = 'Log in';
    button.setAttribute('type','button');
    button.onclick =()=>{
      const password = document.querySelector('#password');
      const inpPassword = document.querySelector('#inpPassword');
      console.log(password.value);
      if(password.value != inpPassword.value){
        window.alert('Incorrect username or password!');

      }
      else{
        window.alert('Welcome programmer! Wait while we create official site...')
      }
    }
    const p =  ()=>{
    const p = document.createElement('p');
    p.textContent = 'Don\'t have an account? '
    const span = document.createElement('span');
    span.textContent = 'sign up'

    p.appendChild(span);
    return p
    }
    form.append(username(),hr,password(),button,p());
    return form;
  }
  
  div.append(header(),form());
  
  return div
}

export default login;
