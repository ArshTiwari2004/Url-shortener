function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;

    // Simulate a simple shortening logic (replace with actual logic)
    var shortUrl = "http://short.url/" + Math.random().toString(36).substr(2, 5);

    document.getElementById("shortUrl").innerText = "Short URL: " + shortUrl;
}
