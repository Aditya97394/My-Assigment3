
    function openRegistrationForm() {
        // Create the registration form dynamically
        var form = document.createElement("form");
        form.id = "registrationForm";
        form.style.width = "300px";
        form.style.padding = "20px";
        form.style.border = "1px solid #ccc";
        form.style.borderRadius = "5px";
        form.style.position = "fixed";
        form.style.top = "50%";
        form.style.left = "50%";
        form.style.transform = "translate(-50%, -50%)";
        form.style.backgroundColor = "#fff";
        form.style.zIndex = "1000";

        // Add form elements
        var labelName = document.createElement("label");
        labelName.innerHTML = "Name:";
        form.appendChild(labelName);

        var inputName = document.createElement("input");
        inputName.type = "text";
        inputName.id = "name";
        inputName.name = "name";
        inputName.style.width = "100%";
        inputName.style.padding = "8px";
        inputName.style.marginBottom = "12px";
        form.appendChild(inputName);

        var labelEmail = document.createElement("label");
        labelEmail.innerHTML = "Email:";
        form.appendChild(labelEmail);

        var inputEmail = document.createElement("input");
        inputEmail.type = "email";
        inputEmail.id = "email";
        inputEmail.name = "email";
        inputEmail.style.width = "100%";
        inputEmail.style.padding = "8px";
        inputEmail.style.marginBottom = "12px";
        form.appendChild(inputEmail);

        var labelPassword = document.createElement("label");
        labelPassword.innerHTML = "Password:";
        form.appendChild(labelPassword);

        var inputPassword = document.createElement("input");
        inputPassword.type = "password";
        inputPassword.id = "password";
        inputPassword.name = "password";
        inputPassword.style.width = "100%";
        inputPassword.style.padding = "8px";
        inputPassword.style.marginBottom = "12px";
        form.appendChild(inputPassword);

        var closeButton = document.createElement("button");
        closeButton.innerHTML = "Close";
        closeButton.type = "button";
        closeButton.addEventListener("click", closeRegistrationForm);
        closeButton.style.backgroundColor = "#ccc";
        closeButton.style.color = "#fff";
        closeButton.style.border = "none";
        closeButton.style.padding = "8px 12px";
        form.appendChild(closeButton);

        document.body.appendChild(form);
    }

    function closeRegistrationForm() {
        // Remove the registration form
        var form = document.getElementById("registrationForm");
        if (form) {
            form.parentNode.removeChild(form);
        }
    }