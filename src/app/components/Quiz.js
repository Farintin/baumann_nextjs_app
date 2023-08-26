import { useState, useEffect, useContext } from 'react'
import styles from './Quiz.module.css'

import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';

// components
import Question from './Question'
import ExtraQuestion from './ExtraQuestion'

import { testAnsContext } from '../skin-type-quiz/page';



const digitWords = ['zero','one','two','three','four',
'five','six','seven','eight','nine']

export default function Quiz({ quiz, quizN, setTestAns, setTestXAns }) {
  const { testAns, testXAns } = useContext(testAnsContext);
  const [qs, setQs] = useState([])
  const [xqs, setXqs] = useState([])
  const [total, setTotal] = useState(0)
  

  const ansHandler = (qa) => {
    const testAnsClone = structuredClone(testAns)
    const quizAns = testAnsClone[quizN - 1]
    const i = quizAns.findIndex(q => q.n === qa.n)
    if (i !== -1) {
      quizAns[i].ans = qa.v
      testAnsClone[quizN - 1] = quizAns
      setTestAns(testAnsClone)
    }
  }
  const xAnsHandler = ({ text, a, p }) => {
    const testXAnsClone = structuredClone(testXAns)
    const quizXAns = testXAnsClone[quiz.title]
    if (quizXAns && quizXAns[text]) {
      quizXAns[text].points = p
      quizXAns[text].ans = a
      testXAnsClone[quiz.title] = quizXAns
      setTestXAns(testXAnsClone)
    }
  }
  const totHandler = () => {
    const quizAns = testAns[quizN - 1]
    const points = quizAns.map(qa => quiz.scoring[qa.ans])
                    .filter(p => p !== undefined)
    const total = points.length > 0 ? points.reduce((t,n) => t+n) : 0

    let xTotal = 0
    const quizXAns = testXAns[quiz.title]
    if (quizXAns) {
      Object.keys(quizXAns).forEach(k => {
        const qa = quizXAns[k]
        xTotal += qa.points
      })
    }
    setTotal(total + xTotal)
  }

  useEffect(() => {
    totHandler()
  }, [testAns, testXAns])

  useEffect(() => {
    setQs(quiz.questions)
    quiz.extra ? setXqs(quiz.extra) : setXqs([])
    totHandler()
  }, [quiz, quizN])

  return (
    <div className={`${styles.root} ${quiz.err.qNs.length > 0 ? styles.error : ''}`}> 
      <h1
        className={styles.heading}
      >
        <span
          className={styles.count}
        >
          Part {`${digitWords[quizN]} `}
        </span>
          -
        <span>
          {` ${quiz.title}`}
        </span>
      </h1>

      <hr/>

      {qs.map((q, i) => {
          let showRequired = false
          if (quiz.err.qNs.includes(i + 1)) showRequired = true
          return <Question
            key={`${quizN} - ${i}`}
            n={q.n}
            q={q.q}
            objs={q.objs}
            ans={testAns[quizN - 1][q.n - 1]?.ans}
            quizAns={testAns[quizN - 1]}
            ansHandler={ansHandler}
            quizN={quizN}
            showRequired={showRequired}
              />
        }
      )}

      {testXAns[quiz.title] ? 
        <FormGroup
          sx={{
            pl: 1
          }}
        >
          {xqs.map((q, i) => {
              const quizXAns = testXAns[quiz.title]
              const xqa = quizXAns[q.text]
              const ans = xqa ? xqa.ans : q.defaultAns
              return <ExtraQuestion
                key={`${quizN} - ${i}`}
                q={q}
                ans={ans}
                xAnsHandler={xAnsHandler}
                  />
            }
          )}
        </FormGroup> : ''}

      <hr/>

      <Grid 
        container 
        spacing={0}
        className={styles.result}
        sx={{
          m: '0!important',
          '& > .col': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      >

        <Grid item xs={8} className={`${styles.col} ${styles.col1}`}>
          <p
            className={styles.subHeading}
          >
            Your {quiz.titleAlt1} Score is:
          </p>
        </Grid>
        
        <Grid 
          item 
          xs={4} 
          className={`${styles.col} ${styles.col2}`}
          sx={{
            px: 4,
            justifyContent: 'center'
          }}
        >
          <p 
            className={styles.subHeading}
          >
            {total}
          </p>
        </Grid>

      </Grid>
      
      <hr/>

    </div>
  )
}
