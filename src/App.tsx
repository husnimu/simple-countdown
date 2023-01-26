import { useEffect, useState } from 'react'
const App = () => {
  const calculateTimeLeft = (targetDate: any) => {
    let difference = +targetDate - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }
  const [targetDate, setTargetDate] = useState(new Date('2023-12-31'))
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  const date = new Date().toISOString().substr(0, 10)

  const handleDateChange = (e: any) => {
    setTargetDate(new Date(e.target.value))
    setTimeLeft(calculateTimeLeft(new Date(e.target.value)))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)
  })

  return (
    <div className="bg-gray-800 h-screen flex justify-content-center flex-col items-center text-white">
      <h1 className="text-3xl">Countdown Timer</h1>
      <input
        type="date"
        name="targetDate"
        id="targetDate"
        className="px-4 py-2 rounded-lg my-2 text-black"
        placeholder="date"
        min={date}
        defaultValue="2023-12-31"
        onChange={(e) => {
          handleDateChange(e)
        }}
      />
      <div className="flex text-center gap-3">
        <div className="days">
          <p className="text-3xl font-bold" id="days">
            {timeLeft.days}
          </p>
          <span>Days</span>
        </div>
        <div className="hours">
          <p className="text-3xl font-bold" id="hours">
            {timeLeft.hours}
          </p>
          <span>Hours</span>
        </div>
        <div className="mins">
          <p className="text-3xl font-bold" id="mins">
            {timeLeft.minutes}
          </p>
          <span>Mins</span>
        </div>
        <div className="seconds">
          <p className="text-3xl font-bold" id="seconds">
            {timeLeft.seconds}
          </p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default App
