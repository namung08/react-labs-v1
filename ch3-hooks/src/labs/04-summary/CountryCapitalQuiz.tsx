import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface DataInfo {
  name: {
    official: string;
  };
  capital: string[];
  flags: {
    png: string;
  };
}

interface UserAnswer extends DataInfo {
  userAnswer: string;
}

export const CountryCapitalQuiz = () => {
  const [data, setData] = useState<DataInfo[]>([]);
  const [random, setRandom] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setData(res.data);
        setRandom(Math.floor(Math.random() * res.data.length));
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.length) {
    return <div>No data available</div>;
  }

  const handleNext = () => {
    if (data[random]) {
      const newAnswer: UserAnswer = {
        ...data[random],
        userAnswer: userAnswer,
      };
      setAnswers((prev) => [...prev, newAnswer]);
    }
    setRandom(Math.floor(Math.random() * data.length));
    setUserAnswer("");
    inputRef.current?.focus();
  };

  if (!isDone) {
    return (
      <div>
        <div>
          <img src={data[random].flags.png} alt={data[random].name.official} />
          <p>country: {data[random].name.official}</p>
        </div>
        <input
          ref={inputRef}
          value={userAnswer}
          type="text"
          onChange={(e) => {
            setUserAnswer(e.target.value);
          }}
        />
        <div>
          <button onClick={handleNext}>next</button>
          <button onClick={() => {
            setIsDone(!isDone)
            handleNext();
          }}>done</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>결과</h2>
        {answers.map((answer, index) => (
          <div key={index}>
            <p>
              {answer.name.official}의 수도:{" "}
              {answer.capital?.[0] || "수도 정보 없음"}
            </p>
            <p>
              당신의 답변: {answer.userAnswer || "답변 없음"} -{" "}
              {answer.capital?.[0]?.toLowerCase() ===
              answer.userAnswer?.toLowerCase()
                ? "정답"
                : "오답"}
            </p>
          </div>
        ))}
        <button
          onClick={() => {
            setIsDone(!isDone);
            setUserAnswer("");
            setAnswers([]);
            setRandom(Math.floor(Math.random() * data.length));
          }}
        >
          다시 시작
        </button>
      </div>
    );
  }
};
