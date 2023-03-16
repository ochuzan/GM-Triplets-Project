import { Configuration, OpenAIApi } from "openai"
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils";
import { AppContext } from "../../App";
import { State } from "../../App";
import {useFormik,} from "formik"
import * as Yup from 'yup';


const WelcomeForm = () => {
    const state: State = useContext(AppContext);

    const handleCloseModal = () => state.setIsWelcomeModalOpen(false);

//   const handleSubmit = (e: any) => {
//     console.log(e)
//     state.setTeamOne(e)
//     state.setNumberOfQuestions(e) 
//     fetchData(state.subject, state.numberOfQuestions);

//     handleCloseModal()
//   };

    const formik = useFormik({
        initialValues: {
        subject: '',
        numberOfQuestions: '',
        teamOne: '',
        teamTwo: '',
        },
        onSubmit: values => { alert(JSON.stringify(values, null, 2)); }
    })
    
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="subject">
            Subject
            <select name="subject" id="subject" onChange={formik.handleChange} value={formik.values.subject}>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="art history">Art History</option>
                <option value="american history">American History</option>
                <option value="world history">World History</option>
            </select>
        </label>
        <label htmlFor="numberOfQuestions">
            <input onChange={formik.handleChange} value={formik.values.numberOfQuestions} type="number" min="1" max="10" id="numberOfQuestions" name="numberOfQuestions" />
        </label>
        <label htmlFor="teamOne">
            Team One's Name:
            <input onChange={formik.handleChange} value={formik.values.teamOne} type="text" id="teamOne" name="teamOne"/>
        </label>
        <label htmlFor="teamTwo">
            Team Two's Name:
            <input onChange={formik.handleChange} value={formik.values.teamTwo} type="text" id="teamTwo" name="teamTwo"/>
        </label>
        <button>Start Playing?</button>
        <button onClick={handleCloseModal}>Close</button>
      </form>
    )
}

export default WelcomeForm