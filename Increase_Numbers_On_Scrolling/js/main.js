let nums = document.querySelectorAll('.num'),
    statistics = document.querySelector('#statistics'),
    started = false;

window.onscroll=function() {
    if (window.scrollY >= statistics.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count);
        }
    }, 2000/goal)
}