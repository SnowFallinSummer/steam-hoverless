const MILLENNIUM_IS_CLIENT_MODULE = true;

const STYLE_ID = "steam-hoverless-style";

function installPopupCSS() {
    const popupManager = (window as any).g_PopupManager;
    if (!popupManager?.m_mapPopups) return false;

    let installed = false;

    for (const popup of popupManager.m_mapPopups.values()) {
        const doc = popup?.m_popup?.document;
        if (!doc?.head) continue;

        if (!doc.getElementById(STYLE_ID)) {
            const style = doc.createElement("style");
            style.id = STYLE_ID;
            style.textContent = `
                [popover="manual"].HoverPositionOuter {
                    display: none !important;
                }
            `;
            doc.head.appendChild(style);
        }

        installed = true;
    }

    return installed;
}

function main() {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", installPopupCSS, { once: true });
    } else {
        installPopupCSS();
    }

    // Steam creates hover popups dynamically, so apply the rule to new popup documents.
    window.setInterval(installPopupCSS, 250);
}

main();
