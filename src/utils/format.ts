export function formatTemperature(temp: number): string {
  return `${Math.round(temp)}°`;
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

export function getWeatherIcon(condition: string): string {
  const conditionLower = condition.toLowerCase();
  
  // Sunny conditions
  if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
    return '☀️';
  }
  
  // Cloudy conditions
  if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
    return '☁️';
  }
  
  // Rain conditions
  if (conditionLower.includes('rain') || conditionLower.includes('shower')) {
    return '🌧️';
  }
  
  // Drizzle conditions
  if (conditionLower.includes('drizzle')) {
    return '🌦️';
  }
  
  // Thunderstorm conditions
  if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return '⛈️';
  }
  
  // Snow conditions
  if (conditionLower.includes('snow') || conditionLower.includes('sleet')) {
    return '❄️';
  }
  
  // Mist/fog conditions
  if (conditionLower.includes('mist') || conditionLower.includes('fog')) {
    return '🌫️';
  }
  
  // Default
  return '🌈';
}