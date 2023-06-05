import { useEffect, useState } from "react";
import Sign_Up from "./components/signin";
function App() {
  const [signUp, setSignUp] = useState(true);
  useEffect(() => {
    console.log("useEffect", signUp);
  }, [signUp]);
  const changeForm = (value) => {
    setSignUp(value);
  };
  console.log(signUp);

  return Sign_Up ? (
    <Sign_Up onClick={changeForm} />
  ) : (
    <login onClick={changeForm} />
  );
}
export default App;
