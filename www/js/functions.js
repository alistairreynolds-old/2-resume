function addJob(title,employer,dates,location,description){
	var job = {};
	job.title = title;
	job.employer = employer;
	job.dates = dates;
	job.location = location;
	job.description = description;
	return job;
}

function addProject(title,dates,description,image){
	var project = {};
	project.title = title;
	project.dates = dates;
	project.description = description;
	project.image = image;
	return project;
}

function addSchool(name,location,dates,degree,major){
	var school = {};
	school.name = name;
	school.location = location;
	school.dates = dates;
	school.degree = degree;
	school.major = major;
	return school;
}

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

function addOnline(title,school,dates,url){
	var online = {};
	online.title = title;
	online.school = school;
	online.dates = dates;
	online.url = url;
	return online;
}