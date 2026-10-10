const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function(link) {
link.addEventListener("click", function(event) {
if (link.getAttribute("href") === "#") {
event.preventDefault();
alert("Project link will be added soon.");
}
});
});