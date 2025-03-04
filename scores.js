$(document).ready(function () {
    const rootStyles = getComputedStyle(document.documentElement);
    const mikeColor = rootStyles.getPropertyValue('--mike').trim();
    const chrisColor = rootStyles.getPropertyValue('--chris').trim();
    const joshColor = rootStyles.getPropertyValue('--josh').trim();
    const patColor = rootStyles.getPropertyValue('--pat').trim();
    const chaddColor = rootStyles.getPropertyValue('--chadd').trim();
    const brenColor = rootStyles.getPropertyValue('--bren').trim();
    const markColor = rootStyles.getPropertyValue('--mark').trim();
    
    let counts = [
        { name: 'Mike', color: mikeColor, class: 'pts'},
        { name: 'Patty', color: patColor, class: 'pts'},
        { name: 'Chris', color: chrisColor, class: 'pts' },
        { name: 'Chadd', color: chaddColor, class: 'pts' },
        { name: 'Josh', color: joshColor, class: 'pts' },
        { name: 'Brendan', color: brenColor, class: 'pts' },
        { name: 'Mark', color: markColor, class: 'pts' }
    ];

    counts.forEach(function(player) {
        let count = 0;
        $('.map-container div').each(function () {
            const inlineBgColor = $(this).attr('style');
            if (inlineBgColor && inlineBgColor.includes(player.color)) {
                count++;
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
