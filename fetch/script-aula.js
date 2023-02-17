const doc = fetch('https://viacep.com.br/ws/01001000/json/');

doc.then(r => {
    const r2 = r.clone();
    r.text().then(text => {
        console.log(text);
    })
    r2.json().then(json => {
        console.log(json);
    })
})
