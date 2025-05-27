import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Search } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  const changeBorderColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#20acdf";
  };

  const resetBorderColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#1d5063";
  };

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyC7JRcRJF1rWZPUb5LoZF2H2JpkyoftOPk",
  });

  async function getResult() {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Explain how AI works in a few words ${word}`
    });
    setResult(response.text);
    console.log(response.text);
  }


  return (
    <span>
      <Navbar />
      <div className="searchContainer mt-5 px-[250px]">
        <div className="inputBox ">
          <Search color="gray" className="mr-4 cursor-pointer" />
          <input
            onChange={(e) => {
              setWord(e.target.value);
            }}
            value={word}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                getResult();
              }
            }}
            onFocus={changeBorderColor}
            onBlur={resetBorderColor}
            type="text"
            placeholder="Search a Word..."
          />
        </div>
      </div>
      <div
        className="resultContainer mt-6 min-h-[50vh] mx-[250px]"
        style={{
          borderTop: "1px solid #1d5063",
          borderBottom: "1px solid #1d5063",
        }}
      >
        {result}
      </div>
    </span>
  );
}

export default App;
