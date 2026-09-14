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

        .related_items_ctn,
        [data-featuretarget="creatorhome-carousel"],
        .steam_curators_block {
            display: none !important;
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
