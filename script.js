function scrollToContact() {
    document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.innerText = "Please fill all fields!";
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

function startAssistant() {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Hello Shraddha, I am your Linux AI Voice Assistant.";
    window.speechSynthesis.speak(speech);
}
