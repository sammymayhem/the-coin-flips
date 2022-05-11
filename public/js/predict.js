// just going to be placeholders for now
const handlePredictionPost = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
        //all the document selectors are placeholders atm
        const prediction = {
        selectedTicker: document.getElementById("ticker"),
        // selectedPrice: document.querySelector("ticker-price"),
        // selectedTime: document.querySelector("current-time"),
        // predictedPrice: document.querySelector("prediction-price"),
        // predictedTime: document.querySelector("prediction-time")
        };
        console.log(prediction.selectedTicker.textContent);
        // if (!prediction.predictedPrice || !prediction.predictedTime){
        //     alert("You must predict both a time AND a price to proceed");
        //     return;
        // };

        // const predictResponse = await fetch ("/api/prediction", {
        //     method: "POST",
        //     body: prediction,
        //     headers: {
        //         "Content-Type": "application/json; charset=UTF-8"
        //     }
        // });
        // if (!predictResponse.ok) {
        //     alert ("Prediction failed to log.  Please try again");
        //     return;
        // }

        // window.location.replace("/predictions")
    } catch (err) {
        console.log(err);
    }
}
const searchTicker = async () => {
    try {
        const tickerText = document.getElementById("ticker-text").value;
        const response = await fetch("/api/prediction/ticker", {
            method: "POST",
            body: JSON.stringify({tickerText}),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
    } catch (err) {
        console.log(err);
    }

}
// will change query selector to be what the prediction selector will be
document.getElementById("submitButton").addEventListener("click", handlePredictionPost);
document.getElementById("ticker-search").addEventListener("click", searchTicker);
