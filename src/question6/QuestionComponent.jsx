import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

export default function QuestionComponent() {
  const [questionText, setQuestionText] = useState("");
  const dispatch = useDispatch();

  function handleSend() {
    if (questionText.trim() !== "") {
      dispatch(setQuestion(questionText));
      setQuestionText(""); // Input alanını temizle
    }
  }

  return (
    <div>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Ställ en fråga"
      />
      <button onClick={handleSend}>Send Question</button>
    </div>
  );
}
