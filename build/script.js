// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const pageOptions = document.getElementById("page-options");

  const hamburgerIcon = document.getElementById("hamburger-icon");
  const xIcon = document.getElementById("x-icon");

  const bodyElement = document.querySelector("body");
  const modeIcon = document.querySelectorAll(".mode-icon");
  const toggleButton = document.querySelectorAll(".dark-mode-toggle");
  const toggleKnob = document.querySelectorAll(".toggle-knob");



  toggleButton.forEach((item)=>{
    item.addEventListener("click", () => {

      bodyElement.classList.toggle("dark");
      if (bodyElement.classList.contains("dark")) {
        modeIcon.forEach((item)=>{
          item.src = "./img/sun.svg"; // Switch to sun icon in dark mode
        });
        
        toggleKnob.forEach((item)=>{
          item.classList.add('translate-x-6');
          console.log(toggleKnob)
        })
        
      } else {
        toggleKnob.forEach((item)=>{
          item.classList.remove('translate-x-6');
        })
        modeIcon.forEach((item)=>{
          item.src = "./img/moon.svg"; // Switch to moon icon in light mode
        });
      }
    });
  })




  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden"); // Toggle the 'hidden' class
    pageOptions.classList.toggle("hidden"); // Toggle the 'hidden' class

    hamburgerIcon.classList.toggle("hidden");
    xIcon.classList.toggle("hidden");
  });




  const words = ["#word-1", "#word-2", "#word-3", "#word-4"]; // IDs of the words
  let currentWordIndex = 0;

  // Function to animate the letters of a word
  function animateWord(wordId) {
    const letters = document.querySelectorAll(`${wordId} span`);
    // Use GSAP to stagger the animation of each letter
    gsap.fromTo(
      letters,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.05,
        stagger: 0.05, // Delay between each letter
        ease: "power2.out", // Easing
      }
    );
  }

  // Function to hide the current word and show the next one
  function switchWord() {
    const currentWord = words[currentWordIndex];
    const nextWord = words[(currentWordIndex + 1) % words.length];

    // Hide current word
    gsap.to(currentWord, {
      opacity: 0,
      y: "-100%",
      duration: 0.5,
      onComplete: () => {
        document.querySelector(currentWord).classList.add("hidden");
        currentWordIndex = (currentWordIndex + 1) % words.length;

        // Show the next word
        document.querySelector(nextWord).classList.remove("hidden");
        gsap.fromTo(
          nextWord,
          { opacity: 0, y: "100%" },
          { opacity: 1, y: "0%", duration: 0.5 }
        );
        animateWord(nextWord);
      },
    });
  }

  // Initial animation
  animateWord("#word-1");

  // Interval to switch words every 3 seconds
  setInterval(switchWord, 3000);
});
