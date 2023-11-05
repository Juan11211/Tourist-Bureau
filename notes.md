document.addEventListener("DOMContentLoaded", function() {
//     // Get references to the dropdowns and details container
//     const categoryDropdown = document.getElementById("category-dropdown");
//     const activityDropdown = document.getElementById("activity-dropdown");
//     const activityDetails = document.getElementById("activity-details");

//     // Initialize the category dropdown
//     for (let category of categories) {
//         const option = document.createElement("option");
//         option.text = category;
//         categoryDropdown.add(option);
//     }

//     // Function to update the activity dropdown based on selected category
//     categoryDropdown.addEventListener("change", function() {
//         activityDropdown.innerHTML = ''; // Clear existing options
//         const selectedCategory = categoryDropdown.value;
//         const selectOneOption = document.createElement("option");
//         selectOneOption.text = "Select one";
//         activityDropdown.add(selectOneOption);

//         if (selectedCategory === "Select one") return;

//         const filteredActivities = activities.filter(activity => activity.category === selectedCategory);
//         for (let activity of filteredActivities) {
//             const option = document.createElement("option");
//             option.value = activity.id;
//             option.text = activity.name;
//             activityDropdown.add(option);
//         }
//     });

//     // Function to display activity details when an activity is selected
//     activityDropdown.addEventListener("change", function() {
//         activityDetails.innerHTML = '';
//         const selectedActivityId = activityDropdown.value;
//         if (selectedActivityId === "Select one") return;

//         const selectedActivity = activities.find(activity => activity.id === selectedActivityId);
//         if (selectedActivity) {
//             const detailsDiv = document.createElement("div");
//             detailsDiv.innerHTML = `
//                 <h2>${selectedActivity.name}</h2>
//                 <p>${selectedActivity.description}</p>
//                 <p><strong>Location:</strong> ${selectedActivity.location}</p>
//                 <p><strong>Price:</strong> $${selectedActivity.price.toFixed(2)}</p>
//             `;

//             if (selectedActivity.price > 0) {
//                 // Add e-ticket form
//                 detailsDiv.innerHTML += `
//                     <form>
//                         <div class="form-group">
//                             <label for="ticket-quantity">Number of Tickets</label>
//                             <input type="number" class="form-control" id="ticket-quantity" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="credit-card">Credit Card Number</label>
//                             <input type="text" class="form-control" id="credit-card" >
//                         </div>
//                         <div class="form-group">
//                             <label for="email">Email Address</label>
//                             <input type="email" class="form-control" id="email" >
//                         </div>
//                         <button type="submit" class="btn btn-primary">Purchase</button>
//                         <button type="reset" class="btn btn-secondary">Reset</button>
//                     </form>
//                 `;
//             }

//             activityDetails.appendChild(detailsDiv);
//         }
//     });
// });


   <div class="container mt-5">
        <h1>Tourist Activities</h1>
        <div class="form-group">
            <label for="category-dropdown">Select Activity Category:</label>
            <select class="form-control" id="category-dropdown">
                <option>Select one</option>
            </select>
        </div>


        <div class="form-group">
            <label for="activity-dropdown">Select an Activity:</label>
            <select class="form-control" id="activity-dropdown">
                <option>Select one</option>
            </select>
        </div>
        <div id="activity-details"></div>
    </div>
    <div id="">

    </div>