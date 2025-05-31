import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Search } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import { Footer } from "./components/footer/Footer";
import remarkGfm from "remark-gfm";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const changeBorderColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#20acdf";
  };

  const resetBorderColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#1d5063";
  };

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_APP_GEMkEY });

  async function getResult() {
    setIsLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      // contents: `Explain how AI works in a few words ${word}`
      contents: `Considered you are a dictionary AI. we will give to a word and you need to Give all the dictionary details in good form 
      including examples also, Meanings, Definitions, Synonyms , Phonetics etc The Word is ${word}`,
    });
    setResult(response.text);
    // console.log(response.text);
    setIsLoading(false);
  }

  return (
    <main>
      <div className="searchContainer mt-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="inputBox flex items-center border border-gray-300 rounded-lg p-3">
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
            placeholder="Search a word..."
            className="flex-grow w-full focus:outline-none"
          />
        </div>
      </div>
      <div
        className="resultContainer mt-6 min-h-[72vh] mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-48"
        style={{
          borderTop: "1px solid #1d5063",
          borderBottom: "1px solid #1d5063",
        }}
      >
        {isLoading ? (
          <PropagateLoader color="#20acdf" className="mt-11 text-center" />
        ) : (
          <ReactMarkdown children={result} remarkPlugins={[remarkGfm]} />
        )}
      </div>
    </main>
  );
}

export default App;
