const dataMock = [
    {
        name: 'Dillauti',
        people:
            [{
                name: 'Winifred Graham',
                animals:
                    [{ name: 'Anoa' },
                    { name: 'Duck' },
                    { name: 'Narwhal' },
                    { name: 'Badger' },
                    { name: 'Cobra' },
                    { name: 'Crow' }]
            },
            {
                name: 'Blanche Viciani',
                animals:
                    [{ name: 'Barbet' },
                    { name: 'Rhea' },
                    { name: 'Snakes' },
                    { name: 'Antelope' },
                    { name: 'Echidna' },
                    { name: 'Crow' },
                    { name: 'Guinea Fowl' },
                    { name: 'Deer Mouse' }]
            },
            ]
    }
];

const filtedDataMock = [{
    name: 'Dillauti',
    people:
        [{
            name: 'Winifred Graham',
            animals:
                [{ name: 'Anoa' }]
        },
        ]
}
];

const countedDataMock = [
    {
        "name": "Dillauti [2]",
        "people": [
            {
                "name": "Winifred Graham [6]",
                "animals": [
                    {
                        "name": "Anoa",
                    },
                    {
                        "name": "Duck",
                    },
                    {
                        "name": "Narwhal",
                    },
                    {
                        "name": "Badger",
                    },
                    {
                        "name": "Cobra",
                    },
                    {
                        "name": "Crow",
                    },
                ]
            },
            {
                "animals": [
                    {
                        "name": "Barbet",
                    },
                    {
                        "name": "Rhea",
                    },
                    {
                        "name": "Snakes",
                    },
                    {
                        "name": "Antelope",
                    },
                    {
                        "name": "Echidna",
                    },
                    {
                        "name": "Crow",
                    },
                    {
                        "name": "Guinea Fowl",
                    },
                    {
                        "name": "Deer Mouse",
                    },
                ],
                "name": "Blanche Viciani [8]",
            },
        ],
    },
]

module.exports = {
    dataMock,
    filtedDataMock,
    countedDataMock
}