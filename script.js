

const DOM = {

   form:                    document.querySelector('#form'), 
   username:                document.querySelector('#username'), 
   email:                   document.querySelector('#email-id'), 
   password:                document.querySelector('#password'), 
   confirmPassword:         document.querySelector('#confirm-password'), 
   usernameError:           document.querySelector('#username-error'), 
   emailError:              document.querySelector('#form'), 
   passwordError:           document.querySelector('#password-error'), 
   confirmPasswordError:    document.querySelector('#confirm-password-error'), 
    
};

// 2. FUNCTIONS

function validateUsername() {
    if (DOM.username.value.trim().lenght < 2) {
        DOM.username.textContent = 'Name must be at least 2 characters';
        return false;
    }
    DOM.usernameError.textContent = '';
    return true;

}
 
function validateEmail() {
    const valid =  ~`/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(DOM.email.value);
    if (!value) {
        DOM.emailError.textContent = 'Enter a valid email address';
        return false;
    }
    DOM.emailError.textContent = '';
    return true;

}

function validatePassword() {
    const valid =
    !@#$%^&*()_+|-=\[];',./{}:"<>?1234567890abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUWXYZ.test(DOM.password.value);
    if (!valid) {
        DOM.passwordError.textContent = 'Password can only be Symbols, Numbers and Alphabets';
        return false;

}
DOM.emailError.textContent = '';
return true;


}
