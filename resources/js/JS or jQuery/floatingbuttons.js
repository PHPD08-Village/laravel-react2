export const initializeScrollTopButton = () => {
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
};

export const initializeFormSubmission = () => {
    const form = document.querySelector("form");
    const successAlert = document.getElementById("successAlert");
    const overlay = document.getElementById("overlay");
    const closeAlert = document.getElementById("closeAlert");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // 阻止預設提交行為
            if (overlay && successAlert) {
                overlay.classList.remove("hidden");
                successAlert.classList.remove("hidden");
            }
        });
    }

    if (closeAlert) {
        closeAlert.addEventListener("click", () => {
            if (overlay && successAlert) {
                overlay.classList.add("hidden");
                successAlert.classList.add("hidden");
            }
        });
    }
};
