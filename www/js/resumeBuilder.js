/* ------------------
 * Setup variables
 *--------------------*/

// Bio as object
var bio = {
	"name": "Alistair Reynolds",
	"role": "Project Manager",
	"contacts":
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


// Create work object with jobs as empty array
var work = {
	"jobs": []
};
work.jobs.push(addJob(
	"Junior developer",
	"Zone EU",
	"2007-2008",
	"Leicester, UK",
	"Working in a small company programming in Delphi to create small applications for the company. Also included managing some small projects, customer support, and documentation.")
);
work.jobs.push(addJob(
	"Web developer",
	"P&C Micros",
	"2009-2011",
	"Melbourne, Australia",
	"Designing and setting up basic websites with HTML, CSS, JavaScript, JQuery and JQueryUI, PHP, and MySQL. Also included some customer support work, managing larger projects, basic Web Server administration via WHM/CPanel and SSH, and some minor Android and Delphi development."));
work.jobs.push(addJob(
	"Project Manager",
	"Zone China",
	"2011-Curent",
	"Nantong, China",
	"I would be handed a project from the directory that he would like making. From basic details of what was wanted, I would expand upon the basic ideas of the project, designing how they will work and look. I would then hand the work over to developers, and organise how and when we would make releases.")
);

// Create projects object with project as empty array
var projects = {
	"projects": []
};
projects.projects.push(addProject(
	"Planet ZEON",
	"2008-2010",
	"An online membership system for laser tag players to track their statistics",
	"http://madcabdesign.co.uk/Images/sites/zeon-thumb.png")
);
projects.projects.push(addProject(
	"Megazone Leicester",
	"2010",
	"A minor website for a laser tag site",
	"http://madcabdesign.co.uk/Images/sites/mz-leicester-thumb.png")
);
projects.projects.push(addProject(
	"Myzonelaser",
	"2012-Current",
	"Planet ZEON version 2, with achievements and ranks",
	"http://myzonelaser.com/assets/slideshow/1-MZL.png")
);
projects.projects.push(addProject(
	"Banksia FEMS",
	"2012-Current",
	"Banksia FEMS is a Family Entertainment Centre Management System, used to manage bookings Point of Sale, Staff management, Inventory, etc",
	"http://www.banksiafems.com/wp-content/uploads/2014/10/homepage_launcher-1024x738.png")
);
projects.display = function(){
	console.log(this.projects);
	var HTMLfullProjects = "";
	for(project in this.projects){
		HTMLfullProjects += HTMLprojectStart;
		HTMLfullProjects += HTMLprojectTitle.replace('%data%',this.projects[project].title);
		HTMLfullProjects += HTMLprojectDates.replace('%data%',this.projects[project].dates);
		HTMLfullProjects += HTMLprojectDescription.replace('%data%',this.projects[project].description);
		HTMLfullProjects += HTMLprojectImage.replace('%data%',this.projects[project].image);
	}
	//console.log(HTMLfullProjects);
	$('#projects').append(HTMLfullProjects);
};


var education = {
	"schools": [
		{
			"Name": "Guthlaxton College",
			"location": "Leicester",
			"Years": "2002-2004",
			"Level": "A-Level",
			"Subjects": ["Physics","Computer Science","Geography"]
		},
		{
			"Name": "DeMontfort Uni",
			"location": "Leicester",
			"Years": "2005-2009",
			"Level": "BSC",
			"Subjects": ["Computer Science"]
		},
	],
	"online-courses": [
		{
			"Name": "Front-end Web Developer",
			"location": "Udacity",
			"Years": "2015",
			"Level": "Nandodegree",
			"Subjects": ["HTML","CSS","JS","JQuery"]
		}
	]
}


/* ------------------
 * Formatting variables into HTML
 *--------------------*/

HTMLheaderName = HTMLheaderName.replace('%data%',  bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
HTMLmobile = HTMLmobile.replace('%data%', bio.contacts.phone);
HTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
HTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
HTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
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

projects.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);