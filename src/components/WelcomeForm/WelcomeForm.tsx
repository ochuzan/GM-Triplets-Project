import { Configuration, OpenAIApi } from "openai"
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils";
import { AppContext } from "../../App";
import { State } from "../../App";
import {useFormik,} from "formik"
import * as Yup from 'yup';
import { TriviaObj } from "../../dummydata";
import { LabelWrapper, FormWrapper, Button } from "./WelcomeForm.styles";
import {  } from "./WelcomeForm.styles";


const WelcomeForm = () => {
    const state: State = useContext(AppContext);

    const handleCloseModal = () => state.setIsWelcomeModalOpen(false);

    const WelcomeFormSchema = Yup.object().shape({
        subject: Yup.string()
        .required("Required!"),
        numberOfQuestions: Yup.number()
        .min(1)
        .max(10)
        .required("Required"),
        teamOne: Yup.string()
        .required("Required")
        .max(25),
        teamTwo: Yup.string()
        .required("Required")
        .max(25),
    })

    const formik = useFormik({
        initialValues: {
        subject: 'biology',
        numberOfQuestions: 0,
        teamOne: '',
        teamTwo: '',
        },
        onSubmit: values => { 
            state.setSubject(values.subject);
            state.setNumberOfQuestions(values.numberOfQuestions);
            state.setTeamOne(values.teamOne);
            state.setTeamTwo(values.teamTwo);

            console.log('hi')
            const questionsAndAnswers: TriviaObj[] = fetchData(formik.values.subject, formik.values.numberOfQuestions);
            console.log(questionsAndAnswers);
            state.setTriviaList(questionsAndAnswers);
            console.log(state.triviaList)

            handleCloseModal();
        }
    })
    
    return (
      <FormWrapper onSubmit={formik.handleSubmit}>
        <LabelWrapper htmlFor="subject">
            Subject:
            <select name="subject" id="subject" onChange={formik.handleChange} value={formik.values.subject}>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="art history">Art History</option>
                <option value="american history">American History</option>
                <option value="world history">World History</option>
            </select>
        </LabelWrapper>
        <LabelWrapper>
        <LabelWrapper htmlFor="numberOfQuestions">
            Number of Questions:
            <input onChange={formik.handleChange} value={formik.values.numberOfQuestions} type="number" id="numberOfQuestions" name="numberOfQuestions" />
        </LabelWrapper>
        </LabelWrapper>
        <LabelWrapper>
        <LabelWrapper htmlFor="teamOne">
            Team One's Name:
            <input onChange={formik.handleChange} value={formik.values.teamOne} type="text" id="teamOne" name="teamOne"/>
        </LabelWrapper>
        </LabelWrapper>
        <LabelWrapper htmlFor="teamTwo">
            Team Two's Name:
            <input onChange={formik.handleChange} value={formik.values.teamTwo} type="text" id="teamTwo" name="teamTwo"/>
        </LabelWrapper>
        <Button>Start Playing?</Button>
      </FormWrapper>
    )
}

export default WelcomeForm