
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function(link) {
    if (link.getAttribute("href") === "#") {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Project link will be added soon.");
        });
    }
});
