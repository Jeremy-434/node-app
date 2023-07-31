const fs = require('fs');

const createdFile = async (base = 5, list, limit) => {

    try {
        let consoleOutput, output = '';

        consoleOutput = `=======================
        Table - ${base}
 =======================
 `.rainbow;
        output = `=======================
       Table - ${base}
=======================
`;

        for (i = 1; i <= limit; i++) {
            consoleOutput += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`.white;
            output += `${base} x ${i} = ${base * i}\n`;
        }

        list && console.log(consoleOutput);

        fs.writeFileSync(`texts/table-${base}.txt`, output);

        return `table-${base}.txt created`.green;

    } catch (err) {
        throw err
    }

}

module.exports = {
    createdFile
}