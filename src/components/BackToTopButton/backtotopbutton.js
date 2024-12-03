import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll behavior
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "white",
            borderRadius: "80%",
            width: "50px",
            height: "50px",
            fontSize: "20px",
            color: "yellow",
            cursor: "pointer",
            border:"0.5rem solid yellow",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
