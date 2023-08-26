'use client'
import * as React from 'react';
import { useEffect, useState, createContext } from 'react'

import styles from './page.module.css'

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// components
import Quiz from '../components/Quiz'
import TestResult from '../components/TestResult';
// data
import { oilVsDry, sensitiveVsResistant, pigmentedVsNonPigmented, wrinkledVsTight } from '../resource/quiz'



function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  // console.log({ trigger });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: { 
      p: 1,
      px: 2.5,
      boxShadow: 'none',
      backgroundColor: trigger ? 'rgb(116 160 200)' : 'transparent'
    }
  });
}


const test = [oilVsDry, sensitiveVsResistant, pigmentedVsNonPigmented, wrinkledVsTight]
const testAnsContext = createContext();
export default function Test(props) {
  const [quizN, setQuizN] = useState(1)
  const [quiz, setQuiz] = useState(null)
  const [quizComp, setQuizComp] = useState(null)
  const [testAns, setTestAns] = useState(null)
  const [testXAns, setTestXAns] = useState(null)
  const defaultQuizErr = { quizN, msg: 'questions required', qNs: [] }
  const [quizErr, setQuizErr] = useState(defaultQuizErr)
  

  const navClickHandler = (n) => {
    if (n === 1) {
      if (quizN !== 1) {
        setQuizN(1)
        setQuizErr({ ...defaultQuizErr, quizN: 1 })
      }
    } else {
      const unAnsQAs = testAns[n - 1 - 1]?.filter(qa => qa.ans === null)
      if (unAnsQAs && unAnsQAs.length === 0) {
        if (n !== quizN) {
          setQuizN(n)
          setQuizErr({ ...defaultQuizErr, quizN: n })
        }
      }
    }
  }
  const prevHandler = () => {
    setQuizN(quizN <= 1 ? 1 : quizN - 1)
  }
  const nextHandler = () => {
    const unAnsQAs = testAns[quizN - 1]?.filter(qa => qa.ans === null)
    if (unAnsQAs.length > 0) {
      const unAnsQsNs= unAnsQAs.map(qa => qa.n)
      setQuizErr({ ...defaultQuizErr, qNs: unAnsQsNs, quizN })
    } else {
      setQuizN(quizN >= test.length + 1 ? test.length + 1 : quizN + 1)
      setQuizErr({ ...defaultQuizErr, quizN })
    }
  }
  const resultHandler = () => {
    const render = <TestResult 
                      test={test}
                        /> 
    setQuizComp(render)
    setQuiz(null)
  }


  useEffect(() => {
    const testAns = test.map(quiz => {
      const qa = quiz.questions.map(q => {
        const { n } = q
        return { n, ans: null }
      })
      return qa
    })
    setTestAns(testAns)
    
    const testXAns = {}
    test.forEach(quiz => {
      const xqs = quiz.extra
      if (xqs) {
        testXAns[quiz.title] = {}
        xqs.forEach(q => {
          testXAns[quiz.title][q.text] = {
            points: 0,
            ans: q.defaultAns
          }
        })
      }
    })
    setTestXAns(testXAns)
  }, [])

  useEffect(() => {
    // console.log({ quizN });
    if (quizN === test.length + 1) {
      resultHandler()
    } else {
      const quiz = test[quizN - 1]
      const quizClone = structuredClone(quiz)
      quizClone.err = quizN === quizErr.quizN ? quizErr : { ...defaultQuizErr, quizN }
      setQuiz(quizClone)
    }
  }, [quizN, quizErr])

  useEffect(() => {
    if (quiz) {
      const render = <Quiz 
                        quiz={quiz}
                        quizN={quizN}
                        setTestAns={setTestAns}
                        setTestXAns={setTestXAns}
                          /> 
      setQuizComp(render)
    }
  }, [quiz])
  

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
            <img
              src="/assets\image\logo\baumann_logo_bg-transparent_w-100.png"
              alt="Logo"
              width={87}
              style={{
                marginBottom: 2
              }}
            />
        </AppBar>
      </ElevationScroll>

      <div className={styles.banner}>
        <p  className={styles.heading}>
          Skin Type Test & Quiz
        </p>
      </div>

      <testAnsContext.Provider value={{ testAns, testXAns }}>

        <div 
          className={styles.quizNav}
        >
          {test.map((quiz, i) => (
              <div 
                key={i}
                className={`${styles.tab} ${i+1 <= quizN ? styles.completed : ''}`}
                onClick={() => navClickHandler(i+1)}
              >
                <p
                  className={styles.label}
                >
                  {i+1}. {quiz.title}
                </p>
              </div>
            )
          )}
          <div 
            className={`${styles.tab} ${quizN > test.length ? styles.completed : ''}`}
            onClick={() => navClickHandler(test.length+1)}
          >
            <p
              className={styles.label}
            >
              {test.length+1}. Result
            </p>
          </div>
        </div>

        <form className={styles.main}>

          {quizComp}

          <Grid 
            container 
            spacing={0}
            sx={{
              m: 0,
              mt: 1,
              '& > .col': {
                display: 'flex',
                alignItems: 'center',
                p: 1
              }
            }}
          >

            <Grid item xs={6} className={`col col1`}>
              {quizN > 1 ? 
                <Button 
                  variant="outlined"
                  onClick={prevHandler}
                >
                  Back
                </Button> : ''}
            </Grid>
            
            <Grid 
              item 
              xs={6} 
              className={`col col2`}
              sx={{
                justifyContent: 'flex-end'
              }}
            >
              {quizN < test.length + 1 ? 
                <Button 
                  variant="outlined"
                  onClick={nextHandler}
                >
                  Next
                </Button> : ''}
            </Grid>

          </Grid>

        </form>

      </testAnsContext.Provider>
      
      <section className={styles.contact}>
        <div className={styles.wrapper}>

          <p  className={styles.info}>
            <span className={styles.title}>address: </span> 35 adeoyo street off palm avenue mushin.
          </p>
          <p  className={styles.info}>
            <span className={styles.title}>tel: </span> 08172808660
          </p>
          <p  className={styles.info}>
            <span className={styles.title}>email: </span> anikenatural@gmail.com
          </p>

        </div>
      </section>

    </>
  )
}

export { testAnsContext }