let dataSet = [
    {
        id: 'abom',
        label: 'Abomination (5)',
        hidden: true,
        data: [4, 4, 4, 2, 3, 1],
        fill: true,
        backgroundColor: 'rgba(0, 102, 24, 0.2)',
        borderColor: 'rgb(50, 226, 91)',
        pointBackgroundColor: 'rgb(50, 226, 91)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(50, 226, 91)',
        writeup: 'Abomination is gross.',
    },

    {
        id: 'av',
        label: 'Agent Venom (4)',
        hidden: true,
        data: [4, 3, 3, 4, 3, 1],
        fill: true,
        backgroundColor: 'rgba(20, 0, 133, 0.2)',
        borderColor: 'rgb(147, 128, 255)',
        pointBackgroundColor: 'rgb(147, 128, 255)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(147, 128, 255)',
        writeup: 'Agent Venom says no to rerolls.',
    },

    {
        id: 'asm',
        label: 'Amazing Spiderman (5)',
        hidden: true,
        data: [3, 5, 5, 2, 2, 4],
        fill: true,
        backgroundColor: 'rgba(158, 0, 0, 0.2)',
        borderColor: 'rgb(255, 15, 15)',
        pointBackgroundColor: 'rgb(255, 15, 15)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 15, 15)',
        writeup: 'He\'s Spider-man, except extra amazing.',

    },

    {
        label: 'Ancient One (4)',
        hidden: true,
        data: [4, 3, 3, 2, 4, 1],
        fill: true,
        backgroundColor: 'rgba(223, 201, 1, 0.2)',
        borderColor: 'rgb(223, 201, 1)',
        pointBackgroundColor: 'rgb(223, 201, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(223, 201, 1)'
    },

    {
        label: 'Angel (3)',
        hidden: true,
        data: [2, 2, 4, 3, 3, 1],
        fill: true,
        backgroundColor: 'rgba(35, 117, 123, 0.2)',
        borderColor: 'rgb(0, 228, 245)',
        pointBackgroundColor: 'rgb(0, 228, 245)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 228, 245)'
    },

    {
        label: 'Angela (5)',
        hidden: true,
        data: [4, 3, 4, 3, 1, 1],
        fill: true,
        backgroundColor: 'rgba(98, 70, 14, 0.2)',
        borderColor: 'rgb(209, 173, 102)',
        pointBackgroundColor: 'rgb(209, 173, 102)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(209, 173, 102)'
    },

    {
        label: 'Ant-Man (3)',
        hidden: true,
        data: [3, 2, 1, 1, 1, 1],
        fill: true,
        backgroundColor: 'rgba(235, 74, 0, 0.2)',
        borderColor: 'rgb(235, 74, 0)',
        pointBackgroundColor: 'rgb(235, 74, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(235, 74, 0)'
    },

    {
        label: 'Apocalypse (6)',
        hidden: true,
        data: [4, 5, 3, 3, 1, 4],
        fill: true,
        backgroundColor: 'rgba(44, 76, 144, 0.2)',
        borderColor: 'rgb(96, 131, 205)',
        pointBackgroundColor: 'rgb(96, 131, 205)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(96, 131, 205)'
    },

    {
        label: 'Archangel (4)',
        hidden: true,
        data: [4, 2, 4, 3, 1, 1],
        fill: true,
        backgroundColor: 'rgba(32, 114, 162, 0.2)',
        borderColor: 'rgb(101, 183, 230)',
        pointBackgroundColor: 'rgb(101, 183, 230)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(101, 183, 230)'
    },

    {
        label: 'Arnim Zola (3)',
        hidden: true,
        data: [3, 2, 1, 4, 3, 3],
        fill: true,
        backgroundColor: 'rgba(182, 139, 53, 0.2)',
        borderColor: 'rgb(167, 106, 1)',
        pointBackgroundColor: 'rgb(167, 106, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(167, 106, 1)'
    },

    {
        label: 'Avalanche (?)',
        hidden: true,
        data: [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(90, 16, 132, 0.2)',
        borderColor: 'rgb(172, 57, 239)',
        pointBackgroundColor: 'rgb(172, 57, 239)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(172, 57, 239)'
    },

    {
        label: 'Baron Zemo (4)',
        hidden: true,
        data: [4, 2, 3, 3, 1, 4],
        fill: true,
        backgroundColor: 'rgba(182, 53, 165, 0.2)',
        borderColor: 'rgb(135, 13, 112)',
        pointBackgroundColor: 'rgb(135, 13, 112)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(135, 13, 112)'
    },

    {
        label: 'Baron Mordo (3)',
        hidden: true,
        data: [3, 2, 4, 4, 2, 4],
        fill: true,
        backgroundColor: 'rgba(53, 64, 182, 0.2)',
        borderColor: 'rgb(12, 38, 233)',
        pointBackgroundColor: 'rgb(12, 38, 233)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(12, 38, 233)'
    },

    {
        label: 'Baron Strucker (3)',
        hidden: true,
        data: [3, 3, 2, 3, 1, 4],
        fill: true,
        backgroundColor: 'rgba(53, 182, 57, 0.2)',
        borderColor: 'rgb(39, 172, 6)',
        pointBackgroundColor: 'rgb(39, 172, 6)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(39, 172, 6)'
    },

    {
        label: 'Baron Zemo (3)',
        hidden: true,
        data: [4, 3, 5, 4, 1, 4],
        fill: true,
        backgroundColor: 'rgba(180, 53, 182, 0.2)',
        borderColor: 'rgb(159, 30, 156)',
        pointBackgroundColor: 'rgb(159, 30, 156)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(159, 30, 156)'
    },

    {
        label: 'Beast (3)',
        hidden: true,
        data: [2, 3, 4, 2, 4, 1],
        fill: true,
        backgroundColor: 'rgba(53, 119, 182, 0.2)',
        borderColor: 'rgb(11, 108, 177)',
        pointBackgroundColor: 'rgb(11, 108, 177)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(11, 108, 177)'
    },

    {
        label: 'Beta Ray Bill (4)',
        hidden: true,
        data: [2, 5, 3, 3, 4, 1],
        fill: true,
        backgroundColor: 'rgba(182, 72, 53, 0.2)',
        borderColor: 'rgb(168, 21, 21)',
        pointBackgroundColor: 'rgb(168, 21, 21)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(168, 21, 21)'
    },

    {
        label: 'Bishop (4)',
        hidden: true,
        data: [4, 2, 3, 3, 4, 1],
        fill: true,
        backgroundColor: 'rgba(180, 182, 53, 0.2)',
        borderColor: 'rgb(168, 146, 0)',
        pointBackgroundColor: 'rgb(168, 146, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(168, 146, 0)'
    },

    {
        label: 'Black Bolt (5)',
        hidden: true,
        data: [5, 4, 2, 4, 2, 3],
        fill: true,
        backgroundColor: 'rgba(68, 53, 182, 0.2)',
        borderColor: 'rgb(41, 44, 106)',
        pointBackgroundColor: 'rgb(41, 44, 106)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(41, 44, 106)'
    },

    {
        label: 'Black Cat (3)',
        hidden: true,
        data: [2, 4, 4, 2, 4, 1],
        fill: true,
        backgroundColor: 'rgba(118, 116, 134, 0.2)',
        borderColor: 'rgb(105, 105, 105)',
        pointBackgroundColor: 'rgb(105, 105, 105)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(105, 105, 105)'
    },

    {
        label: 'Black Dwarf (4)',
        hidden: true,
        data: [3, 5, 2, 2, 4, 4],
        fill: true,
        backgroundColor: 'rgba(116, 134, 118, 0.2)',
        borderColor: 'rgb(106, 129, 109)',
        pointBackgroundColor: 'rgb(106, 129, 109)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(106, 129, 109)'
    },

    {
        label: 'Black Panther (4)',
        hidden: true,
        data: [4, 4, 3, 2, 4, 1],
        fill: true,
        backgroundColor: 'rgba(126, 116, 134, 0.2)',
        borderColor: 'rgb(97, 83, 110)',
        pointBackgroundColor: 'rgb(97, 83, 110)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(97, 83, 110)'
    },

    {
        label: 'Bast Panther (3)',
        hidden: true,
        data: [3, 3, 4, 2, 1, 1],
        fill: true,
        backgroundColor: 'rgba(93, 27, 147, 0.2)',
        borderColor: 'rgb(172, 57, 239)',
        pointBackgroundColor: 'rgb(172, 57, 239)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(172, 57, 239)'
    },

    {
        label: 'Black Swan (4)',
        hidden: true,
        data: [4, 3, 2, 2, 2, 1],
        fill: true,
        backgroundColor: 'rgba(27, 147, 89, 0.2)',
        borderColor: 'rgb(82, 99, 107)',
        pointBackgroundColor: 'rgb(82, 99, 107)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(82, 99, 107)'
    },

    {
        label: 'Black Widow (2)',
        hidden: true,
        data: [2, 3, 4, 2, 2, 1],
        fill: true,
        backgroundColor: 'rgba(147, 27, 89, 0.2)',
        borderColor: 'rgb(136, 58, 79)',
        pointBackgroundColor: 'rgb(136, 58, 79)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(136, 58, 79)'
    },

    {
        label: 'Black Widow (3)',
        hidden: true,
        data: [3, 2, 2, 3, 2, 1],
        fill: true,
        backgroundColor: 'rgba(147, 27, 59, 0.2)',
        borderColor: 'rgb(152, 37, 67)',
        pointBackgroundColor: 'rgb(152, 37, 67)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(152, 37, 67)'
    },

    {
        label: 'Blade (4)',
        hidden: true,
        data: [3, 3, 3, 3, 1, 1],
        fill: true,
        backgroundColor: 'rgba(147, 89, 27, 0.2)',
        borderColor: 'rgb(179, 96, 41)',
        pointBackgroundColor: 'rgb(179, 96, 41)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(179, 96, 41)'
    },

    {
        label: 'Blue Marvel (?)',
        hidden: true,
        data: [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(31, 27, 147, 0.2)',
        borderColor: 'rgb(41, 52, 179)',
        pointBackgroundColor: 'rgb(41, 52, 179)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(41, 52, 179)'
    },

    {
        label: 'Bob (2)',
        hidden: true,
        data: [3, 4, 3, 3, 1, 1],
        fill: true,
        backgroundColor: 'rgba(27, 147, 37, 0.2)',
        borderColor: 'rgb(105, 179, 41)',
        pointBackgroundColor: 'rgb(105, 179, 41)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(105, 179, 41)'
    },

    {
        label: 'Bullseye (2)',
        hidden: true,
        data: [3, 2, 3, 4, 1, 1],
        fill: true,
        backgroundColor: 'rgba(27, 121, 147, 0.2)',
        borderColor: 'rgb(92, 117, 114)',
        pointBackgroundColor: 'rgb(92, 117, 114)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(92, 117, 114)'
    },

    {
        label: 'Cable (5)',
        hidden: true,
        data: [5, 3, 2, 5, 1, 3],
        fill: true,
        backgroundColor: 'rgba(147, 145, 27, 0.2)',
        borderColor: 'rgb(216, 219, 0)',
        pointBackgroundColor: 'rgb(216, 219, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(216, 219, 0)'
    },

    {
        label: 'Cap (Sam) (3)',
        hidden: true,
        data: [2, 3, 4, 4, 4, 3],
        fill: true,
        backgroundColor: 'rgba(147, 27, 27, 0.2)',
        borderColor: 'rgb(219, 0, 0)',
        pointBackgroundColor: 'rgb(219, 0, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(219, 0, 0)'
    },

    {
        label: 'Cap (Steve) (4)',
        hidden: true,
        data: [2, 4, 2, 4, 3, 4],
        fill: true,
        backgroundColor: 'rgba(27, 75, 147, 0.2)',
        borderColor: 'rgb(0, 113, 219)',
        pointBackgroundColor: 'rgb(0, 113, 219)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 113, 219)'
    },

    {
        label: 'Cap (1st Avenger) (4)',
        hidden: true,
        data: [3, 3, 3, 3, 3, 1],
        fill: true,
        backgroundColor: 'rgba(27, 121, 147, 0.2)',
        borderColor: 'rgb(75, 116, 155)',
        pointBackgroundColor: 'rgb(75, 116, 155)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 116, 155)'
    },

    {
        label: 'Capn Marvel (4)',
        hidden: true,
        data: [4, 3, 2, 4, 4, 1],
        fill: true,
        backgroundColor: 'rgba(147, 107, 27, 0.2)',
        borderColor: 'rgb(235, 121, 0)',
        pointBackgroundColor: 'rgb(235, 121, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(235, 121, 0)'
    },

    {
        label: 'Cosmic Capn (5)',
        hidden: true,
        data: [4, 4, 3, 3, 4, 1],
        fill: true,
        backgroundColor: 'rgba(27, 147, 145, 0.2)',
        borderColor: 'rgb(0, 184, 235)',
        pointBackgroundColor: 'rgb(0, 184, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 184, 235)'
    },

    {
        label: 'Carnage (4)',
        hidden: true,
        data: [2, 2, 4, 3, 1, 1],
        fill: true,
        backgroundColor: 'rgba(147, 55, 27, 0.2)',
        borderColor: 'rgb(189, 28, 0)',
        pointBackgroundColor: 'rgb(189, 28, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(189, 28, 0)'
    },

    {
        label: 'Cassandra Nova (5)',
        hidden: true,
        data: [3, 3, 2, 3, 4, 1],
        fill: true,
        backgroundColor: 'rgba(147, 97, 27, 0.2)',
        borderColor: 'rgb(109, 61, 23)',
        pointBackgroundColor: 'rgb(109, 61, 23)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(109, 61, 23)'
    },

    {
        label: 'Clea (3)',
        hidden: true,
        data: [2, 1, 2, 3, 2, 3],
        fill: true,
        backgroundColor: 'rgba(121, 27, 147, 0.2)',
        borderColor: 'rgb(95, 17, 151)',
        pointBackgroundColor: 'rgb(95, 17, 151)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(95, 17, 151)'
    },

    {
        label: 'Colossus (4)',
        hidden: true,
        data: [2, 4, 3, 2, 3, 4],
        fill: true,
        backgroundColor: 'rgba(27, 107, 147, 0.2)',
        borderColor: 'rgb(96, 107, 138)',
        pointBackgroundColor: 'rgb(96, 107, 138)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(96, 107, 138)'
    },

    {
        label: 'Corvus Glaive (4)',
        hidden: true,
        data: [4, 3, 3, 3, 1, 1],
        fill: true,
        backgroundColor: 'rgba(27, 107, 147, 0.2)',
        borderColor: 'rgb(64, 78, 114)',
        pointBackgroundColor: 'rgb(64, 78, 114)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(64, 78, 114)'
    },

    {
        label: 'Cosmic Ghost Rider (6)',
        hidden: true,
        data: [5, 4, 3, 4, 3, 1],
        fill: true,
        backgroundColor: 'rgba(27, 147, 97, 0.2)',
        borderColor: 'rgb(9, 129, 127)',
        pointBackgroundColor: 'rgb(9, 129, 127)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(9, 129, 127)'
    },

    {
        label: 'Crimson Dynamo (4)',
        hidden: true,
        data: [3, 4, 2, 4, 3, 4],
        fill: true,
        backgroundColor: 'rgba(147, 27, 55, 0.2)',
        borderColor: 'rgb(189, 0, 38)',
        pointBackgroundColor: 'rgb(189, 0, 38)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(189, 0, 38)'
    },

    {
        label: 'Crossbones (3)',
        hidden: true,
        data: [2, 3, 1, 2, 3, 1],
        fill: true,
        backgroundColor: 'rgba(110, 78, 86, 0.2)',
        borderColor: 'rgb(112, 76, 84)',
        pointBackgroundColor: 'rgb(112, 76, 84)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(112, 76, 84)'
    },

    {
        label: 'Crossbones, Merc (3)',
        hidden: true,
        data: [3, 3, 2, 3, 2, 1],
        fill: true,
        backgroundColor: 'rgba(127, 72, 85, 0.2)',
        borderColor: 'rgb(129, 50, 66)',
        pointBackgroundColor: 'rgb(129, 50, 66)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(129, 50, 66)'
    },

    {
        label: 'Crystal (3)',
        hidden: true,
        data: [3, 2, 4, 4, 3, 1],
        fill: true,
        backgroundColor: 'rgba(109, 127, 72, 0.2)',
        borderColor: 'rgb(153, 141, 30)',
        pointBackgroundColor: 'rgb(153, 141, 30)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(153, 141, 30)'
    },

    {
        label: 'Cyclops (4)',
        hidden: true,
        data: [4, 3, 2, 4, 4, 4],
        fill: true,
        backgroundColor: 'rgba(127, 124, 72, 0.2)',
        borderColor: 'rgb(214, 193, 0)',
        pointBackgroundColor: 'rgb(214, 193, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(214, 193, 0)'
    },

    {
        label: 'Daredevil (4)',
        hidden: true,
        data: [3, 3, 3, 3, 3, 1],
        fill: true,
        backgroundColor: 'rgba(127, 76, 72, 0.2)',
        borderColor: 'rgb(147, 21, 21)',
        pointBackgroundColor: 'rgb(147, 21, 21)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(147, 21, 21)'
    },

    {
        label: 'Darkstar (3)',
        hidden: true,
        data: [2, 2, 3, 4, 1, 3],
        fill: true,
        backgroundColor: 'rgba(127, 115, 72, 0.2)',
        borderColor: 'rgb(190, 166, 9)',
        pointBackgroundColor: 'rgb(190, 166, 9)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(190, 166, 9)'
    },

    {
        label: 'Deadpool (3)',
        hidden: true,
        data: [3, 3, 2, 4, 2, 1],
        fill: true,
        backgroundColor: 'rgba(135, 33, 33, 0.2)',
        borderColor: 'rgb(190, 9, 9)',
        pointBackgroundColor: 'rgb(190, 9, 9)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(190, 9, 9)'
    },

    {
        label: 'Doc Ock, Scientist (4)',
        hidden: true,
        data: [3, 2, 3, 3, 3, 1],
        fill: true,
        backgroundColor: 'rgba(33, 135, 36, 0.2)',
        borderColor: 'rgb(60, 168, 21)',
        pointBackgroundColor: 'rgb(60, 168, 21)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(60, 168, 21)'
    },

    {
        label: 'Doc Ock (3)',
        hidden: true,
        data: [2, 2, 3, 3, 3, 1],
        fill: true,
        backgroundColor: 'rgba(33, 135, 36, 0.2)',
        borderColor: 'rgb(21, 168, 38)',
        pointBackgroundColor: 'rgb(21, 168, 38)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(21, 168, 38)'
    },

    {
        label: 'Dr Strange (5)',
        hidden: true,
        data: [2, 2, 3, 4, 4, 4],
        fill: true,
        backgroundColor: 'rgba(33, 113, 135, 0.2)',
        borderColor: 'rgb(26, 99, 234)',
        pointBackgroundColor: 'rgb(26, 99, 234)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(26, 99, 234)'
    },

    {
        label: 'Dr Supreme Strange (5)',
        hidden: true,
        data: [4, 3, 3, 4, 4, 1],
        fill: true,
        backgroundColor: 'rgba(135, 60, 33, 0.2)',
        borderColor: 'rgb(234, 75, 26)',
        pointBackgroundColor: 'rgb(234, 75, 26)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(234, 75, 26)'
    },

    {
        label: 'Dr Voodoo (4)',
        hidden: true,
        data: [3, 3, 3, 3, 4, 1],
        fill: true,
        backgroundColor: 'rgba(86, 33, 135, 0.2)',
        borderColor: 'rgb(130, 44, 201)',
        pointBackgroundColor: 'rgb(130, 44, 201)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(130, 44, 201)'
    },

    {
        label: 'Domino (3)',
        hidden: true,
        data: [4, 3, 2, 3, 2, 1],
        fill: true,
        backgroundColor: 'rgba(86, 33, 135, 0.2)',
        borderColor: 'rgb(172, 57, 239)',
        pointBackgroundColor: 'rgb(172, 57, 239)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(172, 57, 239)'
    },

    {
        label: 'Dormammu (8)',
        hidden: true,
        data: [4, 4, 2, 4, 3, 1],
        fill: true,
        backgroundColor: 'rgba(86, 33, 135, 0.2)',
        borderColor: 'rgb(129, 40, 230)',
        pointBackgroundColor: 'rgb(129, 40, 230)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(129, 40, 230)'
    },

    {
        label: 'Dracula (5)',
        hidden: true,
        data: [5, 4, 2, 2, 3, 2],
        fill: true,
        backgroundColor: 'rgba(135, 60, 33, 0.2)',
        borderColor: 'rgb(215, 40, 40)',
        pointBackgroundColor: 'rgb(215, 40, 40)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(215, 40, 40)'
    },

    {
        label: 'Drax the Destroyer (3)',
        hidden: true,
        data: [2, 3, 2, 2, 2, 1],
        fill: true,
        backgroundColor: 'rgba(33, 135, 33, 0.2)',
        borderColor: 'rgb(51, 136, 43)',
        pointBackgroundColor: 'rgb(51, 136, 43)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(51, 136, 43)'
    },

    {
        label: 'Ebony Maw (5)',
        hidden: true,
        data: [4, 2, 2, 4, 4, 1],
        fill: true,
        backgroundColor: 'rgba(33, 101, 135, 0.2)',
        borderColor: 'rgb(43, 86, 136)',
        pointBackgroundColor: 'rgb(43, 86, 136)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(43, 86, 136)'
    },

    {
        label: 'Echo (?)',
        hidden: true,
        data: [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(98, 33, 135, 0.2)',
        borderColor: 'rgb(172, 57, 239)',
        pointBackgroundColor: 'rgb(172, 57, 239)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(172, 57, 239)'
    },

    {
        label: 'Electro (4)',
        hidden: true,
        data: [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(129, 135, 33, 0.2)',
        borderColor: 'rgb(208, 196, 27)',
        pointBackgroundColor: 'rgb(208, 196, 27)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(208, 196, 27)'
    },

    {
        label: 'Elektra (4)',
        hidden: true,
        data: [3, 2, 2, 2, 1, 1],
        fill: true,
        backgroundColor: 'rgba(135, 33, 33, 0.2)',
        borderColor: 'rgb(208, 27, 48)',
        pointBackgroundColor: 'rgb(208, 27, 48)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(208, 27, 48)'
    },

    {
        label: 'Elsa Bloodstone (4)',
        hidden: true,
        data: [4, 2, 3, 4, 3, 1],
        fill: true,
        backgroundColor: 'rgba(135, 33, 33, 0.2)',
        borderColor: 'rgb(133, 133, 133)',
        pointBackgroundColor: 'rgb(159, 91, 99)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(133, 133, 133)'
    },

    {
        label: 'Emma Frost (4)',
        hidden: true,
        data: [3, 2, 2, 4, 4, 3],
        fill: true,
        backgroundColor: 'rgba(33, 101, 135, 0.2)',
        borderColor: 'rgb(49, 129, 185)',
        pointBackgroundColor: 'rgb(49, 129, 185)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(49, 129, 185)'
    },

    {
        label: 'Enchantress (4)',
        hidden: true,
        data: [3, 2, 2, 3, 4, 1],
        fill: true,
        backgroundColor: 'rgba(36, 135, 33, 0.2)',
        borderColor: 'rgb(54, 185, 49)',
        pointBackgroundColor: 'rgb(54, 185, 49)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 185, 49)'
    },

    {
        label: 'Exodus (5)',
        hidden: true,
        data: [4, 4, 3, 3, 3, 3],
        fill: true,
        backgroundColor: 'rgba(33, 74, 135, 0.2)',
        borderColor: 'rgb(76, 49, 185)',
        pointBackgroundColor: 'rgb(76, 49, 185)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(76, 49, 185)'
    },

    {
        label: 'Frankenstein (4)',
        hidden: true,
        data: [3, 4, 3, 2, 2, 1],
        fill: true,
        backgroundColor: 'rgba(33, 135, 45, 0.2)',
        borderColor: 'rgb(100, 175, 18)',
        pointBackgroundColor: 'rgb(100, 175, 18)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(100, 175, 18)'
    },

    {
        label: 'Gambit (3)',
        hidden: true,
        data: [4, 2, 2, 3, 2, 1],
        fill: true,
        backgroundColor: 'rgba(134, 33, 135, 0.2)',
        borderColor: 'rgb(196, 19, 216)',
        pointBackgroundColor: 'rgb(196, 19, 216)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(196, 19, 216)'
    },

    {
        label: 'Gamora (4)',
        hidden: true,
        data: [4, 2, 5, 2, 1, 1],
        fill: true,
        backgroundColor: 'rgba(33, 135, 53, 0.2)',
        borderColor: 'rgb(19, 216, 71)',
        pointBackgroundColor: 'rgb(19, 216, 71)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(19, 216, 71)'
    },

    {
        label: 'Ghost Rider (5)',
        hidden: true,
        data: [4, 3, 4, 3, 4, 3],
        fill: true,
        backgroundColor: 'rgba(135, 101, 33, 0.2)',
        borderColor: 'rgb(216, 121, 19)',
        pointBackgroundColor: 'rgb(216, 121, 19)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(216, 121, 19)'
    },

    {
        label: 'Ghost-Spider (3)',
        hidden: true,
        data: [2, 2, 3, 4, 5, 5],
        fill: true,
        backgroundColor: 'rgba(33, 135, 122, 0.2)',
        borderColor: 'rgb(19, 203, 216)',
        pointBackgroundColor: 'rgb(19, 203, 216)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(19, 203, 216)'
    },

    {
        label: 'Gladiator (6)',
        hidden: true,
        data: [4, 5, 3, 3, 3, 1],
        fill: true,
        backgroundColor: 'rgba(33, 53, 135, 0.2)',
        borderColor: 'rgb(19, 42, 216)',
        pointBackgroundColor: 'rgb(19, 42, 216)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(19, 42, 216)'
    },

    {
        label: 'Gorgon (3)',
        hidden: true,
        data: [3, 3, 3, 3, 2, 4],
        fill: true,
        backgroundColor: 'rgba(135, 81, 33, 0.2)',
        borderColor: 'rgb(155, 116, 23)',
        pointBackgroundColor: 'rgb(155, 116, 23)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(155, 116, 23)'
    },

    {
        label: 'Green Goblin (4)',
        hidden: true,
        data: [4, 3, 3, 4, 3, 1],
        fill: true,
        backgroundColor: 'rgba(33, 135, 36, 0.2)',
        borderColor: 'rgb(23, 155, 34)',
        pointBackgroundColor: 'rgb(23, 155, 34)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(23, 155, 34)'
    },

    {
        label: 'Groot (3)',
        hidden: true,
        data: [2, 4, 2, 3, 1, 3],
        fill: true,
        backgroundColor: 'rgba(135, 77, 33, 0.2)',
        borderColor: 'rgb(155, 91, 23)',
        pointBackgroundColor: 'rgb(155, 91, 23)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(155, 91, 23)'
    },

    {
        label: 'Gwenom (4)',
        hidden: true,
        data: [3, 3, 3, 3, 4, 3],
        fill: true,
        backgroundColor: 'rgba(33, 135, 113, 0.2)',
        borderColor: 'rgb(23, 153, 155)',
        pointBackgroundColor: 'rgb(23, 153, 155)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(23, 153, 155)'
    },

    {
        label: 'Gwenpool (4)',
        hidden: true,
        data: [3, 4, 3, 4, 1, 1],
        fill: true,
        backgroundColor: 'rgba(134, 33, 135, 0.2)',
        borderColor: 'rgb(186, 18, 174)',
        pointBackgroundColor: 'rgb(186, 18, 174)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(186, 18, 174)'
    },

    
]
