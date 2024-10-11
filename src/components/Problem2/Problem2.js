import React, { useState } from 'react';
import { ListPanel } from './ListPanel';
import './Problem2.css';

// Sample data structure for continents, countries, and states
const data = [
    {
      name: 'Africa',
      children: [
        {
          name: 'Nigeria',
          children: ['Lagos', 'Abuja', 'Kano', 'Ibadan', 'Kaduna'],
        },
        {
          name: 'South Africa',
          children: ['Cape Town', 'Durban', 'Johannesburg', 'Pretoria', 'Bloemfontein'],
        },
        {
          name: 'Egypt',
          children: ['Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan'],
        },
        {
          name: 'Kenya',
          children: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
        },
        {
          name: 'Ghana',
          children: ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Tema'],
        },
      ],
    },
    {
      name: 'North America',
      children: [
        {
          name: 'United States',
          children: ['California', 'Texas', 'New York', 'Florida', 'Illinois'],
        },
        {
          name: 'Canada',
          children: ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba'],
        },
        {
          name: 'Mexico',
          children: ['Mexico City', 'Guadalajara', 'Monterrey', 'Tijuana', 'Cancun'],
        },
        {
          name: 'Cuba',
          children: ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín', 'Guantánamo'],
        },
        {
          name: 'Jamaica',
          children: ['Kingston', 'Montego Bay', 'Spanish Town', 'Portmore', 'Ocho Rios'],
        },
      ],
    },
    {
      name: 'Europe',
      children: [
        {
          name: 'Germany',
          children: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
        },
        {
          name: 'France',
          children: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
        },
        {
          name: 'Italy',
          children: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'],
        },
        {
          name: 'Spain',
          children: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao'],
        },
        {
          name: 'United Kingdom',
          children: ['London', 'Edinburgh', 'Manchester', 'Birmingham', 'Glasgow'],
        },
      ],
    },
    {
      name: 'Asia',
      children: [
        {
          name: 'China',
          children: ['Beijing', 'Shanghai', 'Shenzhen', 'Guangzhou', 'Chengdu'],
        },
        {
          name: 'India',
          children: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'],
        },
        {
          name: 'Japan',
          children: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya', 'Sapporo'],
        },
        {
          name: 'South Korea',
          children: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
        },
        {
          name: 'Indonesia',
          children: ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'],
        },
      ],
    },
    {
      name: 'South America',
      children: [
        {
          name: 'Brazil',
          children: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'],
        },
        {
          name: 'Argentina',
          children: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata'],
        },
        {
          name: 'Colombia',
          children: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'],
        },
        {
          name: 'Chile',
          children: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta'],
        },
        {
          name: 'Peru',
          children: ['Lima', 'Cusco', 'Arequipa', 'Trujillo', 'Chiclayo'],
        },
      ],
    },
    {
      name: 'Australia/Oceania',
      children: [
        {
          name: 'Australia',
          children: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
        },
        {
          name: 'New Zealand',
          children: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Dunedin'],
        },
        {
          name: 'Fiji',
          children: ['Suva', 'Nadi', 'Lautoka', 'Labasa', 'Ba'],
        },
        {
          name: 'Papua New Guinea',
          children: ['Port Moresby', 'Lae', 'Mount Hagen', 'Madang', 'Wewak'],
        },
        {
          name: 'Samoa',
          children: ['Apia', 'Faleula', 'Vaitele', 'Fagamalo', 'Lepea'],
        },
      ],
    },
  ];


  const Problem2 = () => {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
  
    // Handle continent click
    const handleContinentClick = (continent) => {
      setSelectedContinent(continent);
      setSelectedCountry(null); // Reset country and state
      setSelectedState(null);
    };
  
    // Handle country click
    const handleCountryClick = (country) => {
      setSelectedCountry(country);
      setSelectedState(null); // Reset state
    };
  
    // Handle state click
    const handleStateClick = (state) => {
      setSelectedState(state);
    };
  
    return (
      <div className="nested-list-container">
        <h1>Continents, Countries, and States</h1>
        <div className="panel-container">
          {/* Continent Level */}
          <ListPanel
            items={data}
            onClick={handleContinentClick}
            selectedItem={selectedContinent}
            hasSubitems={true} // Continents have subitems (countries)
          />


          {/* Optional chaining allows us to safely access nested properties without causing an error if any part of the chain is null or undefined.*/} 

          {/* Country Level */}
          {selectedContinent?.children?.length > 0 && (
          <ListPanel
            items={selectedContinent.children} // Safely shows the countries in the selected continent
            onClick={handleCountryClick}
            selectedItem={selectedCountry}
            hasSubitems={true} // Countries have subitems (states)
          />
            )}
  
          {/* State Level */}
          {selectedCountry?.children?.length > 0 && (
          <ListPanel
            items={selectedCountry.children} // Safely shows the states in the selected country
            onClick={handleStateClick}
            selectedItem={selectedState}
            hasSubitems={false} // States do not have subitems
          />
            )}
        </div>
      </div>
    );
  };
  

export default Problem2;



