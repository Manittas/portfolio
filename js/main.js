document.addEventListener("DOMContentLoaded", () => {
        loadExperience();
        loadFeaturedProjects();
        loadFeaturedVinyl();
    }
);

function loadExperience() {
    const container = document.getElementById("experience-container");

    if (!container) {
        return;
    }

    workExperiences.forEach(
        (experience) => {
            const card = createWorkCard(experience);
            container.appendChild(card);
        }
    );

    setupExperienceCards();
}

function loadFeaturedProjects() {
    const container = document.getElementById("featured-projects");

    if (!container) {
        return;
    }

    const featuredProjects = projects.slice(0, 3);

    featuredProjects.forEach(
        (project) => {
            const card = createProjectCard(project);
            container.appendChild(card);
        }
    );
}

function loadFeaturedVinyl() {
    const container = document.getElementById("featured-vinyl");

    if (!container) {
        return;
    }
    
    const featuredVinyl = vinyls.slice(0, 3);

    featuredVinyl.forEach(
        (vinyl) => {
            const card = createVinylCard(vinyl);
            container.appendChild(card);
        }
    );
}