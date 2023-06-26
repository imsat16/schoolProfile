import { useEffect, useState } from 'react';

const GeoLocation: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [data, setData]:any = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  
  useEffect(()=>{
    // const url = `https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    fetch(url).then(
      res => res.json()
    ).then((data) => {
      setData(data.address)
      console.log(data)
    })
  },[longitude, latitude])

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          {data?.village} <br />
          {data?.country} <br />
          {data?.state} <br />
          {data?.postcode} <br />
          {data?.subdisctrict}
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GeoLocation;
