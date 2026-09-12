function hideHovers(): void {
    if (!document.head) return;

    const styleId = "steam-hoverless-webview";

    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
        .hover.game_hover,
        ._14fzjUJx__1_iVvRQOFvNZ {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `;

    document.head.appendChild(style);
}

export default async function main() {
    hideHovers();

    const observer = new MutationObserver(() => {
        hideHovers();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}
