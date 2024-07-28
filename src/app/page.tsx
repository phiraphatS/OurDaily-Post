import styles from "../styles/page.module.scss";
import GameBoardComponent from "@/shared-component/client-component/game-board";
import { redirect } from 'next/navigation'

export default function Home() {
<<<<<<< Updated upstream
  return <div className={`${styles.main} ${styles.flower_color}`}>
=======

  redirect('/congratulation');
  return <div className={styles.main}>
>>>>>>> Stashed changes
    <GameBoardComponent />
  </div>
}
