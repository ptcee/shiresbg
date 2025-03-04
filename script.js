$(document).ready(function () {
    const cssVars = [
        { varName: "--mike", label: "Brotherhood" },
        { varName: "--pat", label: "Spideys" },
        { varName: "--chris", label: "Apocalypse" },
        { varName: "--chadd", label: "Black Order" },
        { varName: "--josh", label: "Asgavengers" },
        { varName: "--bren", label: "Sinister 6" },
        { varName: "--mark", label: "MODOK & Pals" },
        { varName: "--gini", label: "x" },
        { varName: "--none", label: "Uncontrolled" }
    ];

    const rootStyles = getComputedStyle(document.documentElement);

    // Get the available colors and store them in the array
    const availableColors = cssVars.map(({ varName, label }) => {
        const color = rootStyles.getPropertyValue(varName).trim();
        return { color, label };
    });

    // Function to show the color dropdown and handle color change
    function showColorDropdown(event) {
        const target = $(event.target);

        if (target.hasClass('zone')) {
            $('.color-dropdown').remove();

            const dropdown = $('<div class="color-dropdown"></div>');

            availableColors.forEach(option => {
                const optionDiv = $('<div class="color-option"></div>')
                    .css('background-color', option.color)
                    .attr('data-color', option.color)
                    .append(`<span class="color-label">${option.label}</span>`);

                dropdown.append(optionDiv);
            });

            target.append(dropdown);

            dropdown.on('click', '.color-option', function () {
                const selectedColor = $(this).attr('data-color');
                target.css('background-color', selectedColor);

                // Get the zone ID and store the color in localStorage
                const zoneId = target.attr('id');
                localStorage.setItem(zoneId, selectedColor);

                dropdown.remove();
            });

            $(document).on('click', function (e) {
                if (!$(e.target).closest('.color-dropdown').length && !$(e.target).closest('.zone').length) {
                    $('.color-dropdown').remove();
                }
            });
        }
    }

    // Apply saved colors when the page loads
    function applySavedColors() {
        $('.zone').each(function () {
            const zoneId = $(this).attr('id');
            const savedColor = localStorage.getItem(zoneId);
            if (savedColor) {
                $(this).css('background-color', savedColor);
            }
        });
    }

    $('.map-container').on('click', '.zone', showColorDropdown);

    // Apply saved colors on page load
    applySavedColors();


    // Clear local storage and reset color counts
    document.getElementById('clearButton').addEventListener('click', function () {
        localStorage.clear();
        alert('Local storage cleared!');
    });

    // Smooth scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
