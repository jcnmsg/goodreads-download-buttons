const containers = document.querySelectorAll('.BookActions');

if (containers.length > 0) {
    containers.forEach((container, index) => {
        const buttons = container.querySelectorAll('.BookActions__button');

        if (buttons.length > 0) {
            const lastButton = buttons[buttons.length - 2];

            lastButton.insertAdjacentElement('afterend', Button('Download eBook', '📖', 'https://annas-archive.org/search?q='));
            lastButton.insertAdjacentElement('afterend', Button('Download Audiobook', '🎧', 'https://audiobookbay.lu/?s='));
        }
    });
} 