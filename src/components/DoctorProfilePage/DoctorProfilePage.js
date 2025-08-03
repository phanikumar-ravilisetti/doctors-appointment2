import {useContext, useState} from 'react'

import DoctorProfileContext from '../../context/DoctorProfileContext'

import {
  DocProfileContainer,
  DocDetailsContainer,
  DocProfileImage,
  DocName,
  DocSpecialization,
  DocAvailablity,
  DoctorForm,
  EnterYourDetainls,
  PatientNameLabel,
  PatientNameInput,
  EmailLabel,
  EmailInput,
  DateTimeLabel,
  DateTimeInput,
  SubmitButton,
} from './styledComponents'

function DoctorProfilePage() {
  const [patientName, setPatientName] = useState('')
  const [email, setEmail] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [appointmentObject, setAppointmentObject] = useState([])
  const {selectedDoctor} = useContext(DoctorProfileContext)
  const {name, specialization, profileImage, available, aboutDoctor} =
    selectedDoctor

  const onSubmitForm = event => {
    event.preventDefault()
    const patientDetails = {
      patientName,
      email,
      dateTime,
    }
    setAppointmentObject(prevState => [...prevState, patientDetails])
    setPatientName('')
    setEmail('')
    setDateTime('')
    alert('Appointment Booking Successful.')
  }
  console.log(appointmentObject)
  return (
    <>
      <DocProfileContainer>
        <DocDetailsContainer>
          <DocProfileImage src={profileImage} />
          <DocName>{name}</DocName>
          <DocSpecialization>
            Specialization: {specialization}
          </DocSpecialization>
          <DocAvailablity>
            {available ? 'Available' : 'Not Available'}
          </DocAvailablity>
          <DocSpecialization>{aboutDoctor}</DocSpecialization>
        </DocDetailsContainer>

        <DoctorForm onSubmit={onSubmitForm}>
          <EnterYourDetainls>Enter Your Details</EnterYourDetainls>
          <PatientNameLabel htmlFor="patientname">
            Patient Name:
          </PatientNameLabel>
          <PatientNameInput
            id="patientname"
            type="text"
            value={patientName}
            onChange={event => setPatientName(event.target.value)}
          />
          <EmailLabel htmlFor="email">Email:</EmailLabel>
          <EmailInput
            id="email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <DateTimeLabel htmlFor="datetime">
            Select Appointment Date & Time:
          </DateTimeLabel>
          <DateTimeInput
            id="datetime"
            type="datetime-local"
            value={dateTime}
            onChange={event => setDateTime(event.target.value)}
          />
          <SubmitButton type="submit">Book Appointment</SubmitButton>
        </DoctorForm>
      </DocProfileContainer>
    </>
  )
}

export default DoctorProfilePage
