var requestUrl = 'https://api.github.com/users';

//Browser XMLHttpRequest, built in the browser and require more code.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// AJAX call requires a third party library, jQuery
$.ajax({
  url: requestUrl, // makes the api call and returns the promise
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Response \n-------------');
  console.log(response);
});




