"use strict";

let hikes = [
    {
       id: "H101", 
       name: "Birding Loop", 
       description: "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
       scenicImage: "birding_loop_1.png",
       trailMapImage: "birding_loop_2.png",
       length: "2.3 miles", 
       difficulty: 2 
    },
    {
        id: "H102", 
        name: "Deep Blue Pool Trail", 
        description: "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
        scenicImage: "deep_blue_1.png",
        trailMapImage: "deep_blue_2.png",
        length: "2 miles", 
        difficulty: 2 
     },
     {
        id: "H103", 
        name: "Overlook Trail", 
        description: "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
        scenicImage: "overlook_trail_1.png",
        trailMapImage: "overlook_trail_2.png",
        length: ".7 miles", 
        difficulty: 2 
     },
 ];

// Get references to HTML elements
const hikeDropdown = document.getElementById("hikeDropdown");
const hikeDetails = document.getElementById("hikeDetails");
const description = document.getElementById("description");
const length = document.getElementById("length");
const difficulty = document.getElementById("difficulty");
const scenicImage = document.getElementById("scenicImage");
const trailMapImage = document.getElementById("trailMapImage");

// Populate the dropdown with hike options
hikes.forEach((hike) => {
    const option = document.createElement("option");
    option.value = hike.id;
    option.textContent = hike.name;
    hikeDropdown.appendChild(option);
});

// Handle dropdown selection change
hikeDropdown.onchange = handleDropDown;

function handleDropDown() {
    const selectedHikeId = hikeDropdown.value;

    if (selectedHikeId === "Select One") {
        // Reset details and images when "Select One" is chosen
        hikeDetails.style.display = "none";
    } else {
        // Find the selected hike based on its ID using a for loop
        let selectedHike = null;
        for (let i = 0; i < hikes.length; i++) {
            if (hikes[i].id === selectedHikeId) {
                selectedHike = hikes[i];
                
            }
        }

        if (selectedHike) {
            // Display hike details and images
            hikeDetails.style.display = "block";
            description.textContent = selectedHike.description;
            length.textContent = selectedHike.length;
            difficulty.textContent = selectedHike.difficulty;

            // Update image sources
            scenicImage.src = selectedHike.scenicImage;
            trailMapImage.src = selectedHike.trailMapImage;
            scenicImage.alt = "Scenic View - " + selectedHike.name;
            trailMapImage.alt = "Trail Map - " + selectedHike.name;
        }
    }
}

// Initialize the page with "Select One" option
hikeDropdown.value = "Select One";

