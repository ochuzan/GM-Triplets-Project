import * as dotenv from "dotenv";

export const fetchData = (subject: string, numberOfQuestions: number) => {
  //To make fetch work we need to store the user's input ("subject" and "number of Q/A") in state and access them here
  //Note: a higher number of questions costs more, so we should limit 'numberOfQuestions' while testing
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          // content: `Please give me a list of ${numberOfQuestions} ${subject} questions and their answers.`,
          content: `Please give me a question and answer about ${subject}`,
          // content: `Please give me a list of ${numberOfQuestions} Javascript objects. Each object should contain one question and one answer about the following subject: ${subject}.`,
        },
      ],
      n: numberOfQuestions,
      temperature: 0.5,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
    }),
  };

  fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const questionsAndAnswers = data.choices;
      const result: any[] = [];
      questionsAndAnswers.forEach((element: any) => {
        result.push({
          question: element.message.content,
          // answer: ,
          isAnswered: false,
        });
        return result;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
