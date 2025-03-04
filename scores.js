$(document).ready(function () {
    let counts = [
        { name: 'Mike', class: 'pts', className: 'mike' },
        { name: 'Patty', class: 'pts', className: 'pat' },
        { name: 'Chris', class: 'pts', className: 'chris' },
        { name: 'Chadd', class: 'pts', className: 'chadd' },
        { name: 'Josh', class: 'pts', className: 'josh' },
        { name: 'Brendan', class: 'pts', className: 'bren' },
        { name: 'Mark', class: 'pts', className: 'mark' }
    ];

    counts.forEach(function(player) {
        let count = 0;

        $('.zone').each(function () {
            const hasPlayerClass = $(this).hasClass(player.className);
            const parentHasPlayerClass = $(this).closest('.area').hasClass(player.className);

            if (hasPlayerClass) {
                if (parentHasPlayerClass) {
                    count += 1; 
                } else {
                    count += 2;
                }
            }
        });

        player.count = count;
    });

    counts.sort((a, b) => b.count - a.count);

    const scoresContainer = $('.scores-container');
    scoresContainer.empty();

    counts.forEach(function(player) {
        const scoreElement = `<div class="${player.class}">${player.name}: ${player.count}</div>`;
        scoresContainer.append(scoreElement);
        console.log("Updated <div> text:", `${player.name}: ${player.count}`);
    });
});
