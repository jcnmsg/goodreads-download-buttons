const containers = document.querySelectorAll('.BookActions');

if (containers.length > 0) {
    containers.forEach((container, index) => {
        const buttons = container.querySelectorAll('.BookActions__button');

        if (buttons.length > 0) {
            const lastButton = buttons[buttons.length - 2];

            lastButton.insertAdjacentElement('afterend', new Button());
        }
    });
} 