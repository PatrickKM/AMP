"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // the DOM is fully loaded
    console.log("Document ready!");

    // Wordpress API Fetch - nyheder.html
    fetch('http://hypno.koomunication.dk/wp-json/wp/v2/posts')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            appendPosts(json);
        });

    function appendPosts(posts) {
        for (let i = 0; i < posts.length; i++) {
            let post = posts[i];
            console.log(post);
            document.querySelector('#wpPosts').innerHTML += `
          <article class="wpItem">
            <h3>${post.title.rendered}</h3>
            <p>${post.content.rendered}</p>
          </article>
        `;
        }
    }
});

// Back to top - button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 790; // For Safari
    document.documentElement.scrollTop = 790; // For Chrome, Firefox, IE and Opera
};

// Google Maps API
// Initialize and add the map
function initMap() {
    // The location of Andrup Byvej 65, 6705 Esbjerg
    var uluru = {
        lat: 55.501307,
        lng: 8.534884
    };
    // The map, centered at Andrup Byvej 65, 6705 Esbjerg
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
    // The marker, positioned at Andrup Byvej 65, 6705 Esbjerg
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
