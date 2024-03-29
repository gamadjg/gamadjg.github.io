import { default as data } from "./db.js";
import { populateNav } from "./nav.js";
import { populateAbout } from "./populateAbout.js";
import { populateSkills } from "./populateSkills.js";
import { populateProjects } from "./populateProjects.js";
import { populateExperience } from "./populateExperience.js";
import { populateEducation } from "./populateEducation.js";
import { populateFooter } from "./populateFooter.js";
import { scroll } from "./scroll.js";

populateNav(data.nav, "nav");
populateAbout(data.bio, "about");
populateSkills(data.skills, "skills");
populateProjects(data.projects, "projects");
populateExperience(data.experience, "experience");
populateEducation(data.education, "education");
populateFooter(data.footer, "footer");
scroll();
