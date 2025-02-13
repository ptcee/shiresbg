$(document).ready(function () {
    const cssVars = [
        { varName: "--mike", label: "Brotherhood" },
        { varName: "--pat", label: "Spideys" },
        { varName: "--chris", label: "Apocalypse" },
        { varName: "--chadd", label: "Black Order" },
        { varName: "--josh", label: "Asgavengers" },
        { varName: "--bren", label: "Sinister Six+" },
        { varName: "--mark", label: "x" },
        { varName: "--gini", label: "x" },
        { varName: "--none", label: "Uncontrolled" }
    ];

    const rootStyles = getComputedStyle(document.documentElement);

    const availableColors = cssVars.map(({ varName, label }) => {
        const color = rootStyles.getPropertyValue(varName).trim();
        return { color, label };
    });

    // zone color change
    function showColorDropdown(event) {
        const target = $(event.target);

        if (target.hasClass('zone')) {
            $('.color-dropdown').remove();

            const dropdown = $('<div class="color-dropdown"></div>');

            // add color options to the dropdown
            availableColors.forEach(option => {
                const optionDiv = $('<div class="color-option"></div>')
                    .css('background-color', option.color)
                    .attr('data-color', option.color)
                    .append(`<span class="color-label">${option.label}</span>`);  // Add text label

                dropdown.append(optionDiv);
            });

            target.append(dropdown);

            dropdown.on('click', '.color-option', function () {
                const selectedColor = $(this).attr('data-color');

                target.css('background-color', selectedColor);

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

    $('.map-container').on('click', '.zone', showColorDropdown);

    function applySavedColors() {
        $('.zone').each(function () {
            const zoneId = $(this).attr('id');
            const savedColor = localStorage.getItem(zoneId);
            if (savedColor) {
                $(this).css('background-color', savedColor);
            }
        });
    }

    // apply saved colors when the page loads
    applySavedColors();
});

// clear local storage
document.getElementById('clearButton').addEventListener('click', function () {
    localStorage.clear();
    alert('Local storage cleared!');
});

// smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
