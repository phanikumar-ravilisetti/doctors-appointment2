import {useEffect, useState} from 'react'

import EachDoctorCard from '../EachDoctorCard/EachDoctorCard'

import {
  SearchInput,
  DoctorsListContainer,
  DoctorsListHeading,
  UnorderedListDoctors,
} from './styledComponents'

function LandingPage() {
  const [doctorsList, setDoctors] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('/data/doctors.json')
        const data = await response.json()
        setDoctors(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchApi()
  }, [])

  const filteredDoctor = doctorsList.filter(
    eachDoctor =>
      eachDoctor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      eachDoctor.specialization
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
  )

  return (
    <>
      <DoctorsListContainer>
        <div>
          <SearchInput
            type="text"
            value={searchInput}
            placeholder="Search by Name or Specialization"
            onChange={event => setSearchInput(event.target.value)}
          />
          <DoctorsListHeading>Doctors List</DoctorsListHeading>
          <UnorderedListDoctors>
            {filteredDoctor.map(eachDoctor => (
              <EachDoctorCard key={eachDoctor.id} doctorDetails={eachDoctor} />
            ))}
          </UnorderedListDoctors>
        </div>
      </DoctorsListContainer>
    </>
  )
}

export default LandingPage
