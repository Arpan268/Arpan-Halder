import { useState, useEffect } from "react";

export default function Typewriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
}: {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const type = () => {
            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
            } else {
                setText(currentWord.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="inline wrap-break-word">
            {text}
            <span className="inline-block w-1 h-[0.9em] bg-teal-400 ml-1 animate-pulse align-middle -mt-1"></span>
        </span>
    );
}