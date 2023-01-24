import "./App.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { QuizPage } from "./pages/quizPage/QuizPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ApiContext } from "./contextState/ApiContext";
import { GetApiData } from "./components/GetApiData";
import { AnswersContext } from "./contextState/AnswersContext";

function App() {
  const [apiData, setApiData] = useState([]);
  const [answers, setAnswers] = useState([]);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      <AnswersContext.Provider value={{ answers, setAnswers }}>
        <>
          <div className="App">
            <GetApiData />
          </div>

          <Routes>
            <Route path="*" element={<LandingPage />} />
            <Route path="/quiz-page" element={<QuizPage />} />
          </Routes>
        </>
      </AnswersContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
