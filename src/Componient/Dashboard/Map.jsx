import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function ATMMap() {
  useEffect(() => {
    const map = L.map("map").setView([37.0902, -95.7129], 4); // USA center

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          map.setView([lat, lng], 14);

          L.marker([lat, lng])
            .addTo(map)
            .bindPopup("You are here")
            .openPopup();

          // Fetch nearby ATMs
          fetch(
            `https://overpass-api.de/api/interpreter?data=[out:json];
            node["amenity"="atm"](around:3000,${lat},${lng});
            out;`
          )
            .then((res) => res.json())
            .then((data) => {
              data.elements.forEach((atm) => {
                L.marker([atm.lat, atm.lon])
                  .addTo(map)
                  .bindPopup("ATM");
              });
            });
        },
        () => {
          alert("Location access denied");
        }
      );
    }

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    />
  );
}
