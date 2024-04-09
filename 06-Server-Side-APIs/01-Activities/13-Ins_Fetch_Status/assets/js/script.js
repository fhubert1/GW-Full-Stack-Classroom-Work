var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrlArg) {
  fetch(requestUrlArg).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

getApi(requestUrl);


// .then is equalivent to functionaly programming

// every throw clause should be handled by a catch block
// usually Error object is thrown with throw clause
// if there is a catch block it will handle that thrown error