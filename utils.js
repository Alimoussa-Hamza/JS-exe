/**
 * filter data by flag
 * @param {*} criterea string
 * @param {*} countries Array
 */
const filter = (criterea, countries) => {
    const dataClone = [...countries]
    const resObject = [];
    dataClone.forEach(layer1 => {
        const people = [];
        layer1.people.forEach(layer2 => {
            const animals = layer2.animals.filter(animal => {
                return animal.name.includes(criterea);
            })
            if (animals.length > 0) {
                people.push({ ...layer2, animals });
            }
        })
        if (people.length > 0) {
            resObject.push({ ...layer1, people });
        }
    });
    //resObject.length ? console.log(JSON.stringify(resObject)) : null;
    return resObject;
};

/**
 * count objects insid array
 * @param {*} countries Array
 */
const count = (countries) => {
    const dataClone = [...countries];
    const resObject = dataClone.map(({ name, people }) => {
        return {
            name: `${name} [${people.length}]`, people: people.map(({ name, animals }) => {
                return { name: `${name} [${animals.length}]`, animals: animals }
            })
        }
    });
    //resObject.length ? console.log(JSON.stringify(resObject)) : null;
    return resObject
};

module.exports = {
    count,
    filter
}