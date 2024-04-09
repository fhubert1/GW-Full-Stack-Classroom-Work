// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');


// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page
  projectDisplayEl.empty();

  // get projects from localStorage
  var projects = readProjectsFromStorage();

  // get todays date
  let today = dayjs().startOf('day');

  // loop through each project and create a row
  var cnt = 1;
  projects.forEach(data => {

    let rowEl = $('<tr>');
    let nameEl = $('<td>').text(data.name);
    let typeEl = $('<td>').text(data.type);
    let projectDate = dayjs(data.date);

    let formatedDueDate = projectDate.format('MMM DD, YYYY');  // Jun 30, 2022 at 08:37:48 am
    let formatedTime = projectDate.format('HH:mm:ss a');  // Jun 30, 2022 at 08:37:48 am

    let dueDateEl = $('<td>').text(formatedDueDate + " at " + formatedTime);
    let removeEl = $('<td><button class="btn-custom btn-delete-project data-index="' +cnt +'">X</button></td>')
      
    //check for late submission
    if (projectDate.isBefore(today)) {
      rowEl.addClass('project-late');
    } else {
      rowEl.addClass('project-today');
    }
    // append all the td to tr
    rowEl.append(nameEl, typeEl, dueDateEl, removeEl);
    // append the tr to the tb
    projectDisplayEl.append(rowEl);
    // add one to row counter
    cnt++;

  })
  
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {
  var projectIndex = parseInt($(this).attr('data-index'));
  var projects = readProjectsFromStorage();
  // remove project from the array
  projects.splice(projectIndex, 1);
  saveProjectsToStorage(projects);

  // print projects
  printProjectData();
}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();

  // read user input from the form
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val(); // don't need to trim select input
  var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format

  var newProject = {
    name: projectName,
    type: projectType,
    date: projectDate,
  };

  // add project to local storage
  var projects = readProjectsFromStorage();
  projects.push(newProject);
  saveProjectsToStorage(projects);

  // print project data
  printProjectData();

  // clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit);

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime();
setInterval(displayTime, 1000);

printProjectData();
