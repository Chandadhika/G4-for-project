
 function showContent(id) {
    // Hide all content elements
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the clicked content element
    var contentToShow = document.getElementById(id);
    contentToShow.classList.add('active');

    // var contents = document.querySelectorAll('.content');
    // contents.forEach(function(content) {
    //     content.classList.remove('active');
}