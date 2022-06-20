import { useEffect } from 'react';
import style from './index.module.scss'
const Mouse = () => {
  const staker = useRef();
  const mouseMove = (e) => {
    .style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
  useEffect(()=>{
    window.addEventListener('mousemove', (e) => {

    });
  })
  return(
    <>
    <div className={style.mousestalker}></div>
    </>
  )
}

export default Mouse