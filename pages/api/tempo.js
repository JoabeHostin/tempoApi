

async function tempo(request, response) {

    

    const dynamicDate = new Date();   

    const cotationResponse = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL");
    const cotationResponseJson = await cotationResponse.json()
    const cotationUsd = cotationResponseJson.USDBRL.bid;
    const cotationEur = cotationResponseJson.EURBRL.bid;

    

    response.json({
        DATE: dynamicDate.toGMTString(),
        USDBRL: cotationUsd,
        EURBRL: cotationEur
    });

}












export default tempo;



