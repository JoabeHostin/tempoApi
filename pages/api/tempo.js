

async function tempo(request, response) {

    const dynamicDate = new Date();   
    
    const locationResponse = await fetch("https://api.bigdatacloud.net/data/ip-geolocation-with-confidence?ip=&localityLanguage=en&key=bdc_6ee4dcde331b482a99a2e453c3ba4987");
    const locatioResponseJson = await locationResponse.json();

    const location = locatioResponseJson.location.city;

    response.json({
        date: dynamicDate.toGMTString(),
        location: location
    });

}












export default tempo;



