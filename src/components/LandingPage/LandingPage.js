import {
  LandingPageContainer,
  LabelsContainer1,
  LabelContainer,
  Icon,
  LabelHeading,
  LabelDescription,
  HorizontalLineContainer,
  RadioBtn,
  LabelsContainer2,
} from './styledComponents'

const LandingPage = () => (
  <LandingPageContainer>
    <div>
      <LabelsContainer1>
        <LabelContainer>
          <Icon src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752408567/Frame_26086348_1x_uj6yft.png" />
          <LabelHeading>Ready to Go Algos</LabelHeading>
          <LabelDescription>
            We have ready accelerators embedded with learnings from hundreds of
            past projects, generating actionable results.
          </LabelDescription>
        </LabelContainer>
        <LabelContainer>
          <Icon src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752408616/Frame_26086348_1x_3_s3kakx.png" />
          <LabelHeading>Internal capability building</LabelHeading>
          <LabelDescription>
            We productize all our work, enhance them with the latest AI
            technology, and train your internal teams to leverage them.
          </LabelDescription>
        </LabelContainer>
      </LabelsContainer1>
      <HorizontalLineContainer>
        <RadioBtn type="radio" />
        <RadioBtn type="radio" />
        <RadioBtn type="radio" />
        <RadioBtn type="radio" />
        <RadioBtn type="radio" />
      </HorizontalLineContainer>
      <LabelsContainer2>
        <LabelContainer>
          <Icon src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752408586/Frame_26086348_1x_1_q00p57.png" />
          <LabelHeading> Multi-source data</LabelHeading>
          <LabelDescription>
            Our solutions work with old, new, or incomplete datasets, in
            different formats, and from varied sources.
          </LabelDescription>
        </LabelContainer>
        <LabelContainer>
          <Icon src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752408600/Frame_26086348_1x_2_nkjkll.png" />
          <LabelHeading>Stakeholder alignment</LabelHeading>
          <LabelDescription>
            No black boxes. Stakeholders understand the “how”, “so what” and
            “now what”, leading to clear decision-making trade offs.
          </LabelDescription>
        </LabelContainer>
        <LabelContainer>
          <Icon src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752408635/Frame_26086348_1x_4_hpstnq.png" />
          <LabelHeading>Continuous engagement</LabelHeading>
          <LabelDescription>
            We engage in the long-term to enhance, course-correct, and adopt new
            models to continuously refine your work.
          </LabelDescription>
        </LabelContainer>
      </LabelsContainer2>
    </div>
  </LandingPageContainer>
)

export default LandingPage
