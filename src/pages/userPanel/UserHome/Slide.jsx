import { useEffect, useState } from "react";

const images = [
  "/slider/slide1.jpg",
  "/slider/slide2.jpg",
  "/slider/slide3.jpg",
  "/slider/slide4.jpg",
  "/slider/slide5.jpg",
  "/slider/slide6.jpg",
  "/slider/slide7.jpg",
  "/slider/slide8.jpg",
];

function SliderUser() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        style={navButtonStyle("left")}
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        style={navButtonStyle("right")}
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Dots indicator */}
      <div style={dotContainerStyle}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              ...dotStyle,
              backgroundColor: index === currentIndex ? "#fff" : "#888",
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

const navButtonStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "20px",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 10,
});

const dotContainerStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "10px",
};

const dotStyle = {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default SliderUser;
