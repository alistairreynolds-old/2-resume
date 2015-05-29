/***********
* Bio object
************/
// Create object
var bio = {
// Set variables
	"name": "Alistair Reynolds",
	"role": "Project Manager",
	"contacts":
		{
			"phone": "+447882311503",
			"email": "alistair.reynolds1986@gmail.com",
			"github": "madcabbage",
			"location": "Stroud, UK",
			"twitter": "@madcabbage"
		},
	"photo": "img/al.jpg",
	"welcome": "The Cake is not a Lie",
	"skills": ["HTML","CSS","JS","PHP","MySQL","Adobe Fireworks"]
};
// Create dsplay function
bio.display = function(){
	// Format variables
	HTMLheaderName = HTMLheaderName.replace('%data%',  this.name);
	HTMLheaderRole = HTMLheaderRole.replace('%data%', this.role);
	HTMLmobile = HTMLmobile.replace('%data%', this.contacts.phone);
	HTMLemail = replaceAll('%data%',this.contacts.email,HTMLemail);
	HTMLgithub = replaceAll('%data%',this.contacts.github,HTMLgithub);
	HTMLlocation = HTMLlocation.replace('%data%', this.contacts.location);
	HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcome);
	HTMLbioPic = HTMLbioPic.replace('%data%', this.photo);
	var HTMLfullSkills = "";
	for(skill in this.skills){
		HTMLfullSkills = HTMLfullSkills + HTMLskills.replace('%data%', this.skills[skill]);
	}
	// Append to HTML
	$('#topContacts').append(HTMLmobile);
	$('#topContacts').append(HTMLemail);
	$('#topContacts').append(HTMLgithub);
	$('#topContacts').append(HTMLlocation);
	$('#primary-header').prepend(HTMLheaderRole);
	$('#primary-header').prepend(HTMLheaderName);
	$('#secondary-header').append(HTMLwelcomeMsg);
	$('#secondary-header').append(HTMLbioPic);
	$('#secondary-header').append(HTMLskillsStart);
	$('#skills').append(HTMLfullSkills);
}

/***********
* Work object
************/
var work = {
	"jobs": []
};
work.jobs.push(addJob(
	"Junior Developer",
	"Zone EU",
	"2007-2008",
	"Leicester, UK",
	"Working in a small company programming in Delphi to create small applications for the company. Also included managing some small projects, customer support, and documentation.")
);
work.jobs.push(addJob(
	"Web Developer",
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
work.display = function(){
	$('#workExperience').append(HTMLworkStart);
	for(job in this.jobs){
		var HTMLfullJobs = "";
		HTMLfullJobs += (HTMLworkEmployer).replace('%data%', this.jobs[job].employer);
		HTMLfullJobs += (HTMLworkTitle).replace('%data%', this.jobs[job].title);
		HTMLfullJobs += (HTMLworkDates).replace('%data%', this.jobs[job].dates);
		HTMLfullJobs += (HTMLworkLocation).replace('%data%', this.jobs[job].location);
		HTMLfullJobs += (HTMLworkDescription).replace('%data%', this.jobs[job].description);
		$('.work-entry:last-of-type').append(HTMLfullJobs);
	}
}

/***********
* Projects object
************/
var projects = {
	"projects": []
};
projects.projects.push(addProject(
	"Planet ZEON",
	"2008-2010",
	"An online membership system for laser tag players to track their statistics",
	["img/project-images/zeon-thumb.png"])
);
projects.projects.push(addProject(
	"Megazone Leicester",
	"2010",
	"A minor website for a laser tag site",
	["img/project-images/mz-leicester-thumb.png"])
);
projects.projects.push(addProject(
	"Myzonelaser",
	"2012-Current",
	"Planet ZEON version 2, with achievements and ranks",
	["img/project-images/1-MZL.png","img/project-images/mzl-2.png"])
);
projects.projects.push(addProject(
	"Banksia FEMS",
	"2012-Current",
	"Banksia FEMS is a Family Entertainment Centre Management System, used to manage bookings Point of Sale, Staff management, Inventory, etc",
	["img/project-images/homepage_launcher-1024x738.png","img/project-images/banksia-2.png"])
);
projects.display = function(){
	for(project in this.projects){
		var HTMLfullProjects = "";
		$('#projects').append(HTMLprojectStart);
		HTMLfullProjects += HTMLprojectTitle.replace('%data%',this.projects[project].title);
		HTMLfullProjects += HTMLprojectDates.replace('%data%',this.projects[project].dates);
		HTMLfullProjects += HTMLprojectDescription.replace('%data%',this.projects[project].description);
		HTMLfullProjects += HTMLprojectImageStart;
		for(image in this.projects[project].image){
			HTMLfullProjects += HTMLprojectImage.replace('%data%',this.projects[project].image[image]);
		}
		HTMLfullProjects += HTMLprojectImageEnd;
		$('.project-entry:last-of-type').append(HTMLfullProjects);
	}
};

/***********
* Education object
************/
var education = {
	"schools": [],
	"online": []
};
education.schools.push(addSchool(
	"Guthlaxton College",
	"Leicester, UK",
	"2002-2004",
	"A-Level",
	["Physics","Computer Science","Geography"])
);
education.schools.push(addSchool(
	"DeMontfort University",
	"Leicester, UK",
	"2005-2009",
	"BSc",
	["Computer Science"])
);
education.online.push(addOnline(
	"Front-end Web Developer",
	"Udacity",
	"2015",
	"http://www.udacity.com")
);
education.display = function(){
	$('#education').append(HTMLschools);
	for(school in this.schools){
		var HTMLfullEducation = "";
		$('#education').append(HTMLschoolStart);
		HTMLfullEducation += (HTMLschoolName).replace('%data%', education.schools[school].name);
		HTMLfullEducation += (HTMLschoolDegree).replace('%data%', education.schools[school].degree);
		HTMLfullEducation += (HTMLschoolDates).replace('%data%', education.schools[school].dates);
		HTMLfullEducation += (HTMLschoolLocation).replace('%data%', education.schools[school].location);
		HTMLfullEducation += (HTMLschoolMajor).replace('%data%', education.schools[school].major);
		$('.education-entry:last-of-type').append(HTMLfullEducation);
	}
	$('#education').append(HTMLonlineClasses);
	for(course in this.online){
		var HTMLfullOnlineCourses = "";
		$('#education').append(HTMLschoolStart);
		HTMLfullOnlineCourses += (HTMLonlineTitle).replace('%data%', education.online[course].title);
		HTMLfullOnlineCourses += (HTMLonlineSchool).replace('%data%', education.online[course].school);
		HTMLfullOnlineCourses += (HTMLonlineDates).replace('%data%', education.online[course].dates);
		HTMLfullOnlineCourses += replaceAll('%data%',education.online[course].url,HTMLonlineURL);
		$('.education-entry:last-of-type').append(HTMLfullOnlineCourses);
	}

};

bio.display();
education.display();
work.display();
projects.display();
// Commenting out to show that it's there, but hiding because it looks nasty
//$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);