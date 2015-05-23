// Setup variables
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
	"photo": "'img/al.jpg'",
	"welcome": "Check out my resume",
	"skills": ["HTML","CSS","JS","PHP","MySQL","Adobe Fireworks"]
};

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

//career["jobs"].append(job);

var projects = {
	"Websites":[
		{
			"Name":"Planet ZEON",
			"Years":"2010-2012",
			"Type":"Entertainment"
		},
		{
			"Name":"My Zone Laser",
			"Years":"2012-Current",
			"Type":"Entertainment"
		}
	]
}

// Checking vars
console.log(bio);
console.log(education);
console.log(career);

projects.display = function(){
	console.log(this.Websites);
	for(var p in this.Websites){
		console.log(p.Name);
	}
}

// Settings str values

HTMLheaderName = HTMLheaderName.replace('%data%',bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%',bio.role);
HTMLmobile = HTMLmobile.replace('%data%',bio.contact.phone);
HTMLemail = HTMLemail.replace('%data%',bio.contact.email);
HTMLgithub = HTMLgithub.replace('%data%',bio.contact.github);
HTMLlocation = HTMLlocation.replace('%data%',bio.contact.location);
//HTMLworkDescription = HTMLworkDescription.replace('%data%',work_position.job);

// Appending to page
$('#topContacts').append(HTMLmobile);
$('#topContacts').append(HTMLemail);
$('#topContacts').append(HTMLgithub);
$('#topContacts').append(HTMLlocation);
$('#header').append(HTMLheaderName);
$('#header').append(HTMLheaderRole);

$('#projects')