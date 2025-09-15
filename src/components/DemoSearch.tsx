"use client";

import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWeatherByCity, getForecastByCity } from "@/lib/openweather";
import { useDebounce } from "@/hooks/useDebounce";
import { formatTemperature, getWeatherIcon, formatDate } from "@/utils/format";

export default function DemoSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Expanded list of unique cities for better suggestions
  const cities = [
    "New York", "London", "Tokyo", "Paris", "Sydney", "Berlin", "Rome", "Madrid", 
    "Toronto", "Dubai", "Singapore", "Mumbai", "Delhi", "Bangkok", "Istanbul", 
    "Seoul", "Shanghai", "São Paulo", "Mexico City", "Cairo", "Moscow", "Beijing", 
    "Jakarta", "Lagos", "Osaka", "Karachi", "Bangalore", "Ho Chi Minh City", 
    "Tehran", "Kuala Lumpur", "Lima", "Manila", "Rio de Janeiro", "Lahore", 
    "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Kolkata", "Surat", "Jaipur", 
    "Kanpur", "Nagpur", "Lucknow", "Patna", "Indore", "Thane", "Bhopal", 
    "Visakhapatnam", "Pimpri-Chinchwad", "Vadodara", "Ghaziabad", "Ludhiana", 
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", 
    "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", 
    "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", 
    "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", 
    "Chandigarh", "Solapur", "Hubli-Dharwad", "Mysore", "Tiruchirappalli", 
    "Bareilly", "Aligarh", "Tiruppur", "Gurgaon", "Moradabad", "Jalandhar", 
    "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Guntur", "Bhiwandi", 
    "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", 
    "Bhilai", "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", 
    "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", 
    "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", 
    "Nizamabad", "Sangli-Miraj & Kupwad", "Mangalore", "Patiala", "Malegaon", 
    "Ambattur", "Adoni", "Rajahmundry", "Kakinada", "Davanagere", "Tirunelveli", 
    "Bally", "Aizawl", "Eluru", "Korba", "Brahmapur", "Shahjahanpur", "Thrissur", 
    "Raiganj", "Muzaffarpur", "Chapra", "Pali", "Satna", "Sonipat", "Panipat", 
    "Katihar", "Arrah", "Karimnagar", "Parbhani", "Sikar", "Rewa", "Mirzapur", 
    "Raichur", "Haridwar", "Karnal", "Bharatpur", "Ernakulam", "Bilaspur", 
    "Bardhaman", "Shimoga", "Ramagundam", "Chittoor", "Bijapur", "Anantapur", 
    "Khammam", "Ongole", "Nandyal", "Machilipatnam", "Mathura", "Hapur", 
    "Avadi", "Kurnool", "Etawah", "Kadapa", "Haldia", "Raebareli", "Port Blair", 
    "Junagadh", "Gandhidham", "Belgaum", "Jammu", "Gaya", "Raigarh", 
    "Jalgaon", "Dharmavaram", "Kavali", "Latur", "Surendranagar", "Tenali", 
    "Bidar", "Chandrapur", "Hospet", "Ballari", "Habra", "Kharagpur", 
    "Alwar", "Bhimavaram", "Dibrugarh", "Faizabad", "Gangtok", 
    "Guntakal", "Haldwani", "Hazaribagh", "Imphal", "Itanagar", "Jorhat", 
    "Kannur", "Kavaratti", "Kohima", "Kolar", 
    "Kulti", "Kumbakonam", 
    "Machilipatnam", "Madanapalle", "Madhyamgram", "Mahbubnagar", 
    "Maheshtala", "Malappuram", "Mau", 
    "Medininagar", "Mehsana", "Miryalaguda", 
    "Moga", "Mokama", "Morbi", "Morena", "Motihari", 
    "Munger", "Muzaffarnagar", "Nadiad", 
    "Nagaon", "Nagercoil", "Naihati", "Nangloi Jat", 
    "Neyveli", "New Delhi", 
    "Orai", "Panchkula", "Panihati", 
    "Phagwara", "Phusro", "Pondicherry", 
    "Proddatur", "Puri", "Purnia", 
    "Rajnandgaon", "Rampur", 
    "Ratlam", "Raurkela", "Rohtak", "Sagar", "Saharsa", 
    "Sambalpur", "Sambhal", 
    "Sasaram", "Satara", "Secunderabad", "Serampore", 
    "Shimla", "Shivpuri", "Silchar", "Singrauli", 
    "Sirsa", "Siwan", "South Dumdum", 
    "Sultan Pur Majra", 
    "Thanjavur", "Thiruvananthapuram", "Thoothukudi", 
    "Tirupati", "Udaipur", "Udupi", 
    "Vellore", "Yamunanagar", "Jaunpur", "Junagadh", 
    "Kavaratti", "Kochi", "Kollam", "Kozhikode"
  ];

  // Handle click anywhere on the search container to focus the input
  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm.length > 1) {
      // Case-insensitive fuzzy search for city suggestions
      const filtered = cities.filter(city => 
        city.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      // Remove duplicates and limit to 8 suggestions
      const uniqueSuggestions = Array.from(new Set(filtered)).slice(0, 8);
      setSuggestions(uniqueSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setLoading(true);
      try {
        const [weather, forecast] = await Promise.all([
          getWeatherByCity(searchTerm.trim()),
          getForecastByCity(searchTerm.trim())
        ]);
        
        setWeatherData(weather);
        setSuggestions([]);
        
        // Process forecast data to get daily forecasts
        const dailyForecasts: any[] = [];
        
        // Get forecast for the next 5 days
        forecast.forecast.forecastday.slice(0, 5).forEach((day: any) => {
          dailyForecasts.push({
            date: day.date,
            date_epoch: day.date_epoch,
            day: day.day
          });
        });
        
        setForecastData(dailyForecasts);
      } catch (error: any) {
        console.error("Error fetching weather data:", error);
        // Show user-friendly error message
        alert(`Could not find weather data for "${searchTerm}". Please check the city name and try again.`);
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to format date for display
  const formatForecastDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    }
    
    return date.toLocaleDateString([], {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Handle suggestion click
  const handleSuggestionClick = (city: string) => {
    setSearchTerm(city);
    setIsFocused(false);
    // Trigger search immediately when a suggestion is clicked
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as FormEvent;
      handleSearch(fakeEvent);
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div ref={searchContainerRef} onClick={handleContainerClick} className="cursor-text">
        <motion.form 
          onSubmit={handleSearch}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.input
            type="text"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search for a city (e.g. Jaipur, New York, Tokyo)..."
            className="w-full px-6 py-4 rounded-full bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
            whileFocus={{ 
              scale: 1.02,
              boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.2)"
            }}
            ref={inputRef}
            style={{ caretColor: 'black' }} // Ensure cursor is visible
          />
          
          <motion.button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Search"}
          </motion.button>
        </motion.form>
      </div>

      <AnimatePresence>
        {isFocused && suggestions.length > 0 && (
          <motion.ul
            className="mt-2 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {suggestions.map((city, index) => (
              <motion.li
                key={`${city}-${index}`} // Use index to ensure unique keys
                className="px-6 py-3 text-black hover:bg-blue-50 cursor-pointer transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSuggestionClick(city)}
              >
                {city}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Weather result and 5-day forecast */}
      {weatherData && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Current weather */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm mb-6"> 
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-black">{weatherData.location.name}, {weatherData.location.country}</h3>
                <p className="text-gray-600 flex items-center">
                  <span className="text-2xl mr-2">{getWeatherIcon(weatherData.current.condition.text)}</span>
                  {weatherData.current.condition.text}
                </p>
              </div>
              <div className="text-5xl font-light text-black">{formatTemperature(weatherData.current.temp_c)}</div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-600">Humidity</p>
                <p className="text-black font-medium">{weatherData.current.humidity}%</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-600">Wind</p>
                <p className="text-black font-medium">{weatherData.current.wind_kph} km/h</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-600">Feels like</p>
                <p className="text-black font-medium">{formatTemperature(weatherData.current.feelslike_c)}</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-600">Pressure</p>
                <p className="text-black font-medium">{weatherData.current.pressure_mb} mb</p>
              </div>
            </div>
          </div>
          
          {/* 5-day forecast */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-6">5-Day Forecast</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {forecastData.map((day: any, index) => (
                <div key={index} className="text-center p-4 rounded-xl border border-gray-200 hover:bg-blue-50 transition-colors">
                  <p className="font-medium text-black">
                    {formatForecastDate(day.date)}
                  </p>
                  <div className="text-3xl my-3">{getWeatherIcon(day.day.condition.text)}</div>
                  <p className="text-2xl font-light text-black">{formatTemperature(day.day.avgtemp_c)}</p>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>{day.day.condition.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}