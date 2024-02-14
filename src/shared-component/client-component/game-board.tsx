'use client'
import styles from '@/styles/share-component.module.scss'
import { useRouter } from 'next-nprogress-bar';
import React from 'react'

const defaultState = {
  positiveBtnSize: 1.2
};

const dialogProps = [
  {
    key: 1,
    question: "Hello!",
    positive: "Hi!",
    negative: "Bye!"
  },
  {
    key: 2,
    question: "Today is a special day!",
    positive: "Yes! It is!",
    negative: "So boring!"
  },
  {
    key: 3,
    question: "And today I am happy!",
    positive: "I am happy too!",
    negative: "Your happiness is not my concern!"
  },
  {
    key: 4,
    question: "And I have something to tell you!",
    positive: "I am listening!",
    negative: "I am not interested!"
  },
  {
    key: 5,
    question: "Will you be my valentine?",
    positive: "Yes!",
    negative: "No!"
  }
]

export default function GameBoardComponent() {
  const router = useRouter();
  const [positiveBtnSize, setPositiveBtnSize] = React.useState(defaultState.positiveBtnSize);
  const [dialogIndex, setDialogIndex] = React.useState(0);

  const currentDialog = dialogProps[dialogIndex];

  const handleNextDialog = () => {
    console.log(dialogIndex < (dialogProps.length - 1));
    
    if (dialogIndex < (dialogProps.length - 1)) {
      setDialogIndex(dialogIndex + 1);
    } else {
      router.push('/congratulation');
    }

    console.log(dialogIndex);
    
  }
  const handleNegative = () => {
    increasePositiveBtnSize();
  }

  const handlePositive = () => {
    handleNextDialog();
    setPositiveBtnSize(defaultState.positiveBtnSize);
  }

  const increasePositiveBtnSize = () => {
    setPositiveBtnSize(positiveBtnSize + 1.2);
  }

  return (
    <div className={styles.game_board}>
      <h1> {currentDialog.question} </h1>
      <div className={styles.action_buttons}>
        <button 
          className={styles.positive}
          style={{fontSize: `${positiveBtnSize}rem`}}
          onClick={handlePositive}
        > {currentDialog.positive} </button>
        <button 
          className={styles.negative}
          onClick={handleNegative}
        > {currentDialog.negative} </button>
      </div>
    </div>
  )
}
