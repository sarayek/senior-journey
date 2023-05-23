import React from 'react'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'

type QuestionProps = {
  values: { [field: string]: any }
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const QuestionEarn = ({ values, setFieldValue }: QuestionProps) => {
  const { t } = useTranslation('quiz')
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.MouseEvent<HTMLElement>, answerId: string) => {
    setValue(answerId)
    setFieldValue('hasExtraIncome', values['hasExtraIncome'] === answerId ? '' : answerId ?? '')
  }

  return (
    <div>
      <h5 className="font-display text-2xl font-light">{t('questions.question-earn.title')}</h5>
      <p className="mt-5 font-display text-sm font-light">{t('questions.question-earn.subtitle')}</p>
      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        data-cy="question-earn"
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
          value="no-income"
          aria-label={t('questions.question-earn.option-no-income')}
          data-cy="no-income-button"
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['hasExtraIncome'] === "no-income"}
        >
          {t('questions.question-earn.option-no-income')}
        </ToggleButton>
        <ToggleButton
          value="yes-income"
          aria-label={t('questions.question-earn.option-yes-income')}
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['hasExtraIncome'] === "yes-income"}
        >
          {t('questions.question-earn.option-yes-income')}
        </ToggleButton>
        <ToggleButton
          value="unsure-income"
          aria-label={t('questions.question-earn.option-unsure-income')}
          data-cy="unsure-income-button"
          className="my-4 font-display text-base font-bold normal-case"
          selected={values['hasExtraIncome'] === "unsure-income"}
        >
          {t('questions.question-earn.option-unsure-income')}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
