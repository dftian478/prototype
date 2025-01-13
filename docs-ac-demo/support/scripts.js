document.addEventListener('DOMContentLoaded', function() {
    const breadcrumbLinks = document.querySelectorAll('.acld-breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = this.href;
        });
    });
}); 