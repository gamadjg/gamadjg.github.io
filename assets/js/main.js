import { default as data } from "./db.js";

import { populateAbout } from "./populateAbout.js";
import { populateSkills } from "./populateSkills.js";

// populateAbout(data.projects, "projects");
populateSkills(data.skills, "skills");
populateAbout(data.bio.about, "about");
