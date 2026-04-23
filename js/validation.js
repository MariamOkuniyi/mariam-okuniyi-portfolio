
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("contactForm").addEventListener("submit", function(event) {

        let valid = true;

        let name = document.getElementById("name");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");

        let nameError = document.getElementById("nameError");
        let phoneError = document.getElementById("phoneError");
        let emailError = document.getElementById("emailError");

        // Hide errors
        nameError.style.display = "none";
        phoneError.style.display = "none";
        emailError.style.display = "none";

        // NAME
        if (name.value.trim() === "") {
            nameError.style.display = "block";
            name.focus();
            name.select();
            valid = false;
        }

        // PHONE
        let phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone.value)) {
            phoneError.style.display = "block";
            if (valid) {
                phone.focus();
                phone.select();
            }
            valid = false;
        }

        // EMAIL
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.style.display = "block";
            if (valid) {
                email.focus();
                email.select();
            }
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }

    });

});