'use strict';

(function() {
    var hellobarEl = document.createElement('div');
    hellobarEl.id = 'hellobar';

    var hellobarStyleEl = document.createElement('style');
    hellobarStyleEl.type = 'text/css';
    hellobarStyleEl.innerText = `
        #hellobar {
            background-color: #dc2036;
            height: auto;
            width: 100%;
        }

        #hellobar p {
            color: #fff;
            font-family: Montserrat;
            padding: 12px 15px;
            text-align: center;
        }

        #hellobar a {
            color: #fff;
            text-decoration: none;
        }

        #hellobar a:hover,
        #hellobar a:focus {
            color: #fff;
            text-decoration: underline;
        }
    `;

    hellobarEl.append(hellobarStyleEl);

    var hellobarParagraphEl = document.createElement('p');

    var hellobarLinkEl = document.createElement('a');
    hellobarLinkEl.href = 'https://showroom.hitecoutdoors.com';
    hellobarLinkEl.target = '_blank';
    hellobarLinkEl.rel = 'noopener noreferrer';
    hellobarLinkEl.innerText =
        'Our virtual showroom is here! Click here to check it out ›';

    hellobarParagraphEl.append(hellobarLinkEl);

    hellobarEl.append(hellobarParagraphEl);

    document.body.prepend(hellobarEl);
})();
