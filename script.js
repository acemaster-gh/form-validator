
// 1. DOM OBJECT

const DOM = {

   form:                    document.querySelector('#form'), 
   username:                document.querySelector('#username'), 
   email:                   document.querySelector('#email-id'), 
   password:                document.querySelector('#password'), 
   confirmPassword:         document.querySelector('#confirm-password'), 
   usernameError:           document.querySelector('#username-error'), 
   emailError:              document.querySelector('#email-error'), 
   passwordError:           document.querySelector('#password-error'), 
   confirmPasswordError:    document.querySelector('#confirm-password-error'), 
   passwordCharacterMessage:document.querySelector('#password-character-message'),
};

// 2. FUNCTIONS

function validateUsername() {
    if (DOM.username.value.trim().length < 2) {
        DOM.usernameError.textContent = 'Name must be at least 2 characters';
        return false;
    }
    DOM.usernameError.textContent = '';
    return true;

}
 
function validateEmail() {
    const valid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(DOM.email.value);
    if (!value) {
        DOM.emailError.textContent = 'Enter a valid email address';
        return false;
    }
    DOM.emailError.textContent = '';
    return true;

}

function validatePassword() {
    
    if (DOM.password.value.length < 8){
        DOM.confirmError.textContent = 'Password should be at least 8 characters.';
        return false;
    }

DOM.emailError.textContent = '';
return true;
}


function validateConfirmPassword() {
    if (DOM.password.value !== DOM.confirmPassword.value) {
        DOM.confirmPasswordError.textContent = "Your passwords don't match." 
        return false;

    }
    DOM.confirmPasswordError.textContent = '';
    return false;
}

// 3. EVENT LISTENERS

DOM.username.addEventListener('input', validateUsername);
DOM.email.addEventListener('input', validateEmail);
DOM.password.addEventListener('input', validatePassword);
DOM.confirmPassword.addEventListener('input', validateConfirmPassword);

DOM.form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const valid = validateUsername() & validateEmail() & validatePassword() & validateConfirmPassword();
  
  if (valid) {
    alert('Account created!');
  }
});