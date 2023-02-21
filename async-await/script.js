// async function puxarDados() {
//     const responseDados = await fetch('./dados.json');
//     const jsonDados = await responseDados.json();

//     console.log(responseDados);
//     console.log(jsonDados.aula);
// }

// puxarDados();

async function puxarDados() {
    const dadosResponse = fetch('./dados.json');
    const clientesResponse = fetch('./clientes.json');

    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();

    console.log(dadosJSON, clientesJSON)
}

puxarDados();

async function asyncSemPromisse() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('Depois de 1s');
            resolve();
        }, 1000);
    })
    console.log('Acabou');
}
asyncSemPromisse();