[...document.querySelectorAll('.BookActions')].forEach((container, index) => {
    const buttons = container.querySelectorAll('.BookActions__button');

    if (buttons.length > 1) {
        const lastButton = buttons[buttons.length - 2];

        lastButton.insertAdjacentElement('afterend', Button('Download on Anna\'s Archive', '🅰️', 'https://annas-archive.li/search?q='));
        lastButton.insertAdjacentElement('afterend', Button('Download on LibGen', '🚢', 'https://libgen.li/index.php?req=');
        lastButton.insertAdjacentElement('afterend', Button('Download on ABB', '🎧', 'https://audiobookbay.lu/?s='));
    }
});
