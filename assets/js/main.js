import { default as data } from "./db.js";

import { populateAbout } from "./populateAbout.js";
import { populateSkills } from "./populateSkills.js";
import { populateProjects } from "./populateProjects.js";
import { populateExperience } from "./populateExperience.js";
import { populateEducation } from "./populateEducation.js";
import { populateProfiles } from "./populateProfiles.js";
import "./scroll.js";

populateAbout(data.bio.about, "about");
populateSkills(data.skills, "skills");
populateProjects(data.projects, "projects");
populateExperience(data.experience, "experience");
populateEducation(data.education, "education");
populateProfiles(data.profiles, "profiles");
