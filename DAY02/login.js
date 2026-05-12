const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Jai" && password === "Jai123") {
        alert("You're in");
        window.location.href = "sample.html";
    } else {
        alert("Who are you?? Try again!");
    }
}