import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Answer from './Answer'



export default function Question({ q, ans, xAnsHandler }) {
  const [checked, setChecked] = useState(ans)

  const handleChange = (e) => {
    const { checked } = e.target
    setChecked(checked)
  }


  useEffect(() => {
    setChecked(ans)
  }, [ans])

  useEffect(() => {
    // console.log({ checked });
    const a = checked
    if (xAnsHandler) xAnsHandler({ text: q.text, a, p: a ? q.points : 0 })
  }, [checked])


  return (
    <FormControlLabel 
      control={<Checkbox 
          checked={checked} 
          onChange={handleChange}
          sx={{
            transform: 'scale(150%)'
          }}
        />
      } 
      label={q.text}
      sx={{
        '& *': {
          fontSize: '12px!important',
          fontWeight: '600!important'
        },
        '&:hover': {
          color: 'blue'
        },
        fontFamily: "'Open Sans', sans-serif",
        color: 'rgb(0 0 0 / 66%)',
        my: 1
      }}
        />
  )
}