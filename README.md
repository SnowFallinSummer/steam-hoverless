# Steam Hoverless

Want to browse your Steam Library without a game preview popping up every time you hover over something? Steam Hoverless gets rid of those hover previews in the Library and supported Store views.

It also hides a few recommendation sections that can clutter the page, including related items, creator carousels, and curator blocks. Game selection and navigation are intended to keep working normally.

The frontend uses Steam's popup manager to add CSS to popup documents. A WebKit preload handles hover UI in embedded browser views, so the plugin works across more than one type of Steam view.

## Build and install

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

From this repository's root:

```sh
bun install
bun run build
```

Install the compiled plugin through Millennium and enable **Steam Hoverless** in plugin settings.

## AI assistance and maintenance

AI tools helped with reverse-engineering, implementation, and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code. This disclosure is included for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
