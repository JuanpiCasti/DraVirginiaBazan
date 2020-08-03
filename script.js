function initMap() {
    uluru = {lat:-34.732431, lng:-58.525164};
    let map = new google.maps.Map(
        document.querySelector(".ubicacion__mapa"), {zoom: 16, center: uluru}
    );
    let marker = new google.maps.Marker({position: uluru, map: map});
};