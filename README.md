# Steam Hoverless

Steam Hoverless stops game preview popups from appearing when you hover over games in the Steam Library and supported Store views.

It also hides selected recommendation sections where they appear, including related items, creator carousels, and curator blocks. Game selection and navigation are intended to keep working normally.

The frontend uses Steam's popup manager to add CSS to popup documents. A WebKit preload handles hover UI in embedded browser views, so the plugin covers more than one type of Steam view.

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
