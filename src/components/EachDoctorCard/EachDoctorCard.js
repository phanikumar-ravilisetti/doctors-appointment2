import {useHistory} from 'react-router-dom'
import {useContext} from 'react'

import DoctorProfileContext from '../../context/DoctorProfileContext'

import {
  EachListItemContainer,
  DoctorImage,
  DoctorName,
  Specilization,
  Availability,
  AppointmentBtn,
} from './styledComponents'

function EachDoctorCard(props) {
  const {doctorDetails} = props
  const {id, name, specialization, profileImage, available, aboutDoctor} =
    doctorDetails
  const history = useHistory()
  const {setSelectedDoctor} = useContext(DoctorProfileContext)
  const onClickAppointment = () => {
    const selectedDoctorObj = {
      id,
      name,
      specialization,
      profileImage,
      available,
      aboutDoctor,
    }
    setSelectedDoctor(selectedDoctorObj)

    history.push('/doctorProfilePage')
  }
  return (
    <>
      <EachListItemContainer>
        <DoctorImage src={profileImage} />
        <DoctorName>{name}</DoctorName>
        <Specilization>Specialist: {specialization}</Specilization>
        <Availability>{available ? 'Available' : 'Not Available'}</Availability>
        {available && (
          <AppointmentBtn type="button" onClick={onClickAppointment}>
            Appointment
          </AppointmentBtn>
        )}
      </EachListItemContainer>
    </>
  )
}

export default EachDoctorCard
