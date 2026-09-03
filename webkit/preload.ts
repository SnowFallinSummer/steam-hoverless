const hideHover = () => {
    const hover = document.getElementById("global_hover");

    if (!(hover instanceof HTMLElement)) return;

    hover.style.setProperty("display", "none", "important");
    hover.style.setProperty("visibility", "hidden", "important");
    hover.style.setProperty("opacity", "0", "important");
    hover.style.setProperty("pointer-events", "none", "important");
};

const install = () => {
    hideHover();

    const observer = new MutationObserver(hideHover);

    observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["style", "class"],
    });
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
} else {
    install();
}

