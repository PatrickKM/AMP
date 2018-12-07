"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // the DOM is fully loaded
    console.log("Document ready!");

    // Wordpress API Fetch - gratis.html
    fetch('http://hypno.koomunication.dk/wp-json/wp/v2/media')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            appendPages(json);
        });

    function appendPages(pages) {
        for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            console.log(page);
            document.querySelector('#wpMaterialer').innerHTML += `
          <article">
            <h3>${page.title.rendered}</h3>
            <p>${page.description.rendered}</p>
          </article>
        `;
        }
    }
});
