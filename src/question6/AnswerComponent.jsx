import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

export default function AnswerComponent() {
  const question = useSelector((state) => state.question.question);
  const answer = useSelector((state) => state.question.answer);

  const [inputAnswer, setInputAnswer] = useState("");
  const dispatch = useDispatch();

  function handleAnswer() {
    if (inputAnswer.trim() !== "") {
      dispatch(setAnswer(inputAnswer));
      setInputAnswer(""); // Input alanını temizle
    }
  }

  return (
    <div>
      <p>Fråga: {question || "Ingen fråga ställd ännu"}</p>

      <input
        type="text"
        value={inputAnswer}
        onChange={(e) => setInputAnswer(e.target.value)}
        placeholder="Skriv ditt svar"
      />
      <button onClick={handleAnswer}>Svara</button>

      <p>Svar: {answer}</p>
    </div>
  );
}
