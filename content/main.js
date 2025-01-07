[...document.querySelectorAll('.BookActions')].forEach((container, index) => {
    const buttons = container.querySelectorAll('.BookActions__button');

    if (buttons.length > 1) {
        const lastButton = buttons[buttons.length - 2];

        lastButton.insertAdjacentElement('afterend', Button('Download eBook', '📖', 'https://annas-archive.org/search?q=', 'https://libgen.is/index.php?req='));
        lastButton.insertAdjacentElement('afterend', Button('Download Audiobook', '🎧', 'https://audiobookbay.lu/?s='));
    }
});
