var alertButtonEl = $('#alert-btn');
var themeButtonEl = $('#theme-btn');
var lotteryButtonEl = $('#lottery-btn');
var lotteryNumberEl = $('#lottery-number');
var refreshButtonEl = $('#refresh-btn');

// light theme state
var isDark = true;

// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
alertButtonEl.on('click', function () {
  alert('Hello World');
});

// Click event causes alert light theme toggle
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark; // negative operator for boolean expression when true goes false visa versa
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark; // toggling isDark boolean
  }
});

// Click event causes random number
lotteryButtonEl.on('click', function () {
  var random = Math.floor(Math.random() * 100000000) + 10000000;
  console.log(random);
  lotteryNumberEl.text(random);
});

// Click event causes refresh
refreshButtonEl.on('click', function () {
  location.reload();
});

// location is a keyword it's an global object which the browser provides
// current url
// location.href

