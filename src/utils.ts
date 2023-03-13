
export const fetchData = (subject: string, numberOfQuestions: string) => {
    //To make fetch work we need to store the user's input ("subject" and "number of Q/A") in state and access them here
    //Note: a higher number of questions costs more, so we should limit 'numberOfQuestions' while testing
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //API KEY:
          'Authorization': "Bearer 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"
        },
        body: JSON.stringify({
          'model': 'gpt-3.5-turbo',
          'messages': [
            {
                'role':'user', 
                'content': `Please give me a list of ${parseInt(numberOfQuestions)} ${subject} questions and their answers.`
            }
        ],
          'n': parseInt(numberOfQuestions),
          'temperature': 0.5,
          'top_p': 1,
          'frequency_penalty': 0,
          'presence_penalty': 0.5,
        })
      };

    fetch('https://api.openai.com/v1/chat/completions', requestOptions)
    .then(response => response.json())
    .then(data => {
        //write code to manipulate/store retrieved data here
        console.log(data)
  }).catch(err => {
        console.log(err);
  });
  }
