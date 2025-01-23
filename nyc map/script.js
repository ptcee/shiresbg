$(document).ready(function () {
    // Array of colors and their corresponding borough names
    const availableColors = [
        { color: "#FF5733", label: "Brotherhood" },
        { color: "#66cfff", label: "Spideys" },
        { color: "#F033FF", label: "Apocalypse" },
        { color: "#FFFC33", label: "Black Order" },
        { color: "#FF9B33", label: "Thors" },
        { color: "#F0F0F0", label: "Uncontrolled" }

    ];

    // Function to handle borough color change via custom dropdown
    function showColorDropdown(event) {
        const target = $(event.target);

        if (target.hasClass('borough')) {
            // Remove any existing dropdown if there's one already open
            $('.color-dropdown').remove();

            // Create a custom dropdown for color selection
            const dropdown = $('<div class="color-dropdown"></div>');

            // Add color options to the dropdown with text
            availableColors.forEach(option => {
                const optionDiv = $('<div class="color-option"></div>')
                    .css('background-color', option.color)
                    .attr('data-color', option.color)
                    .append(`<span class="color-label">${option.label}</span>`);  // Add text label

                dropdown.append(optionDiv);
            });

            // Position the dropdown near the clicked borough
            target.append(dropdown);

            // When a color is selected, change the background and save it to localStorage
            dropdown.on('click', '.color-option', function () {
                const selectedColor = $(this).attr('data-color');

                // Change the background color of the borough
                target.css('background-color', selectedColor);

                // Save the color in localStorage
                const boroughId = target.attr('id');
                localStorage.setItem(boroughId, selectedColor);

                // Remove the dropdown after color selection
                dropdown.remove();
            });

            // If clicked outside the dropdown, remove it
            $(document).on('click', function (e) {
                if (!$(e.target).closest('.color-dropdown').length && !$(e.target).closest('.borough').length) {
                    $('.color-dropdown').remove();
                }
            });
        }
    }

    // Attach the click event to boroughs (div elements inside the .map-container)
    $('.map-container').on('click', '.borough', showColorDropdown);

    // Function to apply saved colors from localStorage
    function applySavedColors() {
        $('.borough').each(function () {
            const boroughId = $(this).attr('id');
            const savedColor = localStorage.getItem(boroughId);
            if (savedColor) {
                $(this).css('background-color', savedColor);
            }
        });
    }

    // Apply saved colors when the page loads
    applySavedColors();
});
