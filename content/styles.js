const style = document.createElement('style');
style.innerHTML = `
            .dl-button:hover {
                background-color: #333 !important;
            }

            *:focus, 
            *:hover,
            *:active {
                outline: none !important;
                box-shadow: none !important;
            }
        `;

document.head.appendChild(style);