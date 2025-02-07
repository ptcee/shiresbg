$(document).ready(function () {
    const availableColors = [
        { color: "#FF5733", label: "Brotherhood" },
        { color: "#a81207", label: "Spideys" },
        { color: "#F033FF", label: "Apocalypse" },
        { color: "#000", label: "Black Order" },
        { color: "#7a00c7", label: "Asgavengers" },
        { color: "#6ebd00", label: "Incels" },
        { color: "#cccccc", label: "Uncontrolled" }

    ];

    // Function to handle zone color change
    function showColorDropdown(event) {
        const target = $(event.target);

        if (target.hasClass('zone')) {
            // Remove any existing dropdown
            $('.color-dropdown').remove();

            // Create a custom dropdown
            const dropdown = $('<div class="color-dropdown"></div>');

            // Add color options to the dropdown
            availableColors.forEach(option => {
                const optionDiv = $('<div class="color-option"></div>')
                    .css('background-color', option.color)
                    .attr('data-color', option.color)
                    .append(`<span class="color-label">${option.label}</span>`);  // Add text label

                dropdown.append(optionDiv);
            });

            // Position the dropdown near the clicked zone
            target.append(dropdown);

            // When a color is selected, change the background and save it to localStorage
            dropdown.on('click', '.color-option', function () {
                const selectedColor = $(this).attr('data-color');

                // Change the background color of the zone
                target.css('background-color', selectedColor);

                // Save the color in localStorage
                const zoneId = target.attr('id');
                localStorage.setItem(zoneId, selectedColor);

                // Remove the dropdown after color selection
                dropdown.remove();
            });

            // If clicked outside the dropdown, remove it
            $(document).on('click', function (e) {
                if (!$(e.target).closest('.color-dropdown').length && !$(e.target).closest('.zone').length) {
                    $('.color-dropdown').remove();
                }
            });
        }
    }

    // Attach the click event to zones (div elements inside the .map-container)
    $('.map-container').on('click', '.zone', showColorDropdown);

    // Function to apply saved colors from localStorage
    function applySavedColors() {
        $('.zone').each(function () {
            const zoneId = $(this).attr('id');
            const savedColor = localStorage.getItem(zoneId);
            if (savedColor) {
                $(this).css('background-color', savedColor);
            }
        });
    }

    // Apply saved colors when the page loads
    applySavedColors();
});

// Clear local storage on clicky
document.getElementById('clearButton').addEventListener('click', function () {
    localStorage.clear();
    alert('Local storage cleared!');
});