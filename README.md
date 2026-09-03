# Steam Hoverless

A Millennium plugin that disables Steam's game hover-preview popups.

## What it does

Steam Hoverless removes Steam's game hover-preview popup when hovering over games in:

- Steam Library
- Steam Home
- Steam Store

It does not disable normal game selection, navigation, or other Steam UI.

## How it works

Steam renders the hover preview as a manually-managed popup using the [popover="manual"].HoverPositionOuter element.

Steam Hoverless injects a small CSS rule into Steam's popup document that hides this element.

The plugin waits for Steam's popup manager to become available, then installs the stylesheet once.

## Installation

Install the compiled .star plugin through Millennium.

## Development

Requires Bun.

    bun install
    bun run build

## Credits

Created by SnipCheddaBombs.

Developed and reverse-engineered with assistance from ChatGPT (GPT-5.6 Luna).

## License

MIT
