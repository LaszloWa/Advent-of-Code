// Problem 1:

const puzzleInput = [68936, 
    53526,
    62556,
    115539,
    119659,
    77887,
    101443,
    71392,
    130327,
    56769,
    55083,
    101448,
    63985,
    60433,
    80302,
    101264,
    134416,
    112047,
    143310,
    73842,
    124020,
    50346,
    124192,
    119547,
    59351,
    122161,
    103742,
    107648,
    132879,
    65047,
    70234,
    54569,
    72785,
    120259,
    134533,
    61778,
    89183,
    144270,
    68600,
    134849,
    120221,
    126887,
    128483,
    101293,
    78066,
    141762,
    101929,
    119173,
    148580,
    142710,
    142029,
    61303,
    133204,
    120872,
    141111,
    124900,
    73600,
    73552,
    138183,
    147019,
    63157,
    127712,
    83610,
    59098,
    101675,
    57951,
    146696,
    135604,
    75158,
    140629,
    106125,
    142451,
    59468,
    69078,
    115676,
    69763,
    129999,
    97987,
    64654,
    104168,
    67894,
    92675,
    125475,
    110450,
    52738,
    87569,
    91939,
    117714,
    121018,
    140534,
    97876,
    146651,
    105741,
    140417,
    74771,
    141727,
    94957,
    145126,
    61429,
    143890]


let fuelNeed = 0;

const fuelRequired = (array) => {
    for (let i = 0; i < array.length; i++) {
        let fuelForModule = 0;
        fuelForModule = Math.floor(array[i] / 3) - 2;
        fuelNeed = fuelNeed + fuelForModule;
    }
}

fuelRequired(puzzleInput);

// Problem 2:

// Array is the same as for problem 1 (const puzzleInput)

let fuelNeed2 = 0;

const fuelRequired2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        let fuelForModule = 0;
        fuelForModule = Math.floor(array[i] / 3) - 2;
        fuelNeed2 = fuelNeed2 + fuelForModule;

        while (fuelForModule >= 0) {
            fuelForModule = Math.floor(fuelForModule / 3) - 2;
            if (fuelForModule > 0) {
                fuelNeed2 = fuelNeed2 + fuelForModule;
            }
        }
    }
}

fuelRequired2(puzzleInput);