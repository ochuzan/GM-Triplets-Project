import * as dotenv from "dotenv";
import { TriviaObj } from "./dummydata";

export const fetchData = async (subject: string, numberOfQuestions: number) => {
  Promise<TriviaObj[]>;
  const result: any[] = [];
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Please give me a question and answer about ${subject}`,
        },
      ],
      n: numberOfQuestions,
      temperature: 1.25,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    }),
  };

  return fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const questionsAndAnswers = data.choices || [];

      questionsAndAnswers.forEach((element: any) => {
        const parsedQandA = parseQuestionAndAnswer(element.message.content);
        let answer;
        let question;

        parsedQandA.forEach((element) => {
          if (element[0] === "A") {
            answer = element;
          } else if (element[0] === "Q") {
            question = element;
          }
        });

        result.push({
          question: question,
          answer: answer,
          isAnswered: false,
        });
      });
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const parseQuestionAndAnswer = (str: string) => str.split("\n");
