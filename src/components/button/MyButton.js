import {useEffect, useState} from "react";
import moment from 'moment';

function MyButton() {
  const currentDate = () => moment().format('DD/MM/YYYY, HH:mm:ss');
  // useState is a “Hook”
  const [message, setMessage] = useState("hello");
  const [timeStamp, setTimeStamp] = useState(currentDate());
  const [clock, setClock] = useState(currentDate());

  const toogleMessageHandler = () => (message === "hello") ? setMessage("goodbye") : setMessage("hello");
  // useEffect is a “Hook”
  useEffect(() => {
    // if the message changes, re-render everything and apply the rules here
    setTimeStamp(currentDate())
  }, [message])

  // useEffect is a “Hook”
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setClock(currentDate())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={toogleMessageHandler}>clickme</button>
      <p>{message} on... {timeStamp}</p>
      <p>Clock: {clock}</p>
    </div>
  );
}
export default MyButton;
