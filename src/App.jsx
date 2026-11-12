import Weather from "./components/Weather/Weathher"
// src/App.jsx

const App = () => {
  const weatherForecasts = [
  {
    day: 'Mon',
    img: '/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: '/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: '/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: '/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: '/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

  return (

    <>
    <h1>Local Weather</h1>

    <section>

    {weatherForecasts.map((oneitem)=>

      <Weather key={oneitem.day} {...oneitem} />  
      
    )}
    </section>

    </>
    
  )
}

export default App