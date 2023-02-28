window.onload = function () {

    let navToggles = document.querySelectorAll('.toggle_nav');
    let navLinks = document.querySelector('[data-navopen]')

    navToggles.forEach(toggle => {
        toggle.onclick = function () {
            if (navLinks.dataset.navopen == 'open') {
                navLinks.dataset.navopen = 'closed'
                console.log('open')
            } else {
                navLinks.dataset.navopen = 'open'
                console.log('closed')
            }

        }
    });


};