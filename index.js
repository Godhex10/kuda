$("#form").submit(function(e){
    e.preventDefault()

    var query = $("#search").val()

    let result = ''
    var API_KEY = '1a5b2ed7bfe0e2e0014c05d1a0c02f30'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url)

    $.get(url, function (data){

        $("#result").html('') //to clear out previous searches

        console.log(data)
        
        data.organic_resuts.forEach(res => {
            
            result = `
            
            <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>
            
            `
            $("#result").append(result)
        });
    });
})