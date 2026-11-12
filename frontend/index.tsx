const MILLENNIUM_IS_CLIENT_MODULE = true;

// The actual behavior is one CSS rule. The small amount of TypeScript below
// only carries that rule into Steam's separately managed popup documents.
const STYLE_ID = "steam-hoverless2-style";
const HOVERLESS_CSS = `
[popover="manual"].HoverPositionOuter {
    display: none !important;
}
`;

function installPopupCSS() {
    const popupManager = (window as any).g_PopupManager;
    const popups = popupManager?.m_mapPopups;

    if (!popups || typeof popups.values !== "function") return;

    for (const popup of popups.values()) {
        const doc = popup?.m_popup?.document;
        if (!doc?.head || doc.getElementById(STYLE_ID)) continue;

        const style = doc.createElement("style");
        style.id = STYLE_ID;
        style.textContent = HOVERLESS_CSS;
        doc.head.appendChild(style);
    }
}

function main() {
    let intervalId: number | undefined;

    const start = () => {
        installPopupCSS();

        // Steam creates these popup documents dynamically. Re-check so the
        // rule is applied to previews opened after the plugin starts.
        if (intervalId === undefined) {
            intervalId = window.setInterval(installPopupCSS, 250);
        }
    };

    const cleanup = () => {
        if (intervalId !== undefined) {
            window.clearInterval(intervalId);
            intervalId = undefined;
        }
        document.removeEventListener("DOMContentLoaded", start);
        window.removeEventListener("pagehide", cleanup);
    };

    window.addEventListener("pagehide", cleanup, { once: true });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start, { once: true });
    } else {
        start();
    }
}

main();
