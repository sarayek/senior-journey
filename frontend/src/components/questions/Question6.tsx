import React from 'react'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'

type QuestionProps = {
  values: { [field: string]: any }
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

const Question6 = ({ values, setFieldValue }: QuestionProps) => {
  let { t } = useTranslation('learn')
  const [value, setValue] = React.useState('')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    answerId: string
  ) => {
    setValue(answerId)
    setFieldValue(
      'legalStatus',
      values['legalStatus'] === answerId ? '' : answerId ?? ''
    )
  }

  return (
    <div>
      <h5 className="font-display text-2xl font-light">
        {t('quiz.questions.question-6.title')}
      </h5>
      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        fullWidth={true}
        className="my-4"
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiToggleButton-root:not(:first-of-type)': {
            borderTop: '1px solid #e1e4e7',
            borderRadius: '4px',
          },
          '.MuiToggleButton-root.Mui-selected': {
            'backgroundColor': '#004f56',
            'color': '#f1f1f1',
            '&.Mui-selected:hover': {
              backgroundColor: '#004f56',
            },
          },
        }}
      >
        <ToggleButton
          value="StatusCitizen"
          aria-label={t('quiz.questions.question-6.option-1')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['legalStatus'] === 'StatusCitizen'}
        >
          {t('quiz.questions.question-6.option-1')}
        </ToggleButton>
        <ToggleButton
          value="StatusFirstNation"
          aria-label={t('quiz.questions.question-6.option-2')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['legalStatus'] === 'StatusFirstNation'}
        >
          {t('quiz.questions.question-6.option-2')}
        </ToggleButton>
        <ToggleButton
          value="StatusSponsored"
          aria-label={t('quiz.questions.question-6.option-3')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['legalStatus'] === 'StatusSponsored'}
        >
          {t('quiz.questions.question-6.option-3')}
        </ToggleButton>
        <ToggleButton
          value="StatusOther"
          aria-label={t('quiz.questions.question-6.option-3')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['legalStatus'] === 'StatusOther'}
        >
          {t('quiz.questions.question-6.option-3')}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default Question6
