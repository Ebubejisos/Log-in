import _ from 'lodash';
import './styles/main.scss';
import overlay from './form';
import login from './login';

const container = document.getElementById('container');
function component() {
  const element = document.createElement('div');
  element.className = 'main';
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello Programmer';
  const h3 = document.createElement('h3');
  h3.innerText = 'Welcome to Duratech, the place for bright minds';
  const p = document.createElement('p');
  p.innerText = 'Please sign up here'
  const btn = document.createElement('button');
  btn.innerText = 'Sign up';
  btn.id = 'openForm';
  btn.onclick = ()=>{
    overlay.style.display = 'block';
  }
  
  p.appendChild(btn);
  element.append(h1,h3,p);

  return element;
}


let element = component(); // Store the element to re-render on print.js changes

document.body.append(overlay,login());
container.appendChild(element);

/*if (module.hot) {
  module.hot.accept('./form.js', () => {
    console.log('Accepting the updated printMe module!');
    container.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    container.appendChild(element);
  });
}
*/