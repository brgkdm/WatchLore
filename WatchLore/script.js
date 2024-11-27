const watches = [
    // Rolex Watches
    {
        name: "Datejust 31",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Datejust 31.png",
        url: "https://www.rolex.com/watches/datejust.html"
    },
    {
        name: "Oyster Perpetual 41",
        dialColor: "blue",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Oyster Perpetual 41.png",
        url: "https://www.rolex.com/watches/oyster-perpetual.html"
    },
    {
        name: "Rolex Explorer",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Rolex Explorer.png",
        url: "https://www.rolex.com/watches/explorer.html"
    },
    {
        name: "Rolex Submariner Date",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/rolex-submariner-date-mpa.png",
        url: "https://www.rolex.com/watches/submariner.html"
    },
    {
        name: "Yacht-Master 40",
        dialColor: "silver",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Yacht-Master 40.png",
        url: "https://www.rolex.com/watches/yacht-master.html"
    },
    {
        name: "Air-King",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Air-King.png",
        url: "https://www.rolex.com/watches/air-king.html"
    },
    {
        name: "Datejust 36",
        dialColor: "blue",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Datejust 36.png",
        url: "https://www.rolex.com/watches/datejust.html"
    },
    {
        name: "Datejust 41",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "rolex/Datejust 41.png",
        url: "https://www.rolex.com/watches/datejust.html"
    },
    // Omega Watches
    {
        name: "Omega Speedmaster",
        dialColor: "black",
        strapColor: "brown",
        techLevel: "analog",
        img: "omega/Omega-Speedmaster.png",
        url: "https://www.omegawatches.com/watches/speedmaster/"
    },
    {
        name: "Omega Speedmaster Dark Side Of The Moon",
        dialColor: "black",
        strapColor: "black",
        techLevel: "analog",
        img: "omega/speedmaster-dark-side-of-the-moon.png",
        url: "https://www.omegawatches.com/watch-omega-speedmaster-dark-side-of-the-moon-co-axial-chronometer-chronograph-44-25-mm-31192445101004"
    },
    {
        name: "Omega Seamaster Diver",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "omega/seamaster-diver.png",
        url: "https://www.omegawatches.com/watch-omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001"
    },
    {
        name: "Omega Seamaster Planet Ocean",
        dialColor: "blue",
        strapColor: "silver",
        techLevel: "analog",
        img: "omega/seamaster-planet-ocean.png",
        url: "https://www.omegawatches.com/watch-omega-seamaster-planet-ocean-6000m-co-axial-master-chronometer-45-5-mm-21530462103001"
    },
    {
        name: "Omega Constellation",
        dialColor: "white",
        strapColor: "silver",
        techLevel: "analog",
        img: "omega/constellation.png",
        url: "https://www.omegawatches.com/watch-omega-constellation-quartz-25-mm-13110256055001"
    },
    {
        name: "Omega De Ville Ladymatic",
        dialColor: "white",
        strapColor: "silver",
        techLevel: "analog",
        img: "omega/deville-ladymatic.png",
        url: "https://www.omegawatches.com/watch-omega-de-ville-ladymatic-co-axial-chronometer-34-mm-42520342055004"
    },
    // Tag Heuer Watches
    {
        name: "Tag Heuer Carrera",
        dialColor: "white",
        strapColor: "black",
        techLevel: "analog",
        img: "tagheuer/Tag-Heuer-Carrera.png",
        url: "https://www.tagheuer.com/us/en/watches/tag-heuer-carrera.html"
    },
    {
        name: "Tag Heuer Carrera Chronograph Sport",
        dialColor: "blue",
        strapColor: "silver",
        techLevel: "analog",
        img: "tagheuer/carrera-chronograph-sport.png",
        url: "https://www.tagheuer.com/int/en/collection-carrera/carrera-chronograph-sport.html"
    },
    {
        name: "Tag Heuer Aquaracer",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "tagheuer/aquaracer.png",
        url: "https://www.tagheuer.com/ca/en/collection-aquaracer/collection-aquaracer.html"
    },
    {
        name: "Tag Heuer Formula 1",
        dialColor: "black",
        strapColor: "silver",
        techLevel: "analog",
        img: "tagheuer/formula1.png",
        url: "https://www.tagheuer.com/ca/en/collection-formula-1/collection-formula1.html"
    },
    {
        name: "Tag Heuer Autavia",
        dialColor: "blue",
        strapColor: "silver",
        techLevel: "analog",
        img: "tagheuer/autavia.png",
        url: "https://www.tagheuer.com/ca/en/collection-autavia/collection-autavia.html"
    },

    // Seiko Watches
    {
        name: "Seiko 5 Automatic",
        dialColor: "blue",
        strapColor: "silver",
        techLevel: "automatic",
        img: "seiko/Seiko-5-Automatic.png",
        url: "https://www.seikowatches.com/us-en/products/seiko5/"
    },
    // Casio Watches
    {
        name: "Casio G-Shock",
        dialColor: "black",
        strapColor: "black",
        techLevel: "digital",
        img: "casio/Casio-G-Shock.png",
        url: "https://www.casio.com/products/watches/gshock/"
    },
    // Breitling Watches
    {
        name: "Breitling Navitimer",
        dialColor: "black",
        strapColor: "brown",
        techLevel: "analog",
        img: "breitling/Breitling-Navitimer.png",
        url: "https://www.breitling.com/us-en/watches/navitimer/"
    }
];


