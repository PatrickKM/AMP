"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // the DOM is fully loaded
    console.log("Document ready!");

    // Wordpress API Fetch - gratis lydoptagelse.html
    fetch('http://hypno.koomunication.dk/wp-json/wp/v2/pages')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            appendPages(json);
        });

    function appendPages(pages) {
        let page = pages[0];
        console.log(page);
        document.querySelector('#wpVideo').innerHTML += `
          <article class="wpVideoItem">
            <h3>${page.title.rendered}</h3>
            <p>${page.content.rendered}</p>
          </article>
        `;
    }
});