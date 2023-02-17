// const promessa = new Promise((resolve, reject) => {
//     let condição = true;
//     if(condição) {
//         setTimeout(() =>{
//             resolve({
//                 nome:'Doug',
//                 idade: 20
//             });
//         },1000);
        
//     } else {
//         reject(Error('Ocorreu um erro na promise'));
//     }   
    
// });


// const retorno = promessa.then(resolucao => {
//     console.log(resolucao)
//     resolucao.cargo = 'Backend Developer '
// })

//     .then(resolucao => {
//         console.log(resolucao)
//     },
//     rejeitada => {
//         console.log(rejeitada);
//     })
//     .finally(() => {
//         console.log('Acabou')
//     })

//     console.log(retorno);

const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('Usuario Logado')
    }, 1000)
})

const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})


const carregouTudo = Promise.race([login, dados]);
carregouTudo.then(resolucao => {
    console.log(resolucao)
})
