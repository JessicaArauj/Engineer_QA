const faker = require('faker-br');

function generateData() {
    return {
        // name: faker.name.firstName() + ' ' + ' Teste',
        email: faker.internet.email(undefined, undefined, 'teste.com'),
        // email: faker.internet.email(undefined, 'teste', 'uorak.com'),
        phone: faker.phone.phoneNumber(),
        documents: {
            rg_9: faker.random.number({ min: 100000000, max: 999999999 }), // Gera RG com 9
            rg_11: faker.random.number({ min: 100000000, max: 99999999999 }), // Gera RG entre 9 a 11 dígitos
            cpf: faker.br.cpf(),
            // cnpj: faker.br.cnpj(),
            cnpj: generateCnpj(),
            pis: faker.random.number({ min: 10000000000, max: 99999999999 }),
        },
        address: {
            number: faker.random.number({ min: 0, max: 1000 }),
            zipPostalCodeValid: faker.address.zipCodeValidByState()
        }
    };
}

function generateCnpj() {
    const firstDigits = faker.br.cnpj().substr(0, 8); // Obter os primeiros 8 dígitos aleatórios
    const verificationDigits = faker.random.number({ min: 1, max: 99 }).toString().padStart(2, '0'); // Gerar um número de 2 dígitos para o DV
    return `${firstDigits}0001${verificationDigits}`;
}

function generateUsers(numberOfUsers) {
    const users = [];
    for (let i = 0; i < numberOfUsers; i++) {
        users.push(generateData());
    }
    return users;
}

// Gera 05 usuários de exemplo
const users = generateUsers(5);
console.log(JSON.stringify(users, null, 2));

