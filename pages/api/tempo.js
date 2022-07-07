//get ip

function tempo(request, response) {

//get location




    const dynamicDate = new Date();   
               


    response.json({
        date: dynamicDate.toGMTString() 
    });

}












export default tempo;



