import { useRef, Suspense, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Header from "../component/navbar/nav";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";
import style from "../styles/index.module.scss";
function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
  });
  const onLoad = (e) => {
    if (e.target) {
      e.target.dataset.load = "done";
    }
  };
  return (
    <group ref={group}>
      <Image
        key="1"
        className={style.image}
        onLoad={onLoad}
        url="/img1.jpeg"
        scale={[2, height - 5, 1]}
        position={[-2, 0, 1]}
      />
      <Image
        className={style.image}
        onLoad={onLoad}
        url="/img2.jpeg"
        scale={3}
        position={[1, -2, 1]}
      />
      <Image
        className={style.image}
        onLoad={onLoad}
        url="/img3.jpeg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="/img3.jpeg"
        scale={[1, 2.7, 1]}
        position={[-1.4, -height - 0.7, 1]}
      />
      <Image
        url="/img4.jpeg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
      <Image
        url="/material_texture__720.png"
        scale={[1.4, 2, 1]}
        position={[-1, -height + 1, 3.2]}
      />
      <Image url="/nature.jpeg" scale={[2, 2, 1]} position={[1.3, 0, 3.2]} />
    </group>
  );
}

function App() {
  const [hovered, setHover] = useState(false);
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const onMovie = (e) => {
        if (ref.current) {
          const width = ref.current.clientWidth;
          const height = ref.current.clientHeight;
          const oX = (e.nativeEvent.offsetX / width) * 100;
          const oY = (e.nativeEvent.offsetY / height) * 100;
          setX(oX)
          setY(oY)
        }
  }
  const makesyle = {
    "--maskX":x,
    "--maskY":y,
  }
  const ref = useRef();
  return (
    <Suspense fallback={null}>
      <ScrollControls damping={3} pages={2} horizontal={false} infinite={false}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1
          style={{ transform: `translate(${x}px,${y}px)`}}
            onMouseMove={onMovie}
            onTouchMove={onMovie}
            // ref={ref}
            className={`${style.title} {${hovered} ? ${style.action} : ${style.h1}}`}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
          >
            Create
          </h1>
          <div onTouchMove={onMovie} onMouseMove={onMovie} style={makesyle} ref={ref} className={style.subtitleContainer}>
          <h1
            className={`${style.titleWrapper}`}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
          >
            WebSite
            </h1>
          <h1
            className={`${style.subtitle}`}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
          >
            WebSite
            </h1>
          </div>
            <p
              style={{
                fontSize: ".7rem",
                letterSpacing: "4px",
                lineHeight: "24px",
                margin: "20px 10px",
              }}
            >
              I am aiming to be a front-end engineer. I want your power there.
              Please give us feedback on this website.
            </p>
          <p
            className={style.p}
            style={{
              color: "white",
              position: "absolute",
              // fontSize: hovered ? "11em" : "14em",
              top: "90vh",
              left: "20vw",
              writingMode: "vertical-rl",
            }}
          >
            Development
          </p>
        </Scroll>
      </ScrollControls>
    </Suspense>
  );
}

export default App;
