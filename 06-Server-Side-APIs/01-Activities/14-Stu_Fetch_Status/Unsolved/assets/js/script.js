var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      if (!response.ok) {
        responseText.textContent = response.status;
        console.log("bad response: " + response.status);
      } 
      
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
