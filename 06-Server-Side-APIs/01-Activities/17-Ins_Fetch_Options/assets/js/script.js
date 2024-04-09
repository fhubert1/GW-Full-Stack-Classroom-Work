fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


  // credentials: same-origin - ensures that cookies and HTTP authentication credentials are sent 
  // along with the request only if the request is being made to the same origin as the script that initiated it.

  // credentials: same-origin - don't include credentials at all

  // credentials: include - Always include

  // redirect 