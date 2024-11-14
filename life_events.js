// Initialize the map
var map = L.map('map').setView([23.6850, 90.3563], 6); // Centered on Bangladesh

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Array of life events with enhanced details and default markers
var events = [
    {
        coords: [22.864331868391133, 91.09753942739412], // Noakhali Zilla School
        title: "High School at Noakhali Zilla School",
        description: "Completed my secondary education at Noakhali Zilla School.",
        date: "Year of High School Graduation"
    },
    {
        coords: [22.8311, 91.1062], // Noakhali Government College
        title: "Higher Secondary at Noakhali Government College",
        description: "Completed my higher secondary education here.",
        date: "Year of Higher Secondary Graduation"
    },
    {
        coords: [24.919968763340655, 91.83282557826064], // Shahjalal University of Science and Technology (SUST)
        title: "Shahjalal University of Science and Technology (SUST)",
        description: "Completed BSc and MS in Geography and Environment.",
        date: "2015-2022",
        link: "https://www.sust.edu"
    },
    {
        coords: [22.072915129467976, 91.00251451874625], // Nijhum Dwip (BSc Thesis)
        title: "BSc Thesis on Nijhum Dwip",
        description: "Thesis focused on shoreline dynamics and socio-economic impacts in Nijhum Dwip.",
        date: "2019",
        link: "https://doi.org/10.1007/s11852-023-01000-7" // Example link to publication
    },
    {
        coords: [22.7811, 90.3495], // Meghna Estuary (MS Thesis)
        title: "MS Thesis on Meghna Estuary",
        description: "Studied sedimentation risk in the Meghna estuary as part of my MS thesis.",
        date: "2022",
        link: "https://doi.org/10.1007/s12524-024-02037-3" // New MS thesis publication link
    },
    {
        coords: [24.920007427478613, 91.8316944004021], // SUST Library Building (Research Assistant role)
        title: "Research Assistant at SUST Library Building",
        description: "Worked as a Research Assistant on coastal morphodynamics projects.",
        date: "2019-2020"
    },
    {
        coords: [21.8226, 90.1207], // Kuakata Beach
        title: "Research Project on Kuakata Beach",
        description: "Analyzed disaster impacts in the Kuakata coastal region.",
        date: "2019"
    },
    {
        coords: [21.4280, 91.9722], // Cox's Bazar Beach
        title: "Research Project on Cox's Bazar Beach",
        description: "Analyzed coastal dynamics of Cox's Bazar beach.",
        date: "2019"
    },
    {
        coords: [49.5656, 10.9707], // Spekter GmbH, Germany
        title: "Senior GIS Analyst at Spekter GmbH, Germany",
        description: "Conducted flood risk analysis and modeled heavy rain-induced flash floods.",
        date: "2020 - Ongoing",
        link: "https://www.spekter.de"
    }
];

// Add markers with interactive popups
events.forEach(function(event) {
    L.marker(event.coords).addTo(map)
        .bindPopup(`
            <strong>${event.title}</strong><br>
            <em>${event.date}</em><br>
            ${event.description}<br>
            ${event.link ? `<a href="${event.link}" target="_blank">Learn more</a>` : ""}
        `);
});
