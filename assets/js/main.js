import { default as data } from "./db.js";

import { populateAbout } from "./populateAbout.js";
import { populateSkills } from "./populateSkills.js";
import { populateProjects } from "./populateProjects.js";
import { populateWork } from "./populateWork.js";
import { populateEducation } from "./populateEducation.js";

populateAbout(data.bio.about, "about");
populateSkills(data.skills, "skills");
populateProjects(data.projects, "projects");
populateWork(data.experience, "experience");
populateEducation(data.education, "education");
