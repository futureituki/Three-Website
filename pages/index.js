import { useRef, Suspense, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
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

  return (
    <group ref={group}>
      <Image url="/img1.jpeg" scale={[2, height - 5, 1]} position={[-2, 0, 1]} />
      <Image url="/img2.jpeg" scale={3} position={[1, -2, 1]} />
      <Image
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
  return (
    <Suspense fallback={null}>
      <ScrollControls damping={3} pages={2} horizontal={false} infinite={false}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1
            className={`${style.title} {${hovered} ? ${style.action} : ${style.h1}}`}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
          >
            Create
          </h1>
          <h1
            className={`${style.subtitle} {${hovered} ? ${style.action} : ${style.h1}}`}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
          >
            WebSite<br></br>
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
          </h1>
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
