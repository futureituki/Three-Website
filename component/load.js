import { Html, useProgress } from "@react-three/drei";
import { Spinner } from "@chakra-ui/react";
import style from '../styles/index.module.scss'
export default function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html center>
        <div className={style.wrapper}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <span>Loading</span>
    </div>
    </Html>
  );
}
