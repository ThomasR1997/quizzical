import { useContext, useEffect } from "react";
import { GetApiData } from "../../components/GetApiData";
import {
  StartDiv,
  StyledButton,
  StyledH1,
  StyledLink,
  StyledP,
} from "../../components/StyledComponents";
import { AnswersContext } from "../../contextState/AnswersContext";
import { ApiContext } from "../../contextState/ApiContext";

export const LandingPage = () => {
  // data from quiz api
  const { apiData } = useContext(ApiContext);

  // context used to store answersArray
  const { setAnswers } = useContext(AnswersContext);

  const answersArray = [];

  // I call the api data to get a new set of questions when you start the quiz
  GetApiData();

  // Removes characters from api to make the questions/answers readable
  const fixed = (props) => {
    return props.replace(/(&quot;|&#039;|&amp;|&eacute;)/g, "");
  };
  // I push the apidata to an array and added values to the answers to keep track of the correct answer
  apiData.results &&
    apiData.results.forEach((element) => {
      answersArray.push({
        question: fixed(element.question),

        ans: [
          { answer: fixed(element.correct_answer), value: true },
          { answer: fixed(element.incorrect_answers[0]), value: false },
          { answer: fixed(element.incorrect_answers[1]), value: false },
          { answer: fixed(element.incorrect_answers[2]), value: false },
        ],
      });
    });

  // Shuffles the position of the answers in the array so the correct answer isn't always first in the index
  answersArray.map((e) => {
    return e.ans.sort(() => 0.5 - Math.random());
  });

  // setAnswer to answersArray so I can use it on the quizPage
  useEffect(() => {
    setAnswers(answersArray);
  }, [apiData]);

  return (
    <StartDiv>
      <StyledH1>Quizzical</StyledH1>
      <StyledP>Gamer quiz for REAL!!!1! GaEMErs p0ggers!</StyledP>

      <StyledLink to="/quiz-page">
        <StyledButton>Start quiz</StyledButton>
      </StyledLink>
    </StartDiv>
  );
};