document.getElementById("watchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const usage = document.getElementById("usage").value;
    const dialColor = document.getElementById("dialColor").value;
    const strapColor = document.getElementById("strapColor").value;
    const techLevel = document.getElementById("techLevel").value;


    if (!dialColor || !strapColor || !techLevel) {
        alert("Please fill in all your preferences.");
        return;
    }

    // Show loading screen with sequential messages
    showLoadingScreen(() => {
        const preferences = { dialColor, strapColor, techLevel };
        const recommendedWatches = suggestWatches(preferences);
        displayResults(recommendedWatches);
    });
});

function showLoadingScreen(callback) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; 

    const loadingMessages = [
        "Special Recommendations Coming Up!",
        "Almost Done...",
        "And...Voila!!!"
    ];

    const loadingDiv = document.createElement("div");
    loadingDiv.className = "loading-screen";

    const messageParagraph = document.createElement("p");
    messageParagraph.className = "loading-message";
    const spinnerDiv = document.createElement("div");
    spinnerDiv.className = "spinner";

    loadingDiv.appendChild(messageParagraph);
    loadingDiv.appendChild(spinnerDiv);
    resultsDiv.appendChild(loadingDiv);

    let currentMessageIndex = 0;

    const intervalDuration = Math.floor((Math.random() < 0.5 ? 5000 : 7000) / loadingMessages.length);
    const interval = setInterval(() => {
        messageParagraph.textContent = loadingMessages[currentMessageIndex];
        currentMessageIndex++;

        if (currentMessageIndex === loadingMessages.length) {
            clearInterval(interval);

            setTimeout(() => {
                resultsDiv.innerHTML = ""; 
                callback(); 
            }, intervalDuration);
        }
    }, intervalDuration);
}

function suggestWatches(preferences) {
    return watches.filter(watch => {
        return watch.dialColor === preferences.dialColor && 
               watch.strapColor === preferences.strapColor && 
               watch.techLevel === preferences.techLevel;
    });
}


function displayResults(watches) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";


    const watchListDiv = document.createElement('div');
    watchListDiv.className = 'watch-list';

    if (watches.length === 0) {
        resultsDiv.innerHTML = `
            <p>Sorry, we couldn't find a watch that matches your preferences.</p>
            <p>However, you might like some of the following watches:</p>
        `;
        
        
        const similarWatches = suggestWatches({ dialColor: "black", strapColor: "silver", techLevel: "analog" });

        if (similarWatches.length > 0) {
            similarWatches.forEach(watch => {
                const watchDiv = document.createElement('div');
                watchDiv.className = 'watch-item'; 
                watchDiv.innerHTML = `
                    <h3>${watch.name}</h3>
                    <img src="${watch.img}" alt="${watch.name}" style="width: 100px;">
                    <p><a href="${watch.url}" target="_blank" class="more-info">More Information</a></p>
                `;
                watchListDiv.appendChild(watchDiv);
            });
        }
    } else {
        watches.forEach(watch => {
            const watchDiv = document.createElement('div');
            watchDiv.className = 'watch-item';
            watchDiv.innerHTML = `
                <h3>${watch.name}</h3>
                <img src="${watch.img}" alt="${watch.name}" style="width: 100px;">
                <p><a href="${watch.url}" target="_blank" class="more-info">More Information</a></p>
            `;
            watchListDiv.appendChild(watchDiv);
        });
    }

    resultsDiv.appendChild(watchListDiv);
}
