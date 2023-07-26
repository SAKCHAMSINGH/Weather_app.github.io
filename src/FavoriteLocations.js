
import React, { useEffect, useState } from "react";
import axios from "axios";

function FavoriteLocations({ favorites }) {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    const fetchDataForFavorites = async () => {
      const promises = favorites.map((city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=544a71c74bf25a90854eba8e4e3611e1`;
        return axios.get(url);
      });

      try {
        const responses = await Promise.all(promises);
        const data = responses.map((res) => res.data);
        setFavoriteData(data);
      } catch (error) {
        console.error("Error fetching weather data for favorites:", error);
        setFavoriteData([]);
      }
    };

    if (favorites.length > 0) {
      fetchDataForFavorites();
    } else {
      setFavoriteData([]);
    }
  }, [favorites]);

  return (
    <div className="favorite-locations">
      {favoriteData.length > 0 &&
        favoriteData.map((cityData) => (
          <div key={cityData.name}>
            <p>{cityData.name}</p>
            <p>
              {cityData.main ? cityData.main.temp.toFixed() : "-"}°C
            </p>
          </div>
        ))}
    </div>
  );
}

export default FavoriteLocations;
