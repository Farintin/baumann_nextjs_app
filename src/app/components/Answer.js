import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';



export default function Question({ obj, qn }) {
  return (
    <FormControlLabel 
      value={obj.v} 
      control={<Radio 
          sx={{
            transform: 'scale(150%)'
          }}
        />
      } 
      label={`${qn}${obj.v}. ${obj.text}`} 
      sx={{
        '& *': {
          fontSize: '12px!important',
          fontWeight: '600!important'
        },
        '&:hover': {
          color: 'blue'
        },
        fontFamily: "'Open Sans', sans-serif",
        color: 'rgb(0 0 0 / 66%)'
      }}
        />
  )
}
