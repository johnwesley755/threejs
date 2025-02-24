import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const MainLoader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  animation: ${float} 4s ease-in-out infinite;
`;

const RotatingCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 50%;
  border-top-color: #7c3aed;
  animation: ${rotate} 2s linear infinite;

  &:nth-child(2) {
    border-top-color: #3b82f6;
    animation-direction: reverse;
    width: 90%;
    height: 90%;
    margin: 5%;
  }
`;

const InnerPulse = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 15%;
  left: 15%;
  animation: ${pulse} 2s ease-in-out infinite;
  backdrop-filter: blur(5px);
`;

const FloatingParticles = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  animation: ${float} 3s ease-in-out infinite;

  &:nth-child(1) {
    top: 20%;
    left: 30%;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    top: 60%;
    left: 70%;
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    top: 80%;
    left: 40%;
    animation-delay: 1s;
  }
  &:nth-child(4) {
    top: 40%;
    left: 80%;
    animation-delay: 1.5s;
  }
`;

const ProgressText = styled.div`
  position: absolute;
  color: white;
  font-family: "Arial", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const LoadingMessage = styled.div`
  position: absolute;
  bottom: 30%;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
`;

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderContainer>
      <MainLoader>
        <FloatingParticles />
        <FloatingParticles />
        <FloatingParticles />
        <FloatingParticles />

        <RotatingCircle />
        <RotatingCircle />

        <InnerPulse />

        <ProgressText>{progress}%</ProgressText>
        <LoadingMessage>Loading Creativity...</LoadingMessage>
      </MainLoader>
    </LoaderContainer>
  );
};

export default Loader;
