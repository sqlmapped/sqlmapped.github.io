document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    const catchMe = document.querySelector('.catch-me');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    catchMe.addEventListener('mouseover', (event) => {
        const catchMeRect = catchMe.getBoundingClientRect();
        const offset = 100;
        let newTop = catchMeRect.top - containerRect.top + (Math.random() * 2 - 1) * offset;
        let newLeft = catchMeRect.left - containerRect.left + (Math.random() * 2 - 1) * offset;

        newTop = Math.max(0, Math.min(newTop, containerRect.height - catchMeRect.height));
        newLeft = Math.max(0, Math.min(newLeft, containerRect.width - catchMeRect.width));

        catchMe.style.top = `${newTop}px`;
        catchMe.style.left = `${newLeft}px`;
    });

    catchMe.addEventListener('click', () => {
        alert("You caught me! Well done!");
    });
});
