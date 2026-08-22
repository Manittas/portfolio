function createProjectCard(project) {
    const card = document.createElement("article");
    card.classList.add("project-card");

    card.innerHTML = `
        <div class="project-card-top">
            <span class="project-number">
                PROJECT
            </span>
            <span class="project-arrow">
                ↗
            </span>
        </div>

        <div class="project-card-content">
            <h3>
                ${project.title}
            </h3>
            <p>
                ${project.description}
            </p>
        </div>

        <div class="project-technologies">
            ${project.technologies
                .map(technology =>`<span>${technology}</span>`)
                .join("")}
        </div>
    `;

    card.addEventListener(
        "click",
        () => {
            window.open(project.github, "_blank","noopener, noreferrer");
        }
    );

    return card;
}