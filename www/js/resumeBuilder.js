/* ------------------
 * Setup variables
 *--------------------*/

// Bio as object
var bio = {
	"name": "Alistair Reynolds",
	"role": "Project Manager",
	"contact":
		{
			"phone": "+447882311503",
			"email": "alistair.reynolds1986@gmail.com",
			"github": "madcabbage",
			"location": "Stroud, UK"
		},
	"photo": "img/al.jpg",
	"welcome": "Check out my resume",
	"skills": ["HTML","CSS","JS","PHP","MySQL","Adobe Fireworks"]
};

// Education as object
var education = {
	"name": "DeMontfort Uni",
	"location": "Leicester, UK",
	"dates": "2005-2009",
	"degree": "BSC",
	"major": "Computer Science"
}

// Create work object with jobs as empty array
var work = {
	"jobs": []
};
// Create job object
var job = {};
// Set job properties
job.title = "Junior developer";
job.employer = "Zone EU";
job.dates = "2007-2008";
job.location = "Leicester, UK";
job.description = "Working in a small company programming in Delphi to create small applications for the company";
// Add job to jobs in work object
work.jobs.push(job);
// Next job setting up and adding
var job = {};
job.title = "Web developer";
job.employer = "Zone EU";
job.dates = "2009-2011";
job.location = "Leicester, UK";
job.description = "Designing and setting up basic websites with all skills listed";
work.jobs.push(job);
// Next job setting up and adding
var job = {};
job.title = "Project Manager";
job.employer = "P&C Micros";
job.dates = "2011-Current";
job.location = "Nantong, China and Melbourne, Australia";
job.description = "Expanding upon basic ideas of a project, designing how they will work, and managing the project to bring them to life";
work.jobs.push(job);

/*
var education = {
	"schools": [
		{
			"Name": "Guthlaxton College",
			"City": "Leicester",
			"Years": "2002-2004",
			"Level": "A-Level",
			"Subjects": ["Physics","Computer Science","Geography"]
		},
		{
			"Name": "DeMontfort Uni",
			"City": "Leicester",
			"Years": "2005-2009",
			"Level": "BSC",
			"Subjects": ["Computer Science"]
		},
	],
	"online-courses": [
		{
			"Name": "Front-end Web Developer",
			"Provider": "Udacity",
			"Years": "2015",
			"Level": "Nandodegree",
			"Subjects": ["HTML","CSS","JS","JQuery"]
		}
	]
}
// Setup jobs array in a different way
var career = {
	"jobs": []
};
var job = {};
job.job = "Junior developer";
job.employer = "Zone EU";
job.years = "2007-2008";

*/





//career["jobs"].append(job);

var projects = {
	"websites":[
		{
			"name":"Planet ZEON",
			"years":"2010-2012",
			"type":"Entertainment"
		},
		{
			"name":"My Zone Laser",
			"years":"2012-Current",
			"type":"Entertainment"
		}
	]
}

/* ------------------
 * Checking vars
 *--------------------*/
//console.log(bio);
//console.log(education);
//console.log(career);

projects.display = function(){
	console.log(this.Websites);
	for(var p in this.Websites){
		console.log(p.Name);
	}
}

/* ------------------
 * Formatting variables into HTML
 *--------------------*/

HTMLheaderName = HTMLheaderName.replace('%data%',  bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
HTMLmobile = HTMLmobile.replace('%data%', bio.contact.phone);
HTMLemail = HTMLemail.replace('%data%', bio.contact.email);
HTMLgithub = HTMLgithub.replace('%data%', bio.contact.github);
HTMLlocation = HTMLlocation.replace('%data%', bio.contact.location);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcome);
HTMLbioPic = HTMLbioPic.replace('%data%', bio.photo);

HTMLschoolName = HTMLschoolName.replace('%data%', education.name);
HTMLschoolDegree = HTMLschoolDegree.replace('%data%', education.degree);
HTMLschoolDates = HTMLschoolDates.replace('%data%', education.dates);
HTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.location);
HTMLschoolMajor = HTMLschoolMajor.replace('%data%', education.major);

if(bio.skills){
	var HTMLfullSkills = "";
	for(skill in bio.skills){
		HTMLfullSkills = HTMLfullSkills + HTMLskills.replace('%data%', bio.skills[skill]);
	}
}

if(work.jobs){
	var HTMLfullJobs = "";
	for(job in work.jobs){
		HTMLfullJobs += (HTMLworkEmployer).replace('%data%', work.jobs[job].employer);
		HTMLfullJobs += (HTMLworkTitle).replace('%data%', work.jobs[job].title);
		HTMLfullJobs += (HTMLworkDates).replace('%data%', work.jobs[job].dates);
		HTMLfullJobs += (HTMLworkLocation).replace('%data%', work.jobs[job].location);
		HTMLfullJobs += (HTMLworkDescription).replace('%data%', work.jobs[job].description);
	}
}

/* ------------------
 * Appending formatted HTML into page
 *--------------------*/

$('#topContacts').append(HTMLmobile);
$('#topContacts').append(HTMLemail);
$('#topContacts').append(HTMLgithub);
$('#topContacts').append(HTMLlocation);

$('#header').prepend(HTMLheaderRole);
$('#header').prepend(HTMLheaderName);
$('#header').append(HTMLwelcomeMsg);
$('#header').append(HTMLbioPic);
if(bio.skills){
	$('#header').append(HTMLskillsStart);;
	$('#skills').append(HTMLfullSkills);
}

if(work.jobs){
	$('#header').append(HTMLworkStart);;
	$('#workExperience').append(HTMLfullJobs);
}

$('#header').append(HTMLschoolStart);;
$('#education').append(HTMLschoolName);
$('#education').append(HTMLschoolDegree);
$('#education').append(HTMLschoolDates);
$('#education').append(HTMLschoolLocation);
$('#education').append(HTMLschoolMajor);