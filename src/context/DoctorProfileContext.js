import React from 'react'

const DoctorProfileContext = React.createContext({
  selectedDoctor: null,
  setSelectedDoctor: () => {},
})

export default DoctorProfileContext
