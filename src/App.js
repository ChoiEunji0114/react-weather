import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './containers/header';

import ProgressBar from './containers/progress_bar';
import CityBanner from './containers/city_banner';

import SearchBar from './containers/search_bar';

import ErrorMessage from './containers/error_message';
import WeatherList from './containers/weather_list';
import WeatherDetail from './containers/weather_detail';

import AqiMap from './containers/aqi_map';
import ForecastWeather from './containers/forecast_weather';

import InfoTable from './containers/info_table';
import Footer from './containers/footer';

class App extends Component {
  render() {
    return (
      <div className='App container mt-3'>
        <Header />
        <SearchBar />
        <ErrorMessage />
        <CityBanner />
        <ProgressBar />
        <WeatherDetail />
        <AqiMap />
        <ForecastWeather />
        <WeatherList />
        <InfoTable />
        <Footer/>
      </div>
    );
  }
}

export default App;
