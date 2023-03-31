// hàm error
function ErrorMessage(options) {

    //hàm thực hiện validation
    function handleValidate(inputElement, rule) {

        var parentErrorElement = inputElement.parentElement.querySelector(options.errorNotify);


        var errorMessageNotify = rule.test(inputElement.value);
                    
                    if (errorMessageNotify) {
                        parentErrorElement.innerText = errorMessageNotify;
                        inputElement.parentElement.classList.add('invalid-error');
                    }
                    else {
                    parentErrorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid-error');
                    }
    }

    //lấy element form cần thực hiện validation
    var formElement = document.querySelector(options.form);


    if(formElement) {
        options.rules.forEach(function (rule) {
            
            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement) {
                inputElement.onblur = function() {
                    handleValidate(inputElement,rule);
            }

            // xử lí khi người dùng đang nhập 
            inputElement.oninput = function() {
            var parentErrorElement = inputElement.parentElement.querySelector(options.errorNotify);

                parentErrorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid-error');
            }
         }
        });
    }
}
 

//rules

ErrorMessage.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var checkRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return checkRegex.test(value) ? undefined : 'Vui lòng nhập đúng email';
        }
    }
}

ErrorMessage.isPassword = function(selector,lenght) {
    return {
        selector: selector,
        lenght: lenght,
        test: function(value) {
            return value.trim() && value.lenght >= lenght ? undefined : 'Mật khẩu tối thiểu 6 kí tự'
        }
    }
}

ErrorMessage.isFirstName = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

ErrorMessage.isLastName = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}