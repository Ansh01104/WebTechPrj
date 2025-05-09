import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

let numbersOfRings = [0];

export function Globe({ globeConfig, data }) {
  const [globeData, setGlobeData] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const globeRef = useRef(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current && !isInitialized) {
      // Initialize the globe with empty data first
      globeRef.current
        .hexPolygonsData([])
        .pointsData([])
        .arcsData([])
        .ringsData([]);

      setIsInitialized(true);
    }
  }, [globeRef.current]);

  useEffect(() => {
    if (isInitialized && globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [isInitialized]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial();
    if (globeMaterial) {
      globeMaterial.color = new Color(globeConfig.globeColor || defaultProps.globeColor);
      globeMaterial.emissive = new Color(globeConfig.emissive || defaultProps.emissive);
      globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || defaultProps.emissiveIntensity;
      globeMaterial.shininess = globeConfig.shininess || defaultProps.shininess;
    }
  };

  const _buildData = () => {
    if (!data) return;
    
    const points = data.flatMap(arc => {
      const rgb = hexToRgb(arc.color);
      return [
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.startLat,
          lng: arc.startLng,
        },
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.endLat,
          lng: arc.endLng,
        }
      ];
    });

    // Remove duplicates
    const filteredPoints = points.filter((v, i, a) =>
      a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData && countries.features) {
      try {
        globeRef.current
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .showAtmosphere(defaultProps.showAtmosphere)
          .atmosphereColor(defaultProps.atmosphereColor)
          .atmosphereAltitude(defaultProps.atmosphereAltitude)
          .hexPolygonColor(() => defaultProps.polygonColor);

        startAnimation();
      } catch (error) {
        console.error("Error initializing globe:", error);
      }
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData || !data) return;

    try {
      // Set arcs data
      globeRef.current
        .arcsData(data)
        .arcStartLat(d => d.startLat)
        .arcStartLng(d => d.startLng)
        .arcEndLat(d => d.endLat)
        .arcEndLng(d => d.endLng)
        .arcColor(e => e.color)
        .arcAltitude(e => e.arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap(e => e.order)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      // Set points data
      globeRef.current
        .pointsData(globeData)
        .pointColor(e => e.color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      // Initialize rings
      globeRef.current
        .ringsData([])
        .ringColor(e => e.color)
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
    } catch (error) {
      console.error("Error in animation:", error);
    }
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      
      try {
        numbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
        globeRef.current.ringsData(globeData.filter((d, i) => numbersOfRings.includes(i)));
      } catch (error) {
        console.error("Error updating rings:", error);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [globeRef.current, globeData]);

  return <threeGlobe ref={globeRef} />;
}

// Rest of your code remains the same...
export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World(props) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    (<Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)} />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)} />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8} />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3} />
    </Canvas>)
  );
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
