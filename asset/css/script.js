// const track = document.querySelector('.carousel-track');
//     let index = 0;

//     function moveCarousel() {
//         index++;
//         if (index >= track.children.length) {
//             index = 0;
//         }
//         const translateX = -index * (track.children[0].offsetWidth + 20); // 20 is the margin value
//         track.style.transform = `translateX(${translateX}px)`;
//     }

//     // setInterval(moveCarousel, 3000);

function showContent(id) {
    // Hide all content elements
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the clicked content element
    var contentToShow = document.getElementById(id);
    contentToShow.classList.add('active');
}