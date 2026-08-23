function createWorkCard(experience) {
    const card = document.createElement("article");
    card.classList.add("experience-item");

    const endDate = experience.endDate;
    const description = experience.description.map(
        item => `
            <li>
                ${item}
            </li>`
        ).join("");

    card.innerHTML = `
        <div class="experience-marker">
            <div class="experience-dot">
            </div>
        </div>

        <div class="experience-card">
            <div class="experience-card-header">
                <div>
                    <h3>
                        ${experience.role}
                    </h3>
                    <div class="experience-company-date">
                        <h4>
                            ${experience.company}
                        </h4>
                        <h4>
                            ·
                        </h4>
                        <span class="experience-date">
                            ${experience.startDate} – ${endDate}
                        </span>
                    </div>
                </div>

                <button class="experience-toggle"
                    aria-label="Expand experience"
                    type="button">
                    +
                </button>
            </div>

            <div class="experience-description">
                <ul>
                    ${description}
                </ul>
            </div>
        </div>
    `;

    return card;
}

function setupExperienceCards() {
    const cards = document.querySelectorAll(".experience-card");

    cards.forEach(card => {
        const button = card.querySelector(".experience-toggle");

        card.addEventListener(
            "click",
            event => {
                // Don't let the button trigger another click handler.
                if (event.target === button) {
                    toggleExperienceCard(card);
                    return;
                }

                toggleExperienceCard(card);
            }
        );
    });
}

function toggleExperienceCard(selectedCard) {
    const cards = document.querySelectorAll(".experience-card");
    const isOpen = selectedCard.classList.contains("open");

    cards.forEach(card => {
        card.classList.remove("open");

        const button = card.querySelector(".experience-toggle");
        button.textContent = "+";
        button.setAttribute("aria-label", "Expand experience");
    });

    // if the card was not previously open, opens it
    if (!isOpen) {
        selectedCard.classList.add("open");

        const button = selectedCard.querySelector(".experience-toggle");
        button.textContent = "−";
        button.setAttribute("aria-label", "Collapse experience");
    }
}