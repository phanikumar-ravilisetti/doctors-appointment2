import styled from 'styled-components'

export const EachListItemContainer = styled.li`
display: flex;
flex-direction: column;
height: 350px;
width: 300px;
margin: 28px;
text-align: center;
border-radius: 6px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
background-color: #ffffff;
`

export const DoctorImage = styled.img`
height: 60px;
width: 60px;
align-self: center;
margin-top: 8px;
`

export const DoctorName = styled.h1`
font-size: 28px;
`

export const Specilization = styled.p`
font-size: 24px;
`

export const Availability = styled.p`
font-size: 24px;
`

export const AppointmentBtn = styled.button`
font-size: 16px;
height: 30px;
width: 120px;
align-self: center;
background-color: #ddd5e0;
border: none;
cursor: pointer;
border-radius: 4px;
`
