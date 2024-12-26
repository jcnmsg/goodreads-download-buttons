function Button() {
    const annasArchiveUrl = 'https://annas-archive.org/search?q=';
    const libgenUrl = 'https://libgen.li/index.php?req=';

    const button = document.createElement('div');
    button.classList.add('BookActions__button');

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'ButtonGroup ButtonGroup--block';
    buttonGroup.style.cssText = '';

    const buttonContainer1 = document.createElement('div');
    buttonContainer1.className = 'Button__container Button__container--block';
    buttonContainer1.style.cssText = '';

    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.className = 'Button Button--buy Button--medium Button--block dl-button';
    button1.setAttribute('role', 'link');
    button1.style.cssText = 'background: black; color: white; border: none; outline: none; box-shadow: none; user-select: none;';

    button1.addEventListener('click', () => openLink(annasArchiveUrl));

    const span1 = document.createElement('span');
    span1.className = 'Button__labelItem';
    span1.textContent = 'Download';
    button1.appendChild(span1);

    const span2 = document.createElement('span');
    span2.className = 'Button__labelItem';
    button1.appendChild(span2);

    buttonContainer1.appendChild(button1);

    const buttonContainer2 = document.createElement('div');
    buttonContainer2.className = 'Button__container';

    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.className = 'Button Button--buy Button--medium Button--rounded dl-button';
    button2.style.cssText = 'background: black; border: none; color: white; border-left: 1px solid white; outline: none; box-shadow: none; user-select: none;';

    button2.addEventListener('click', () => openLink(libgenUrl));

    const span3 = document.createElement('span');
    span3.className = 'Button__labelItem';
    span3.textContent = '💀';
    button2.appendChild(span3);

    buttonContainer2.appendChild(button2);

    buttonGroup.appendChild(buttonContainer1);
    buttonGroup.appendChild(buttonContainer2);

    button.appendChild(buttonGroup);

    return button;
}

function openLink(url) {
    const titleAndAuthor = `${document.querySelector('.Text__title1').textContent} ${document.querySelector('.ContributorLink__name').textContent}`;
    const finalUrl = url + titleAndAuthor;

    return window.open(finalUrl, '_blank');
}