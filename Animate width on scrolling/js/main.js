let progressBars = document.querySelectorAll('.progress span'),
    target = document.querySelector('#skills');

function AnimateWidthOnScrolling(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach((progress) => {
                progress.style.width = progress.dataset.width;
            })
        } else {
            progressBars.forEach((progress) => {
                progress.style.width = 0;
            })
        }
    });
}

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
};

let observer = new IntersectionObserver(AnimateWidthOnScrolling, options);
observer.observe(target);