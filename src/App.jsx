import "./App.css";
import { Search } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
// import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import Markdown from 'react-markdown'

import remarkGfm from "remark-gfm";

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
      model: "gemini-3-flash-preview",
      // contents: `Explain how AI works in a few words ${word}`
      contents: `and professional dictionary details for the given word. Strictly avoid using any emojis. Format the output using clear headings and Markdown for a sophisticated look. For every word, include:Phonetics: (e.g., IPA notation and pronunciation guide) Part of Speech: (e.g., Noun, Verb, Adjective) Definition: A precise and formal explanation. Meanings: Multiple layers of meaning if applicable. Synonyms & Antonyms: Organized in a clear list. Usage Examples: 2-3 high-quality, professional sentences. Etymology: (Optional) A brief origin of the word. Ensure the tone is academic, helpful, and grounded. The Word is ${word}`,
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
          <Markdown children={result} remarkPlugins={[remarkGfm]} />
        )}
      </div>
    </main>
  );
}

export default App;
