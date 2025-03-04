$(document).ready(function () {
    const cssVars = [
        { varName: "--mike", label: "Brotherhood" },
        { varName: "--pat", label: "Spideys" },
        { varName: "--chris", label: "Apocalypse" },
        { varName: "--chadd", label: "Black Order" },
        { varName: "--josh", label: "Asgavengers" },
        { varName: "--bren", label: "Sinister Six+" },
        { varName: "--mark", label: "MODOK & Pals" },
        { varName: "--gini", label: "x" },
        { varName: "--none", label: "Uncontrolled" }
    ];

    const rootStyles = getComputedStyle(document.documentElement);

    // Object to store the count of each color
    const colorCounts = {
        "--mike": 0,
        "--pat": 0,
        "--chris": 0,
        "--chadd": 0,
        "--josh": 0,
        "--bren": 0,
        "--mark": 0,
        "--gini": 0,
        "--none": 0
    };

    console.log(colorCounts);

    // Get the available colors and store them in the array
    const availableColors = cssVars.map(({ varName, label }) => {
        const color = rootStyles.getPropertyValue(varName).trim();
        return { color, label };
    });

    // Function to update the legend with color counts
    function updateLegend() {
        cssVars.forEach(({ varName, label }) => {
            const colorCount = colorCounts[varName];
            $(`.legend-box .${varName}`).find('.count').text(colorCount);
        });
    }

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

                // Update the color count
                const colorVar = availableColors.find(option => option.color === selectedColor).varName;
                colorCounts[colorVar] += 1;

                // Update the legend display
                updateLegend();

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

                // Update the color count for the saved color
                const colorVar = availableColors.find(option => option.color === savedColor).varName;
                colorCounts[colorVar] += 1;
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
    
    // smooth scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log();
});
