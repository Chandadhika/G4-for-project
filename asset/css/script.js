const track = document.querySelector('.carousel-track');
    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= track.children.length) {
            index = 0;
        }
        const translateX = -index * (track.children[0].offsetWidth + 20); // 20 is the margin value
        track.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(moveCarousel, 3000);