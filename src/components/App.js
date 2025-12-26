import { useEffect, useState } from "react";
import './../styles/App.css';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>You've been on this page for {seconds} seconds.</h2>
    </div>
  );
}

export default App;

