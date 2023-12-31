"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
   {
        category: "Adventures", 
        id: "A101", 
        name: "Valley Hot Air Balloons", 
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
        location: "121 S. Main Street",
        price: 265.00 
   },
   {
        category: "Adventures", 
        id: "A102", 
        name: "River Runners: Float Trip", 
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.", 
        location: "145 FM 103",
        price: 65.00 
    },
    {
        category: "Adventures", 
        id: "A103", 
        name: "River Runners: Ride the Rapids", 
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!", 
        location: "145 FM 103",
        price: 145.00 
    },     
    {
        category: "Arts & Crafts", 
        id: "AC101", 
        name: "Painting with a Twist : Oils", 
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },
    {
        category: "Arts & Crafts", 
        id: "AC102", 
        name: "Painting with a Twist : Watercolor", 
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },   
    {
        category: "Museums", 
        id: "M101", 
        name: "Bravings Airship Museum", 
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.", 
        location: "101 Airfield Drive",
        price: 10.00
    },   
    {
        category: "Museums", 
        id: "M102", 
        name: "Forks and Spoons Museum", 
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!", 
        location: "1056 Lost Knives Court",
        price: 3.00
    },  
    {
        category: "Museums", 
        id: "M103", 
        name: "Steenges Computing Museum", 
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.", 
        location: "103 Technology Way",
        price: 0.00 
    },  
    {
        category: "Wine Tastings", 
        id: "WT-101", 
        name: "Hastings Winery Tours and Tastings", 
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.", 
        location: "10987 FM 1187",
        price: 12.00 
    },   
    {
        category: "Wine Tastings", 
        id: "WT-102", 
        name: "Lone Oak Winery", 
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.", 
        location: "121 Burleson Court",
        price: 0.00 
    },   
    {
        category: "Other", 
        id: "OTH101", 
        name: "Fire Department: Ride Along", 
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!", 
        location: "10 Redline Drive",
        price: 25.00 
    },   
    {
        category: "Other", 
        id: "OTH102", 
        name: "Homes For Our Neighbors", 
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!", 
        location: "Call (555) 555-5555",
        price: 0.00 
    }
];

window.onload = function () {
    // Initialize category dropdown
    initialDropDown();

    // Set the onchange event for the category dropdown when the page loads
    document.getElementById("categoryDropdown").onchange = function () {
        selectedCategory();
    };

    // Set the onchange event for the activity dropdown
    document.getElementById("activityDropdown").onchange = function () {
        const selectedActivityId = document.getElementById("activityDropdown").value;
        if (selectedActivityId !== "Select One") {
            displayActivityDetails(selectedActivityId);
        }
    };

    // Set the onsubmit event for the purchase form
    document.getElementById("purchaseForm").onsubmit = function (event) {
        event.preventDefault();

        const numTickets = document.getElementById("numTickets").value;
        const creditCard = document.getElementById("creditCard").value;
        const email = document.getElementById("email").value;

       

        // Display a purchase confirmation message
        const purchaseMessage = document.getElementById("purchaseMessage");
        purchaseMessage.style.display = "block"; // Display the message
        purchaseMessage.innerHTML = `
            Your credit card has been charged $${(
                selectedActivity.price * numTickets
            ).toFixed(2)} for ${numTickets} to ${selectedActivity.name}. 
            A confirmation email has been sent to ${email}.
        `;
    };
};

function initialDropDown() {
    const categoryDropdown = document.getElementById("categoryDropdown");

    // Adding a default "Select One" option for categories
    let defaultCategoryOption = new Option("Select One");
    categoryDropdown.appendChild(defaultCategoryOption);

    for (let i = 0; i < categories.length; i++) {
        let categoryOption = new Option(categories[i]);
        categoryDropdown.appendChild(categoryOption);
    }
}

function selectedCategory() {
    // Grabbing the selected category from the dropdown
    let category = document.getElementById("categoryDropdown").value;

    // Define the activity dropdown and activityDetails elements
    const activityDropdown = document.getElementById("activityDropdown");
    const activityDetails = document.getElementById("activity-details");

    // Adding a default "Select One" option for activities, Clear the activity dropdown
    activityDropdown.innerHTML = ""; 
    let defaultActivityOption = new Option("Select One");
    activityDropdown.appendChild(defaultActivityOption);

    // Clear content in the details div
    activityDetails.innerHTML = "";

    if (category !== "Select One") {
        // Populate the activity dropdown with activities matching the selected category
        for (let i = 0; i < activities.length; i++) {
            if (activities[i].category === category) {
                let activityOption = new Option(
                    activities[i].name,
                    activities[i].id
                );
                activityDropdown.appendChild(activityOption);
            }
        }

        // Clear and hide the purchase form when the category changes
        const purchaseForm = document.getElementById("purchaseForm");
        purchaseForm.style.display = "none";
    }
}

function displayActivityDetails(activityId) {
    const activityDetails = document.getElementById("activity-details");

    // Find the selected activity by its ID
    let selectedActivity = null;
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].id === activityId) {
            selectedActivity = activities[i];
            break;
        }
    }

    if (selectedActivity) {
        activityDetails.innerHTML = `
            <h2>${selectedActivity.name}</h2>
            <p>Description: ${selectedActivity.description}</p>
            <p>Location: ${selectedActivity.location}</p>
            <p>Price: $${selectedActivity.price.toFixed(2)}</p>`;

        const purchaseForm = document.getElementById("purchaseForm");

        if (selectedActivity.price > 0.00) {
            purchaseForm.style.display = "block"; // Display the form
        } else {
            purchaseForm.style.display = "none"; // Hide the form
        }
    }
}


