import React from 'react'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'

type QuestionProps = {
  values: { [field: string]: any }
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

const Question3 = ({ values, setFieldValue }: QuestionProps) => {
  let { t } = useTranslation('learn')
  const [value, setValue] = React.useState('')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    answerId: string
  ) => {
    setValue(answerId)
    setFieldValue(
      'financialPreparedness',
      values['financialPreparedness'] === answerId ? '' : answerId ?? ''
    )
  }

  return (
    <div>
      <h5 className="font-display text-2xl font-light">
        {t('quiz.questions.question-3.title')}
      </h5>
      <p className="mt-5 font-display text-sm font-light">
        {t('quiz.questions.question-3.subtitle')}
      </p>
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
          value="VeryUnprepared"
          aria-label={t('quiz.questions.question-3.option-1')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['financialPreparedness'] === 'VeryUnprepared'}
        >
          {t('quiz.questions.question-3.option-1')}
        </ToggleButton>
        <ToggleButton
          value="Unprepared"
          aria-label={t('quiz.questions.question-3.option-2')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['financialPreparedness'] === 'Unprepared'}
        >
          {t('quiz.questions.question-3.option-2')}
        </ToggleButton>
        <ToggleButton
          value="UnsurePreparedness"
          aria-label={t('quiz.questions.question-3.option-3')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['financialPreparedness'] === 'UnsurePreparedness'}
        >
          {t('quiz.questions.question-3.option-3')}
        </ToggleButton>
        <ToggleButton
          value="Prepared"
          aria-label={t('quiz.questions.question-3.option-4')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['financialPreparedness'] === 'Prepared'}
        >
          {t('quiz.questions.question-3.option-4')}
        </ToggleButton>
        <ToggleButton
          value="VeryPrepared"
          aria-label={t('quiz.questions.question-3.option-5')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['financialPreparedness'] === 'VeryPrepared'}
        >
          {t('quiz.questions.question-3.option-5')}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default Question3
