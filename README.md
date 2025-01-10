# **Weather App**
Quick weather app project I cooked up in around a day, that displays the current weather for today:

## Features:
- Uses the OpenWeatherAPI to fetch weather data for cities all around the world
- The background of the card changes depending on the weather displayed as well as the time of day for that location, taking into account whether
  or not it is night or day at the location by comparing the local time of the city to the timezone and sunset and sunrise times
- The card displays the following information:
  - The name of the city as well as the country it is located in
  - The date of the city formatted in a 'day of the week, month, day of the month, year' format
  - The time of the city formatted in AM and PM
  - An icon from react-icons to display the weather type
  - Some weather icons are specifically for night-time and others for day-time, while others are shared between them
  - The temperature in metric units (Celsius)
  - The feels like temperature in metric units (Celsius)
  - The rounded humidity percentage
  - The wind speed in metric (kmph)
  - The wind direction, which is displayed through a direction arrow that changes direction based on the wind speed angle

## Features I can implement later:
  -Metric to Imperial Toggle Switch: Switches units from metric to imperial (C to F, and kmph to mph)
  -Multi-day Weather Display: Display weather data for the entire weak
  -Highest and Lowest Temperature for Today: Displays the maximum and minimum temperatures for the day
  -The Temperature Throughout the Day: Displays the temperature based on the hour of the day, as well as a line graph to visualize the temperature change
  -Precipitation Percentage: Shows the precipitation percentage throughout the day
  -Weather Map: Shows a map of the cloud and temperature patterns of the city

*To test out the API, I utilized ThunderClient, but I could have easily used another program such as Postman or Insomnia instead

