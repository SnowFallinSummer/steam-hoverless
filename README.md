# Steam Hoverless

Steam Hoverless hides Steam's game hover-preview popups, preventing the large preview card from appearing when hovering over games in Steam views that use the client popup manager.

## How it works

The plugin adds one CSS rule to Steam-managed popup documents to hide the `.HoverPositionOuter` preview element. It does not alter recommendation sections, creator carousels, curator blocks, Store page layout, normal game selection, or navigation.

## Build and install

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

From this repository's root:

```sh
bun install
bun run build
```

Enable **Steam Hoverless** in Millennium's plugin settings.

## AI assistance and maintenance

AI tools helped with reverse-engineering, implementation, and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code. This disclosure is included for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
