const MILLENNIUM_IS_CLIENT_MODULE = true;

const pluginName = "steam_hoverless";

const STYLE_ID = "steam-hoverless-style";

function install() {
    const installCSS = () => {
        const popupManager = (window as any).g_PopupManager;
        if (!popupManager?.m_mapPopups) return false;

        const popup = [...popupManager.m_mapPopups.values()][0];
        const doc = popup?.m_popup?.document;

        if (!doc?.head) return false;

        if (!doc.getElementById(STYLE_ID)) {
            const style = doc.createElement("style");
            style.id = STYLE_ID;
            style.textContent = `
                [popover="manual"].HoverPositionOuter {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                }
            `;
            doc.head.appendChild(style);
        }

        return true;
    };

    if (!installCSS()) {
        const timer = window.setInterval(() => {
            if (installCSS()) {
                window.clearInterval(timer);
            }
        }, 250);
    }
}

function main() {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", install, { once: true });
    } else {
        install();
    }
}

main();
