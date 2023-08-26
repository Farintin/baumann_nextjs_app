import { useState, useEffect, useContext } from 'react'
import styles from './TestResult.module.css'
// components
import QuizResult from "./QuizResult";

import { testAnsContext } from '../skin-type-quiz/page';



export default function TestResult({ test }) {
  const { testAns, testXAns } = useContext(testAnsContext);
  const [result, setResult] = useState(null)

  const resultHandler = () => {
    const result = test.map((quiz, i) => {
      const points = testAns[i].map(qa => quiz.scoring[qa.ans])
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

      const tot = total + xTotal
      return {
        total: tot,
        skinNature: quiz.result.skinNature?.find(r => (tot >= r.min && tot <= r.max))?.value,
        skinType: quiz.result.skinType?.find(r => (tot >= r.min && tot <= r.max))?.value,
        title: quiz.title,
        titleAlt1: quiz.titleAlt1
      }
    })
    setResult(result)
  }

  useEffect(() => {
    resultHandler()
  }, [])


  return (
    <div className={styles.root}>

      {result?.map((r, i) => (
        <QuizResult 
          key={i}
          r={r}
            />
      ))}

    </div>
  )
}
