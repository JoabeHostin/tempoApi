

async function tempo(request, response) {

    

    const dynamicDate = new Date();   

    const cotationResponse = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    const cotationResponseJson = await cotationResponse.json()
    const cotation = cotationResponseJson;

    

    response.json({
        date: dynamicDate.toGMTString(),
        cotation: cotation
    });

}












export default tempo;



