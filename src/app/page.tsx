import styles from "../styles/page.module.scss";
import GameBoardComponent from "@/shared-component/client-component/game-board";

export default function Home() {
  return <div className={styles.main}>
    <GameBoardComponent />
  </div>
  ;
}
