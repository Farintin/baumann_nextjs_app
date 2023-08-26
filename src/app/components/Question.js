import { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Answer from './Answer'



export default function Question({ n, q, objs, ans, ansHandler, showRequired }) {
  const [value, setValue] = useState(ans ? ans : null)
  // const [value, setValue] = useState(null)

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }


  useEffect(() => {
    if (value !== null) {
      const qa = { n, v: value }
      if (ansHandler) ansHandler(qa)
    }
  }, [value])


  return (
    <FormControl
    >
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "'Open Sans', sans-serif",
          color: 'rgb(0 0 0 / 87%)!important',
          mb: 1,
          letterSpacing: .1
        }}
      >
        *{n}. {q}
      </Typography>

      {showRequired ? 
        <Typography
          sx={{
            fontSize: 16,
            fontFamily: "'Open Sans', sans-serif",
            color: 'rgb(255 0 0 / 100%)!important',
            ml: 'auto'
          }}
        >
          Required
        </Typography> : ''}

      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{
          mb: 3,
          ml: 1
        }}
      >
        {objs.map((obj, i) => (
          <Answer 
            key={i}
            qn={n}
            obj={obj}
              />
        ))}
      </RadioGroup>
    </FormControl>
  )
}