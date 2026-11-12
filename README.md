# Steam Hoverless 2

An experimental CSS-first version of Steam Hoverless.

Steam's hover previews are rendered in popup documents managed by the Steam client. A global Quick CSS rule can affect the Library view but does not necessarily reach the separate popup documents used by Home and Store. SH2 therefore uses a minimal Millennium frontend module to place one CSS rule into each managed popup document.

## Behavior

- Hides the native game hover-preview popup.
- Leaves game tiles, selection, clicks, and navigation available.
- Does not hide recommendation sections or other Store content.
- Uses no backend and makes no network requests.

## CSS

```css
[popover="manual"].HoverPositionOuter {
    display: none !important;
}
```

## Implementation

The frontend checks Steam's `window.g_PopupManager.m_mapPopups` collection and adds the CSS rule to each popup document. It checks every 250 ms because Steam creates hover-preview windows dynamically. A unique style ID prevents duplicate injection.

This is not literally a standalone stylesheet: the small frontend bridge is required because Quick CSS in the main Steam document did not affect every popup context. The goal of this build is to keep the behavior CSS-driven while limiting JavaScript to delivering the rule to those popup documents.

## Test plan

1. Disable the original Steam Hoverless plugin.
2. Enable Steam Hoverless 2.
3. Test game hover previews in Library, Home, and Store.
4. Confirm game tiles remain selectable and clickable.
5. Compare the result with SH1 and the Quick CSS-only test.

SH2 is experimental and has not yet been verified in a live Steam client.

## Build

Requirements: Millennium and Bun.

```sh
bun install --frozen-lockfile
bun run build
```

## AI assistance and maintenance

AI tools assisted with implementation. The maintainer is responsible for reviewing, testing, and maintaining the code.

## License

MIT. See [LICENSE](LICENSE).
