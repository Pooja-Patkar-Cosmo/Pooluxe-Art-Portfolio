document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const caption = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".close-btn");

    function openLightbox(src, title) {
        fullImage.src = src;
        caption.textContent = title;
        modal.style.display = "flex";
    }

    // Connect the 3 Masterpiece cards (9:16 ratio)
    const masterpieceCards = document.querySelectorAll(".masterpiece-card");
    masterpieceCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            const title = card.getAttribute("data-title") || "Masterpiece";
            openLightbox(img.src, title);
        });
    });

    // Connect all 18 artwork cards across Light Art, Illustrations, & Figures
    const artCards = document.querySelectorAll(".art-card");
    artCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            const title = card.getAttribute("data-title") || "Artwork";
            openLightbox(img.src, title);
        });
    });

    // Modal close events
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });

    // Active navigation tab highlight on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // Call Discussion Form Submission
    const callForm = document.getElementById("callBookingForm");
    const callFeedback = document.getElementById("callFeedback");

    if (callForm) {
        callForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const clientName = document.getElementById("clientName").value;
            const style = document.getElementById("commissionType").value;

            callFeedback.className = "form-feedback success";
            callFeedback.textContent = `Thank you, ${clientName}! Your request for a ${style} call discussion has been received. I will reach out shortly to coordinate our call.`;
            callFeedback.style.display = "block";

            callForm.reset();
        });
    }
});