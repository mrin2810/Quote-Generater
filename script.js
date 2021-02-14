// Get Quote From API

async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0?format=json&method=getQuote&lang=en';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log('whoops, no quote', error);
    }
}

//On Load
getQuote();
