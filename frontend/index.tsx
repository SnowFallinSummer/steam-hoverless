const MILLENNIUM_IS_CLIENT_MODULE = true;

const STYLE_ID = "steam-hoverless-style";
const MAIN_STYLE_ID = "steam-hoverless-main-style";

function install() {
    const installMainCSS = () => {
        if (!document.head) return false;

        if (!document.getElementById(MAIN_STYLE_ID)) {
            const style = document.createElement("style");
            style.id = MAIN_STYLE_ID;
            style.textContent = `
                .related_items_ctn {
                    display: none !important;
                }

                [data-featuretarget="creatorhome-carousel"] {
                    display: none !important;
                }

                .steam_curators_block {
                    display: none !important;
                }
            `;
            document.head.appendChild(style);
        }

        return true;
    };

    const installPopupCSS = () => {
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
                        visibility: hidden !important;
                        opacity: 0 !important;
                        pointer-events: none !important;
                    }
                `;
                doc.head.appendChild(style);
            }

            installed = true;
        }

        return installed;
    };

    installMainCSS();
    installPopupCSS();

    window.setInterval(installPopupCSS, 250);
}

function main() {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", install, { once: true });
    } else {
        install();
    }
}

main();
