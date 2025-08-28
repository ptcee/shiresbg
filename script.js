$(document).ready(function () {
    const cssVars = [
        { label: "Ricky", className: "ricky" },
        { label: "Patty", className: "pat" },
        { label: "Chris", className: "chris" },
        { label: "Chadd", className: "chadd" },
        { label: "Josh", className: "josh" },
        { label: "Brendan", className: "bren" },
        { label: "Mark", className: "mark" },
        // { label: "Eric", className: "eric" },
        // { label: "Gini", className: "gini" },
        { label: "Worb", className: "worb" },
        { label: "Uncontrolled", className: "none" }
    ];    

// ########## DROPDOWN MENU ##########
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

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.color-dropdown').length && !$(e.target).closest('.zone').length) {
            $('.color-dropdown').remove();
        }
    });

    applySavedClasses();

// ########## RULES DIV REVEAL ##########
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

// ########## LOCAL STORAGE STUFF ##########
    document.getElementById('clearButton').addEventListener('click', function () {
        localStorage.clear();
        $('.zone').removeClass().addClass('zone');
        alert('Local storage cleared!');
    });

// ########## SMOOTH SCROLL ##########
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
