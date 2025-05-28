import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Search } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import { Footer } from "./components/footer/Footer";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      // contents: `Explain how AI works in a few words ${word}`
      contents: `Considered you are a dictionary AI. we will give to a word and you need to Give all the dictionary details in good form 
      including examples also, Meanings, Definitions, Synonyms , Phonetics etc The Word is ${word}`,
    });
    setResult(response.text);
    console.log(response.text);
    setLoading(false);
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
        <ReactMarkdown>{result}</ReactMarkdown>
        {loading && <PropagateLoader color="#20acdf" className="mt-5 text-center"  />}
      </div>
      <Footer/>
    </span>
  );
}

export default App;
