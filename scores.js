$(document).ready(function () {
    let counts = [
        // { name: 'Mike', className: 'mike' },
        { name: 'Patty', className: 'pat' },
        { name: 'Chris', className: 'chris' },
        { name: 'Chadd', className: 'chadd' },
        { name: 'Josh', className: 'josh' },
        { name: 'Brendan', className: 'bren' },
        { name: 'Mark', className: 'mark' },
        // { name: 'Eric', className: 'eric' },
        // { name: 'Gini', className: 'gini' },
        { name: 'Worb', className: 'worb' },
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
        const scoreElement = `<div class="pts">${player.name}: ${player.count}</div>`;
        scoresContainer.append(scoreElement);
        console.log("Updated <div> text:", `${player.name}: ${player.count}`);
    });
});
