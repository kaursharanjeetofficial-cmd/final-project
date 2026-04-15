

getQuoteOfTheDay()


 async function getQuoteOfTheDay() {
  

 try {
    const response = await fetch("https://api.api-ninjas.com/v2/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "trCfVlcPqRGSHWSzSpupUHTOY2XJkIAzXBT0n7rm"
      }
    });

    const data = await response.json();

    const quote= data[0];

    document.getElementById("quoteText").innerText = `"${quote.quote}"`;
    document.getElementById("quoteAuthor").innerText = `— ${quote.author}`;

  } catch (error) {
    document.getElementById("quoteText").innerText =
      "Failed to load quote ";
    console.error(error);
  }
}