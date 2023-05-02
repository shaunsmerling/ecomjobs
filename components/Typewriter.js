import React, { useState, useEffect } from "react";

const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentWordLength = currentWord.length;
      const currentWordShouldDelete = isDeleting || currentWordLength === words[currentWordIndex].length;
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[nextWordIndex];

      setIsDeleting(currentWordShouldDelete);
      setCurrentWord(nextWord.substring(0, currentWordShouldDelete ? currentWordLength - 1 : currentWordLength + 1));
      setCurrentWordIndex(nextWordIndex);
    },  500);

    return () => {
      clearInterval(intervalId);
    }
  }, [currentWord, currentWordIndex, isDeleting, words]);

  return <span>{currentWord}</span>;
};

export default Typewriter;
