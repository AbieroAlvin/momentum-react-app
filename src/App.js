import Time from "./components/Time";
import Weather from "./components/Weather";
import DateToday from "./components/Date";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
     <Weather/>
     <Time/>
     <DateToday/>
     <Quote/>
    </div>
  );
}

export default App;
