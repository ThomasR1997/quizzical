import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

// Div for LandingPage
export const StartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// LandingPage title
export const StyledH1 = styled.h1`
  color: #293264;
  font-size: 32px;
  letter-spacing: 3px;
  margin-top: 5em;
`;

// LandingPage paragraph
export const StyledP = styled.p`
  color: #293264;
`;

// Button styling
export const StyledButton = styled.button`
  background-color: #4d5b9e;
  color: #f5f7fb;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  padding: 1em 4em;
  cursor: pointer;
  margin-top: 3em;
  display: ${(props) => (props.display ? "none" : "block")};
`;

// Div for QuizPage
export const QuizDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

// Div for questions
export const QuestionDiv = styled.div`
  border-bottom: #dbdef0 solid 2px;
  text-align: center;
`;

// Quiz answers
export const AnswerButton = styled.button`
  color: #293264;
  border: 2px solid #4d5b9e;
  background-color: transparent;
  padding: 1em 2em;
  margin: 1em;
  border-radius: 20px;
  cursor: pointer;
`;

// Div for hiding score and play again button
export const ResultDiv = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};

  margin: 2em;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

// Color for questions
export const StyledQuestion = styled.h3`
  color: #293264;
`;

// Styles for score
export const StyledScore = styled.h3`
  color: #293264;
  margin: 2em;
  transform: translate(0, 75%);
`;
