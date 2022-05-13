const handlePredictionHistory = async (event) => {
    event.preventDefault();
    try {
        const history = {
            selectedTicker: req.body.ticker,
            selectedPrice: req.body.start_price,
            selectedTime: req.body.start_time,
            predictedTime: req.body.predicted_time,
            predictedPrice: req.body.predicted_price
        }
        const historyResponse = await fetch("/api/prediction", {
            method: "GET",
            body: history,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        if (!historyResponse.ok) {
            alert ("Failed to load prediction history.  Please try again");
        }
        window.location.replace("/portfolio");
    } catch (err) {
        console.log(err);
    }

    //want to grab data from the GET
    // display the most recent three requests on the page
}

document.addEventListener("onload", handlePredictionHistory);