import { useRef, Suspense, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Mac from "../component/mac";
import {
  useScroll,
  Text,
  Image,
  ScrollControls,
  Scroll,
  Text3D,
} from "@react-three/drei";
import style from "../styles/index.module.scss";
import Loader from "../component/load";
import Link from "next/link";
import { useRotate } from "../component/hook/useRotate";
import Scene from "../component/model/model";
import Spheres from "../component/sphere";
function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  // useFrame((state)=>state.rotaion.x +=0.1)
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
        url="/sun.jpeg"
        scale={[1, height - 5, 1]}
        position={[-0.8, 0, 1]}
      />
      <Image
        className={style.image}
        onLoad={onLoad}
        url="/img2.jpeg"
        scale={3}
        position={[1, -2, 1]}
        transparent
        opacity={0.6}
      />
      <Image
        className={style.image}
        onLoad={onLoad}
        url="/img5.jpeg"
        scale={[1, 3.5, 1]}
        position={[-1, -height, 2]}
      />
      <Image
        url="/img3.jpeg"
        scale={[-1, 2.7, 1]}
        position={[0, -height - 0.7, 1]}
      />
      <Image
        url="/img4.jpeg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
      <Image url="/nature.jpeg" scale={[2, 2, 1]} position={[1.3, 0, 3.2]} />
      <Scene
        path={"/assets/cokacora.glb"}
        scale={[0.02, 0.02, 0.02]}
        position={[0.8, -17, 1]}
      />
      <group position={[-0.7, -18, -10]}>
        <Mac />
      </group>
      <group position={[0.5, -30, -10]}>
        <Spheres />
        <Image
          opacity={0.5}
          url="/7c336c05.jpeg"
          scale={[8, 8, 5]}
          position={[1.3, 0, 3.2]}
        />
      </group>
    </group>
  );
}

function App() {
  const [hovered, setHover] = useState(false);
  const rotate = useRotate([0, 0.1, 0.3]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [hidden, set] = useState();

  const onMovie = (e) => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      const oX = (e.nativeEvent.offsetX / width) * 100;
      const oY = (e.nativeEvent.offsetY / height) * 100;
      setX(oX);
      setY(oY);
    }
  };
  const makesyle = {
    "--maskX": x,
    "--maskY": y,
  };
  const ref = useRef();
  return (
    <Suspense fallback={<Loader />}>
      <ScrollControls damping={3} pages={5} horizontal={false} infinite={false}>
        <Scroll>
          {/* <group rotation={[0, Math.PI, 0]}>
          <Model2 />
       </group> */}
          <Images />
          <Text
            ref={rotate}
            color="#fff"
            fontSize={1}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            anchorX="center"
            anchorY="middle"
          >
            CREATIvE
          </Text>
        </Scroll>
        <Scroll
          html
          occlude
          onOcclude={set}
          style={{
            transition: "all 0.5s",
            opacity: hidden ? 0 : 1,
            transform: `scale(${hidden ? 0.5 : 1})`,
          }}
        >
          <h1
            style={{ transform: `translate(${x}px,${y}px)` }}
            onMouseMove={onMovie}
            onTouchMove={onMovie}
            // ref={ref}
            className={`${style.title} {${hovered} ? ${style.action} : ${style.h1}}`}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
          >
            Create
          </h1>
          <p className={style.p2}>
            I work on creating websites and web apps every day. Keep in mind
            high quality output. Please come to my Github.
            <Link href="https://github.com/futureituki">
              <a className={style.link}>https://github.com/futureituki</a>
            </Link>
          </p>
          <div
            onTouchMove={onMovie}
            onMouseMove={onMovie}
            style={makesyle}
            ref={ref}
            className={style.subtitleContainer}
          >
            <h1
              className={`${style.titleWrapper} ${style.h1}`}
              onPointerOver={(e) => setHover(true)}
              onPointerOut={(e) => setHover(false)}
            >
              WebSite
            </h1>
            <h1
              className={`${style.subtitle} ${style.h1}`}
              onPointerOver={(e) => setHover(true)}
              onPointerOut={(e) => setHover(false)}
            >
              WebSite
            </h1>
          </div>
          <p className={style.p1}>
            I am aiming to be a front-end engineer. I want your power there.
            Please give us feedback on this website.
          </p>
          <h1 className={`${style.like}`}>I like this</h1>
          <h1 className={`${style.drink}`}>Cola</h1>
          <h1 className={`${style.pasokon}`}>Mac Book</h1>
          <h1 className={`${style.pokemon}`}>Pokémon</h1>
          <Text3D fontSize={20} Color={"white"}>
            <h4 className={style.footer}> Sato Itsuki ©︎2022.6.24</h4>
            <meshNormalMaterial />
          </Text3D>
        </Scroll>
      </ScrollControls>
    </Suspense>
  );
}

export default App;
