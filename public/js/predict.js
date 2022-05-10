// just going to be placeholders for now
const handlePredictionPost = async (event) => {
    event.preventDefault();
    try {
        const selectedTicker = "AAPL";
        const selectedPrice = 840;
        const selectedTime = 123456789;
        const predictedPrice = 138; 
        const predictedTime = 23456781;
        
        if (!predictedPrice || !predictedTime){
            alert("You must predict both a time AND a price to proceed");
            return;
        };

        const predictResponse = await fetch ("/api/prediction/", {
            method: "POST",
            body: [selectedTicker.value, selectedPrice.value, selectedTime.value, predictedPrice.value, predictedTime.value],
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