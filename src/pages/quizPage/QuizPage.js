import { useContext, useState } from "react";
import {
  AnswerButton,
  QuestionDiv,
  QuizDiv,
  ResultDiv,
  StyledButton,
  StyledLink,
  StyledQuestion,
  StyledScore,
} from "../../components/StyledComponents";
import { AnswersContext } from "../../contextState/AnswersContext";

export const QuizPage = () => {
  // array with questions and answers
  const { answers } = useContext(AnswersContext);

  // State to store your selected answers
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // True/false state used to hide/show score and "play again" button
  const [showResult, setShowResult] = useState(0);

  // State used to track and display your score
  const [score, setScore] = useState(0);

  // Click handler for check answers button
  const checkAnswers = () => {
    // set results to true
    setShowResult(1);

    // Stores all buttons with this class name in a variable
    const answerClassList = document.getElementsByClassName("answerOptions");

    // Turns the HTMLCollection above into an array so I can map it
    const answerArray = Object.entries(answerClassList);

    // Maps over the buttons and changes all the correct ones to green
    answerArray.map((e) => {
      if (e[1].value === "true") {
        e[1].style.backgroundColor = "#94D7A2";
      }
    });

    let wrongAnswers = [];

    // Stores all your wrong answers in an array
    wrongAnswers = selectedAnswers.filter((item) => item.value === "false");

    // maps over wrong answers and changes the color to red
    wrongAnswers.map((e) => {
      return (e.style.backgroundColor = "#F8BCBC");
    });
  };

  // Click handler for answers
  const selectAnswer = (e) => {
    // Stores your selected answers in a state
    setSelectedAnswers([...selectedAnswers, e.target]);

    // Changes color of selected answers
    e.target.style.backgroundColor = "#d6dbf5";

    // prevents you from selecting multiple answers
    e.target.parentNode.style.pointerEvents = "none";

    // increases your score by 1 for each correct answer
    if (e.target.value === "true") {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <QuizDiv>
      {answers.map((element, index) => {
        return (
          <QuestionDiv key={index}>
            <StyledQuestion>{element.question}</StyledQuestion>
            {element.ans.map((element, index) => {
              return (
                <AnswerButton
                  key={index}
                  onClick={(e) => selectAnswer(e)}
                  value={element.value}
                  className="answerOptions"
                >
                  {element.answer}
                </AnswerButton>
              );
            })}
          </QuestionDiv>
        );
      })}

      <ResultDiv display={showResult}>
        <StyledScore>You scored {score}/5 correct answers</StyledScore>
        <StyledLink to="/landing-page">
          <StyledButton>Play again</StyledButton>
        </StyledLink>
      </ResultDiv>
      <StyledButton display={showResult} onClick={() => checkAnswers()}>
        Check answers
      </StyledButton>
    </QuizDiv>
  );
};
