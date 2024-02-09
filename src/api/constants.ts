export const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const errorText =
  'An error occurred while accessing the server. The server is unavailable or the requested resource was not found.';

export const Minsk = {
  latitude: 53.9,
  longitude: 27.5667,
};

export const Kiev = {
  latitude: 50.2667,
  longitude: 24.4333,
};

export const weatherCodes: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense intensity drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense intensity freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy intensity rain',
  66: 'Light freezing rain',
  67: 'Heavy intensity freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy intensity snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Heavy rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Slight||moderate thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

export const weatherIcons: Record<number, string> = {
  0: './sun.svg',
  1: './cloud.svg',
  2: './cloud.svg',
  3: './cloud.svg',
  45: './rain.svg',
  48: './rain.svg',
  51: './rain.svg',
  53: './rain.svg',
  55: './rain.svg',
  61: './rain.svg',
  63: './rain.svg',
  65: './rain.svg',
  80: './rain.svg',
  81: './rain.svg',
  82: './rain.svg',
  95: './rain.svg',
  96: './rain.svg',
  99: './rain.svg',
  71: './snow.svg',
  73: './snow.svg',
  75: './snow.svg',
  77: './snow.svg',
  85: './snow.svg',
  86: './snow.svg',
};

export const weatherVideos: Record<number, string> = {
  0: './sunny.mp4',
  1: './clouds.mp4',
  2: './clouds.mp4',
  3: './clouds.mp4',
  51: './rain.mp4',
  53: './rain.mp4',
  55: './rain.mp4',
  61: './strong-wind.mp4',
  63: './strong-wind.mp4',
  65: './strong-wind.mp4',
  80: './rain.mp4',
  81: './rain.mp4',
  82: './rain.mp4',
  95: './thunderstorm.mp4',
  96: './thunderstorm.mp4',
  99: './thunderstorm.mp4',
  71: './snows.mp4',
  73: './snows.mp4',
  75: './snows.mp4',
  77: './snows.mp4',
  85: './snows.mp4',
  86: './snows.mp4',
};
