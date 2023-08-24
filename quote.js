
//
async function getrandom() {
    try{
        //Making an asynchronous request to the API URL using fetch
        const response=await fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json');
        const data=await response.json();//Converting the API response to JSON format and waiting for the result

        //condition Checking if the response contains valid data
        if(!Array.isArray(data) || data.length===0){
            throw new console.error('Nenhum dado de citacao encotrado');
        }

        //Generating a random index to access a random element of the "data" array
        const randomindex=  Math.floor( Math.random() * data.length);
        
        //selector text content view quote
        const quote=document.querySelector("p");
        //
        quote.textContent=`"${data[randomindex].text} " -"${data[randomindex].author}" --${data[randomindex].tag}`;
        
        //Citation and author formatting with different colors
        const formatedQuote=`"${data[randomindex].text}" - <span style="color: blue;">${data[randomindex].author} </span> <br>  <span style="color:red;">${data[randomindex].tag}</span>`;

        quote.innerHTML =  formatedQuote;
    }catch(error){
        console.error('ocorreu um erro ao obter a citacao:',error);
    }
}
