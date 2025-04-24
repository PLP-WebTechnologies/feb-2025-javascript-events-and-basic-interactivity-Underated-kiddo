document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        document.getElementById("messageBox").classList.remove("hidden");
    }
});
document.getElementById("toggleBox").addEventListener("click", function() {
    const box = document.getElementById("messageBox");
    box.classList.toggle("hidden");
});
