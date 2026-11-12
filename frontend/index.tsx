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
    let intervalId: number | undefined;

    const start = () => {
        installPopupCSS();

        // Steam creates hover popups dynamically, so keep checking for newly
        // created popup documents while this Steam UI page is active.
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
