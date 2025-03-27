# CardCluster - Trello Power-Up

CardCluster is a Trello Power-Up designed to streamline ticket management for teams and individuals. Whether you're handling multiple tickets at once or organizing a large project, CardCluster makes it easy to take bulk actions and group related cards into manageable clusters.

## Features

- **Bulk Actions**: Select multiple cards and move them to a list, add labels, or archive them in one go.
- **Project Grouping**: Tag cards as part of a project and view or manage them as a cohesive unit—perfect for large-scale tasks.

## Installation

1. **Host the Files**:
   - Clone this repository or create a new project on a hosting platform like [Glitch](https://glitch.com).
   - Upload `index.html` and `script.js` to your hosting environment.
   - Ensure the site is publicly accessible (e.g., `https://your-project.glitch.me`).

2. **Register with Trello**:
   - Visit [Trello Power-Up Admin](https://trello.com/power-ups/admin).
   - Create a new Power-Up and provide the hosted URL (e.g., `https://your-project.glitch.me/index.html`).
   - Enable the `board-buttons` capability and save to get your API key.

3. **Add to Trello**:
   - On your Trello board, go to the "Power-Ups" menu.
   - Search for "CardCluster" (or add it manually via your custom Power-Up URL).
   - Enable it and start using the "CardCluster" button on your board.

## Usage

1. **Bulk Actions**:
   - Click the "CardCluster" button on your board.
   - Select "Select Cards" and pick the cards you want to manage.
   - Choose an action (Move, Label, Archive), configure it, and hit "Apply."

2. **Project Grouping**:
   - Enter a project name and click "Group Cards as Project."
   - Select cards to tag them with the project name.
   - Use "View Project Cards" to see and manage all cards in that project.

## Requirements

- A Trello account with access to Power-Ups.
- A publicly hosted URL for the Power-Up files.

## Development

- **Tech Stack**: HTML, JavaScript, CSS, Trello Client.js API.
- **Customization**: Edit `index.html` for UI changes or `script.js` for new features.
- **Hosting**: Use Glitch, GitHub Pages, or any static file host.

## Limitations

- Bulk actions may be subject to Trello API rate limits for very large boards.
- Project grouping uses Trello’s custom data storage, which persists per card.

## Contributing

Feel free to fork this repo, submit pull requests, or open issues for bugs and feature requests!

## License

MIT License - Free to use, modify, and distribute.

## Credits

Built with ❤️ by [Your Name] with assistance from xAI’s Grok.
