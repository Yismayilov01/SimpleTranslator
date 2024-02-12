const btn = document.querySelector('#btn')
const selectFrom = document.querySelector('#selectFrom')
const selectTo = document.querySelector('#selectTo')
async function language() {
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6ea19e3fc8mshea95cec8a68259ap14903cjsnc17fbe48f52b',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        for (let i in result.data.languages) {
            const option = document.createElement('option')
            option.value = result.data.languages[i].code
            option.innerHTML = result.data.languages[i].name
            selectTo.append(option)
            selectFrom.append(option)
        }
        for (let j in result.data.languages) {
            const option = document.createElement('option')
            option.value = result.data.languages[j].code
            option.innerHTML = result.data.languages[j].name
            selectTo.append(option)
        }
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
btn.addEventListener('click', async () => {
    const words = document.querySelector('#words')
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '6ea19e3fc8mshea95cec8a68259ap14903cjsnc17fbe48f52b',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: selectFrom.value,
            target_language: selectTo.value,
            text: words.value
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const netice = document.querySelector('#netice')
        netice.innerHTML = result.data.translatedText
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})
language()