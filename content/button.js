function Button() {
    return DIV(
        DIV(
            [DIV(
                BUTTON(
                    SPAN('Download', 'Button__labelItem'),
                    'https://annas-archive.org/search?q=',
                    'Button Button--buy Button--medium Button--block dl-button',
                    'background: black; color: white; border: none; outline: none; box-shadow: none; user-select: none;'
                ),
                'Button__container Button__container--block',
            ), 
            DIV(
                BUTTON(
                    SPAN('💀', 'Button__labelItem'),
                    'https://libgen.li/index.php?req=',
                    'Button Button--buy Button--medium Button--rounded dl-button',
                    'background: black; border: none; color: white; border-left: 1px solid white; outline: none; box-shadow: none; user-select: none;'
                ),
                'Button__container',
            )],
            'ButtonGroup ButtonGroup--block',
        ),
        'BookActions__button'
    );
}

function openLink(url) {
    const titleAndAuthor = `${document.querySelector('.Text__title1').textContent} ${document.querySelector('.ContributorLink__name').textContent}`;
    const finalUrl = `${url}${encodeURIComponent(titleAndAuthor)}`;

    return window.open(finalUrl, '_blank');
}

function SPAN(textContent, className) {
    const span = document.createElement('span');
    span.textContent = textContent;
    span.className = className;

    return span;
}

function BUTTON(child, link, className, cssText) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = className;
    btn.style.cssText = cssText;

    btn.appendChild(child);

    btn.addEventListener('click', () => openLink(link));

    return btn;
}

function DIV(children, className, cssText) {
    const div = document.createElement('div');
    div.className = className;
    div.style.cssText = cssText;

    if (Array.isArray(children)) {
        children.forEach(child => div.appendChild(child));
    }
    else {
        div.appendChild(children);
    }

    return div;
}