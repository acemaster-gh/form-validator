
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
   successMessage:
document.querySelector('#success-message'),

};



// 2. FUNCTIONS

function validateUsername() {
    if (DOM.username.value.trim().length < 2) {
        DOM.usernameError.textContent = 'Name must be at least 2 characters';
        DOM.username.classList.add('invalid');
        DOM.username.classList.remove('valid');


        return false;
    }
    DOM.usernameError.textContent = '';
    DOM.username.classList.add('valid');
    DOM.username.classList.remove('invalid');
    return true;

}
 
function validateEmail() {
    const valid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(DOM.email.value);
    if (!valid) {
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

DOM.passwordError.textContent = '';
return true;
}


function validateConfirmPassword() {
    if (DOM.password.value !== DOM.confirmPassword.value) {
        DOM.confirmPasswordError.textContent = "Your passwords don't match." 
        return false;

    }
    DOM.confirmPasswordError.textContent = '';
    return true;
}


// 3. EVENT LISTENERS

DOM.username.addEventListener('input', validateUsername);
DOM.email.addEventListener('input', validateEmail);
DOM.password.addEventListener('input', validatePassword);
DOM.confirmPassword.addEventListener('input', validateConfirmPassword);
DOM.form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const valid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
  
  if (valid) {
   DOM.successMessage.textContent =
            '✅ Account created successfully!';
              DOM.form.reset();

      
        const inputs = [
            DOM.username,
            DOM.email,
            DOM.password,
            DOM.confirmPassword
        ];

        inputs.forEach((input) => {
            input.classList.remove('valid');
            input.classList.remove('invalid');
        });

      
        DOM.usernameError.textContent = '';
        DOM.emailError.textContent = '';
        DOM.passwordError.textContent = '';
        DOM.confirmPasswordError.textContent = '';
  }
});