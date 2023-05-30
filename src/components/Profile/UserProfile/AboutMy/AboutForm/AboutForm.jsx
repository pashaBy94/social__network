import React from "react";
import st from './AboutForm.module.css';
import Contacts from "./../Contacts/Contacts";
import { Formik } from "formik";

export default function AboutForm({ profile, setModEdit, updateInfoProfileThunk, authenticationId }) {
    console.log(profile);
    return (
        <div className={st.about__save}>
            <Formik 
            initialValues={
                {
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    aboutMe: profile.aboutMe,
                    fullName: profile.fullName,

                }
            }
            validate={()=>{return true}}
            onSubmit={(val)=>{
                let obj = {userId: authenticationId, ...val};
                updateInfoProfileThunk(obj);
                setModEdit(false);
            }}
            >
                {(formik)=>{
                    return(
                        <form onSubmit={formik.handleSubmit}>
                            <p><strong>Full name? </strong>
                            <input 
                            type='text'
                            id='fullName'
                            name='fullName'
                            value={formik.values.fullName || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            /></p>
                            <p><strong>Looking for a job? </strong>
                            <input 
                            type='checkbox' 
                            id='lookingForAJob'
                            name='lookingForAJob'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lookingForAJob}
                            className={st.form__checkbox}/></p>
                            <p><strong>Looking for a job description:</strong>
                            <textarea 
                            id='lookingForAJobDescription' 
                            name='lookingForAJobDescription' 
                            placeholder='Looking for a job description'
                            value={formik.values.lookingForAJobDescription || ''} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            ></textarea>
                            </p>
                            <p><strong>About my:</strong>
                            <textarea 
                            id='aboutMe' 
                            name='aboutMe' 
                            placeholder='Tell me about yourself'
                            value={formik.values.aboutMe || ''} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            ></textarea></p>
                            <p><strong>Contacts my: </strong></p>
                            <input type="submit" value='Save' />
                        </form>
                    )
                }}
            </Formik>
            <Contacts contacts={profile.contacts}/>
        </div>
    )
}