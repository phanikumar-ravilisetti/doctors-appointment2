import styled from 'styled-components'

export const DocProfileContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 1400px;
margin: 28px;
background-color: #ffffff;
`

export const DocDetailsContainer = styled.div`
display: flex;
flex-direction: column;
width: 600px;
align-items: center;
`

export const DocProfileImage = styled.img`
height: 200px;
width: 200px;
`

export const DocName = styled.h1`
font-size: 24px;
`

export const DocSpecialization = styled.p`
font-size: 24px;
`

export const DocAvailablity = styled.p`
font-size: 24px;
`

export const DoctorForm = styled.form`
width: 500px;
height: 500px;
padding: 16px;
display: flex;
flex-direction: column;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
border-radius: 8px;
`

export const EnterYourDetainls = styled.h1`
font-size: 32px;
align-self: center;
`

export const PatientNameLabel = styled.label`
font-size: 24px;
margin-bottom: 4px;
`

export const PatientNameInput = styled.input`
height: 40px;
border-radius: 5px;
margin-bottom: 14px;
`

export const EmailLabel = styled.label`
font-size: 24px;
margin-bottom: 4px;
`

export const EmailInput = styled.input`
height: 40px;
border-radius: 5px;
margin-bottom: 14px;
`

export const DateTimeLabel = styled.label`
font-size: 24px;
margin-bottom: 4px;
`

export const DateTimeInput = styled.input`
height: 40px;
border-radius: 5px;
margin-bottom: 30px;
`

export const SubmitButton = styled.button`
font-size: 16px;
height: 40px;
align-self: center;
background-color: #aab5fa;
border: none;
cursor: pointer;
border-radius: 4px;
`
