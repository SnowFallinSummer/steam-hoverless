# Steam Hoverless

Steam Hoverless suppresses Steam's native game hover-preview popup in Steam client views that use the client popup manager.

It is deliberately narrow: it hides the hover-preview surface, not the game tile or the surrounding page.

## Behavior

- Hides the native game hover-preview popup when Steam creates it.
- Leaves game selection, clicks, navigation, and the underlying game tiles available.
- Does not hide recommendation sections, creator carousels, curator blocks, or other Store content.
- Does not make network requests or depend on an external browser extension.

The effect applies in Steam views that use the shared popup manager for game hover previews (including the Library, Home, and Store contexts where that popup is used). Steam controls which views create that popup.

## Implementation

The plugin runs as a Millennium client-side frontend module (`frontend/index.tsx`).

1. It accesses Steam's client popup manager through `window.g_PopupManager`.
2. It checks the manager's popup collection for popup documents that have been created.
3. It injects one narrowly scoped stylesheet rule targeting Steam's `[popover="manual"].HoverPositionOuter` preview element.
4. It checks periodically because Steam creates and destroys hover popups dynamically. A style ID prevents duplicate injection into the same popup document.

This is intentionally implemented in the Steam client frontend rather than as a WebKit Store-page content script: the popup manager is a Steam-client runtime object, and the plugin needs to reach the documents owned by those managed popup windows.

## Download and install

**[Open GitHub Releases](https://github.com/SnowFallinSummer/steam-hoverless/releases)** for permanent downloads. Each published version includes its installable `.star` package. No release has been published yet; the first package will appear after the initial version tag is created.

You need [Millennium](https://github.com/SteamClientHomebrew/Millennium) installed first. For a manual install:

1. Fully exit Steam.
2. Once a version is published, download its `.star` file from the Releases page above.
3. Put the `.star` file in Millennium's plugin directory:
   - **Windows:** `%STEAM%\millennium\plugin`
   - **Linux:** `~/.local/share/millennium/plugins`
4. Start Steam, open **Steam → Millennium → Plugins**, enable the plugin, save changes, and restart Steam if prompted.

See Millennium's [official plugin installation guide](https://docs.steambrew.app/users/guides/installing-addons) and [plugin directory reference](https://docs.steambrew.app/users/getting-started/structure) for current instructions.

## Build

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

```sh
bun install --frozen-lockfile
bun run build
```

The GitHub Actions workflow builds the plugin, verifies the generated `.star` package with Starlight, and publishes it as a downloadable GitHub Release when a version tag is pushed.

## AI assistance and maintenance

AI tools assisted with reverse-engineering, implementation, and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code. This disclosure is included for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
