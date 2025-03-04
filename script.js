$(document).ready(function () {
    const cssVars = [
        { label: "Brotherhood", className: "mike" },
        { label: "Spideys", className: "pat" },
        { label: "Apocalypse", className: "chris" },
        { label: "Black Order", className: "chadd" },
        { label: "Asgavengers", className: "josh" },
        { label: "Sinister 6", className: "bren" },
        { label: "MODOK & Pals", className: "mark" },
        { label: "Uncontrolled", className: "none" }
    ];    

    // dropdown menu
    function showColorDropdown(event) {
        const target = $(event.target);

        if (target.hasClass('zone')) {
            $('.color-dropdown').remove();

            const dropdown = $('<div class="color-dropdown"></div>');

            cssVars.forEach(option => {
                const optionDiv = $('<div class="color-option"></div>')
                    .addClass(option.className)
                    .attr('data-class', option.className)
                    .append(`<span class="color-label">${option.label}</span>`);

                dropdown.append(optionDiv);
            });

            target.append(dropdown);

            dropdown.on('click', '.color-option', function () {
                const selectedClass = $(this).attr('data-class');

                target.removeClass().addClass(`zone ${selectedClass}`);

                const zoneId = target.attr('id');
                localStorage.setItem(zoneId, selectedClass);

                dropdown.remove();
            });

            $(document).on('click', function (e) {
                if (!$(e.target).closest('.color-dropdown').length && !$(e.target).closest('.zone').length) {
                    $('.color-dropdown').remove();
                }
            });
        }
    }

    function applySavedClasses() {
        $('.zone').each(function () {
            const zoneId = $(this).attr('id');
            const savedClass = localStorage.getItem(zoneId);
            if (savedClass) {
                $(this).removeClass().addClass(`zone ${savedClass}`);
            }
        });
    }

    $('.map-container').on('click', '.zone', showColorDropdown);

    applySavedClasses();


    //rules div
    const rulesButton = document.getElementById('rules-btn');
    const rulesDiv = document.getElementById('rules');
    const closeButton = document.getElementById('close-btn');

    rulesButton.onclick = function() {
      rulesDiv.style.display = 'block'; 
      setTimeout(() => rulesDiv.style.opacity = '1', 10); 
    };

    closeButton.onclick = function() {
      rulesDiv.style.opacity = '0';  
      setTimeout(() => rulesDiv.style.display = 'none', 300); 
    };

    // clear local storage
    document.getElementById('clearButton').addEventListener('click', function () {
        localStorage.clear();
        $('.zone').removeClass().addClass('zone');
        alert('Local storage cleared!');
    });

    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
