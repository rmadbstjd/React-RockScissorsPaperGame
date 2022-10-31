import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import PlayBtn from "./component/PlayBtn";
function App() {
  const [userEl, setUserEl] = useState(""); // 유저가 낸 요소
  const [cpEl, setCpEl] = useState(""); // 컴퓨터가 낸 요소
  const [result, setResult] = useState(""); // 가위바위보의 결과
  console.log(`유저 : ${userEl} 컴퓨터 : ${cpEl} 결과 : ${result}`);
  return (
    <div>
      <Box player="user" userEl={userEl} result={result} />
      <Box player="computer" cpEl={cpEl} result={result} />
      <PlayBtn
        useEl={userEl}
        setUserEl={setUserEl}
        cpEl={cpEl}
        setCpEl={setCpEl}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
