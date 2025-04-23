import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
  } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import { useDispatch, useSelector } from "react-redux";
  import { icon } from "leaflet";

  
  const Map = ({ setDetailId }) => {
    const { flights } = useSelector((store) => store.flight);
    const { route } = useSelector((store) => store.detail);
    const dispatch = useDispatch();
    //* Custom icon oluşturduk.
    const planeIcon = icon({
      iconUrl: "/plane_icon.png",
      iconSize: [25, 25],
    });
    console.log(route);
    return (
      <MapContainer
        center={[38.922892, 35.411169]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "calc(100vh - 73px)", width: "100%" }} // ✅ Harita boyutu eklendi
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {flights.map((flight) => (
          <Marker
            key={flight.id}
            position={[flight.lat, flight.lng]}
            icon={planeIcon}
            rotationAngle={flight.deg - 45}
          >
            <Popup>
              <div className="popup">
                <span>Flight Code: {flight.code}</span>
                <button onClick={() => setDetailId(flight.id)}>Detail</button>
                {route.length > 0 && (
                  <button
                    onClick={() => {
                      dispatch(clearRoute());
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        {route && <Polyline positions={route} />}
      </MapContainer>
    );
  };
  
  export default Map;
  