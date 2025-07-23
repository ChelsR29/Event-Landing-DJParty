// src/components/Countdown.jsx
import { useEffect, useState } from 'react';

const EVENT_DATE = new Date('2025-07-27T19:00:00');

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = EVENT_DATE - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown text-white px-5 pt-4 pb-6 text-center border-b-solid border-b-2 border-b-[rgb(255,64,129)]">
        <h3 className="text-[1.5rem] font-semibold mt-0 mb-2">Countdown to the Party</h3>
        {timeLeft.days !== undefined ? (
            <div className="countdown-timer text-xl font-bold text-[#ff4081]">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
        ) : (
            <p className="text-xl text-[#ff4081] font-semibold">It's Party Time!</p>
        )}
    </section>
  );
}

export default Countdown;