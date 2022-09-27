const { data } = require('./data');
let commands = process.argv.length > 2 ? process.argv.slice(2) : [];

const filter = (criterea) => {
    const dataClone = [...data]
    const resObject = [];
    dataClone.forEach(layer1 => {
        const people = [];
        layer1.people.forEach(layer2 => {
            const animals = layer2.animals.filter(animal => {
                return animal.name.includes(criterea)
            })
            if (animals.length > 0) {
                people.push({ ...layer2, animals })
            }
        })
        if (people.length > 0) {
            resObject.push({ ...layer1, people })
        }
    })
    return resObject

}
const count = () => {
    const dataClone = [...data]
    return dataClone.map(({ name, people }) => {
        return {
            name: `${name} [${people.length}]`, people: people.map(({ name, animals }) => {
                return { name: `${name} [${animals.length}]`, animals: animals }
            })
        }
    })
}

const filterFlag = '--filter='
const counterFlag = '--count'

commands.forEach(command => {
    if (command.startsWith(filterFlag)) {
        const criterea = command.replace(filterFlag, "")
        console.log(JSON.stringify(filter(criterea)));
    }
    if (command === counterFlag) console.log(JSON.stringify(count()));
})
