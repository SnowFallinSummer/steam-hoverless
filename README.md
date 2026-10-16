# Steam Hoverless

Steam Hoverless suppresses Steam game hover-preview popups in the Library/main client and embedded Store views. It also hides selected recommendation modules (related items, the creator-home carousel, and curator blocks) where those elements are present.

The frontend uses Steam's popup manager to add CSS to popup documents; the WebKit preload handles hover UI in embedded browser views. Normal game selection and navigation are intended to remain available.

## Build and install

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

From this repository's root:

```sh
bun install
bun run build
```

Install the compiled plugin through Millennium and enable **Steam Hoverless** in plugin settings.

## AI assistance and maintenance

AI tools assisted with reverse-engineering, implementation, and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code; AI assistance is disclosed here for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
