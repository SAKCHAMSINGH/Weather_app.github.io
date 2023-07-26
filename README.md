**Weather App README**
Welcome to the Weather App! This application allows you to access dynamic weather data from an API for various cities and countries. You can sign in to your account to save favorite cities and view weather data accordingly. The app also provides a dark theme for a comfortable viewing experience. Additionally, it includes a temperature converter to switch between Celsius and Fahrenheit units. The app uses Redux for efficient management of API data.

**Features--------------**
#Dynamic Weather Data: The Weather App fetches real-time weather data from an API, providing up-to-date information for various cities and countries.

#City & Country Wise Weather: You can search for weather data based on specific cities or countries, allowing you to view weather details for a particular location.

#Sign In/Sign Out: The app offers a sign-in functionality to personalize your experience and access your favorite cities. You can also sign out to protect your data.

#Favorite Cities: Marking cities as favorites enables you to access them quickly on the Favorites page, making it convenient to check the weather for frequently visited places.

#Dark Theme: The app supports a dark theme option, providing a more comfortable viewing experience in low-light conditions.

#Temperature Converter: You can easily switch between Celsius and Fahrenheit units to view the temperature in your preferred unit of measurement.

#Redux for API Data Management: The app utilizes Redux, a state management library, to efficiently handle API data, ensuring a smooth and responsive user experience.

#Installation
**To run the Weather App locally on your machine, follow these steps:**

#Clone the repository from GitHub:
git clone https://github.com/your-username/weather-app.git


#Navigate to the project directory:
cd weather-app
#Install the required dependencies using a package manager like npm or yarn:
npm install
or
yarn install
#Create a configuration file for the API key. Obtain an API key from a weather data provider (e.g., OpenWeatherMap) and create a file named .env in the root of the project. Add your API key to this file:
REACT_APP_API_KEY=your_api_key_here

Start the development server:
npm start
or
yarn start

The app should now be running on http://localhost:3000. Open your web browser and visit this address to access the Weather App.

**Usage**
Landing Page: The landing page displays a search bar where you can enter the name of a city or country to fetch weather data for that location.

Sign In/Sign Out: Click on the "Sign In" button to log in to your account. If you don't have an account, click "Sign Up" to create one. Once signed in, you can access your favorite cities.

Favorite Cities: To add a city to your favorites, click on the star icon next to the city name on the landing page. You can view your favorite cities on the Favorites page.

Dark Theme: To enable the dark theme, look for a toggle switch or an option in the app's settings. The dark theme provides a more pleasant viewing experience in low-light conditions.

Temperature Converter: The app displays temperature in Celsius by default. To view the temperature in Fahrenheit, click on the temperature value, and it will switch to Fahrenheit.

**Technologies Used**
React.js: Front-end JavaScript library for building user interfaces.
Redux: State management library for managing global app state.
Axios: HTTP client for making API requests.
react-router-dom: Library for handling routing in React applications.
styled-components: Library for styling React components using tagged template literals.
OpenWeatherMap API: Provides weather data for various locations.


**Credits**

The Weather App is developed by SAKCHAM PRATAP SINGH.
