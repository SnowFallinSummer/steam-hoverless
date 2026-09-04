const MILLENNIUM_IS_CLIENT_MODULE = true;

const STYLE_ID = "steam-hoverless-style";

const CSS = `
    [popover="manual"].HoverPositionOuter {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }

    .hover.game_hover {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }
`;

function injectCSS(doc: Document): void {
    if (!doc.head) return;

    if (!doc.getElementById(STYLE_ID)) {
        const style = doc.createElement("style");
        style.id = STYLE_ID;
        style.textContent = CSS;
        doc.head.appendChild(style);
    }
}

function install(): void {
    injectCSS(document);

    const popupManager = (window as any).g_PopupManager;

    if (!popupManager?.m_mapPopups) return;

    for (const popup of popupManager.m_mapPopups.values()) {
        const doc = popup?.m_popup?.document;

        if (doc) {
            injectCSS(doc);
        }
    }
}

function main(): void {
    install();

    window.setInterval(install, 250);
}

main();