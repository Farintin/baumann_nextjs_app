import Grid from '@mui/material/Grid';

import styles from './QuizResult.module.css'



export default function TestResult({ r }) {
  return (
    <div className={styles.root}>

      <div className={styles.heading}>
        <h1 
          className={styles.text}
        >
          Result: {r.title}
        </h1>
      </div>
      
      <Grid 
        className={styles.score}
        container 
        spacing={0}
        sx={{
          '& > .col': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      >

        <Grid item xs={8} className='col col-1'>
          <p
            className={styles.text}
          >
            Your {r.titleAlt1} Score:
          </p>
        </Grid>
        
        <Grid 
          item 
          xs={4} 
          className='col col-2'
          sx={{
            px: 4,
            justifyContent: 'center'
          }}
        >
          <p
            className={styles.text}
          >
            {r.total}
          </p>
        </Grid>

      </Grid>

      <div className={styles.result}>
        <h3
          className={styles.text}
        >
          {r.skinNature}
        </h3>
        <h3
          className={styles.text}
        >
          {r.skinType}
        </h3>
      </div>

    </div>
  )
}
