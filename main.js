
const enterBtn = document.getElementById('enterBtn')

function shorten(){
    const input = document.getElementById('urlEnter').value
    console.log(input)

    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 5a2d1246ccecafd8e6dd8a61c4f161d513992586',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": input, "domain": "bit.ly" }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('urlShow').innerText = data.link;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



enterBtn.addEventListener('click',function(event){
    event.preventDefault()
    shorten()
  
})