function Button(text, icon, link, fallbackLink) {
    return DIV(
        DIV(
            DIV(
                BUTTON(
                    SPAN(text, 'Button__labelItem'),
                    SPAN(icon, '', 'position: absolute; right: 1.5rem;'),
                    link,
                    fallbackLink,
                    'Button Button--buy Button--medium Button--block dl-button',
                    'background: black; color: white; border: none; outline: none; box-shadow: none; user-select: none;'
                ),
                'Button__container Button__container--block',
            ),
            'ButtonGroup ButtonGroup--block',
        ),
        'BookActions__button'
    );
}

function openLink(url) {
    const titleAndAuthor = `${document.querySelector('.Text__title1').textContent} ${document.querySelector('.ContributorLink__name').textContent}`;
    const finalUrl = `${url}${titleAndAuthor.replace(/ /g, '+')}`.toLowerCase();

    return window.open(finalUrl, '_blank');
}

function SPAN(textContent, className, cssText) {
    const span = document.createElement('span');
    span.textContent = textContent;
    span.className = className;
    span.style.cssText = cssText;

    return span;
}

function BUTTON(child, icon, link, fallbackLink, className, cssText) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = className;
    btn.style.cssText = cssText;

    if (child) btn.appendChild(child);
    if (icon) btn.appendChild(icon);

    btn.addEventListener('click', () => openLink(link));

    if (fallbackLink) {
        btn.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            openLink(fallbackLink);
        });
    }

    return btn;
}

function DIV(children, className, cssText) {
    const div = document.createElement('div');
    div.className = className;
    div.style.cssText = cssText;
    div.appendChild(children);

    return div;
}