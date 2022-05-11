// just going to be placeholders for now
const handlePredictionPost = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
        //all the document selectors are placeholders atm
        const prediction = {
        selectedTicker: document.querySelector("button"),
        selectedPrice: document.querySelector("ticker-price"),
        selectedTime: document.querySelector("current-time"),
        predictedPrice: document.querySelector("prediction-price"),
        predictedTime: document.querySelector("prediction-time")
        };
        if (!prediction.predictedPrice || !prediction.predictedTime){
            alert("You must predict both a time AND a price to proceed");
            return;
        };

        const predictResponse = await fetch ("/api/prediction", {
            method: "POST",
            // body: prediction,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        if (!predictResponse.ok) {
            alert ("Prediction failed to log.  Please try again");
            return;
        }

        window.location.replace("/predictions")
    } catch (err) {
        console.log(err);
    }
}

// will change query selector to be what the prediction selector will be
document.getElementById("submitButton").addEventListener("click", handlePredictionPost);