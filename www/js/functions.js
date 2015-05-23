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

