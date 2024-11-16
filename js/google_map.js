function initMap() {
    const mapCenter = { lat: 54.6638, lng: -2.7524 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: mapCenter,
        zoom: 14,
    });

    const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: "My location",
    });
}
