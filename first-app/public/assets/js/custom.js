// Validation with Bootstrap
var forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    }, false);
});

// Local Storage 
const localVal = () => {
    let fName = document.getElementById("fName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let nationality = document.getElementById("nationality").value;
    let message = document.getElementById("messageText").value;
    const messages = [
        { fullName: fName, emails: email, phone: phoneNumber, national: nationality, pesan: message }
    ];
    localStorage.setItem("response", JSON.stringify(messages));
    return false;
};