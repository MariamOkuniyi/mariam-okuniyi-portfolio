/*
Name: Mariam Okuniyi
Course: WEBD-1008 Website Development
Project: Project 4 - Website Development & Deployment

Description:
This script handles form validation for the contact page.
It ensures that users enter valid data before submitting the form.

Validation Rules:
- Name field must not be empty
- Phone number must be 10 digits
- Email must follow a valid format

Features:
- Displays error messages for invalid input
- Highlights and focuses on incorrect fields
- Prevents form submission if validation fails

Technologies:
- JavaScript
- Regular Expressions

Date: 04/23/2026
*/
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