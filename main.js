let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData);

    console.log(formDataObject);
});