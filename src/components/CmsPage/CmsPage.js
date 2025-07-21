import {useState} from 'react'

import {
  CmsContainer,
  FormContainer,
  HeadingBtn,
  TextAreaContainer,
  TextAreaCms,
  EditSaveBtnContainer,
  EditBtn,
  SaveBtn,
} from './styledComponents'

function CmsPage() {
  const [text, setText] = useState('')

  const onSubmitForm = async event => {
    event.preventDefault()
    await fetch('http://localhost:3000/api/heading', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text}),
    })
    alert('Heading successfully saved.')
  }
  return (
    <CmsContainer>
      <FormContainer onSubmit={onSubmitForm}>
        <HeadingBtn>Heading</HeadingBtn>
        <TextAreaContainer>
          <TextAreaCms
            rows="8"
            cols="50"
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <EditSaveBtnContainer>
            <EditBtn>Edit</EditBtn>
            <SaveBtn type="submit">Save</SaveBtn>
          </EditSaveBtnContainer>
        </TextAreaContainer>
      </FormContainer>
    </CmsContainer>
  )
}

export default CmsPage
