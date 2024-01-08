import ContactButton from "../components/ContactButton";
import AnimatedText from "../components/AnimatedText";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const HeroSection: React.FC<{ setShowHero: (v: boolean) => void }> = ({
    setShowHero,
}) => {
    const handleShowDetails = () => setShowHero(false);

    return (
        <div className="w-full h-full p-6 flex flex-col justify-center lg:max-w-[60%] mx-auto gap-10">
            <div className="w-full flex flex-col mx-auto gap-6 relative">
                <img
                    src="/me.png"
                    height="200px"
                    width="150px"
                    className="rounded-full"
                />
                <h3 className="text-white font-mono text-base text-bold">
                    Hey There, I'm
                </h3>
                <h1 className="text-slate-300 font-bold text-3xl sm:text-4xl md:text-6xl selection:bg-transparent selection:text-primary-400">
                    {"Mahabub Ahmed".split("").map((str, i) => (
                        <AnimatedText
                            key={"first-name-" + str + i}
                            str={str}
                            idx={i}
                        />
                    ))}
                </h1>
                <h4 className="text-primary-400 font-mono text-xl md:text-3xl text-bold">
                    Full-Stack Developer
                </h4>
                <p className="text-slate-400">
                    I am a full-stack web developer passionate about creating
                    attractive and user-friendly websites. With a strong
                    background in crafting responsive designs, I specialize in
                    clean, semantic, and reusable code. My expertise includes
                    HTML, CSS, Bootstrap, JavaScript, and React. I also have
                    intermediate proficiency in Next.js, Node.js, Express.js,
                    and MongoDB. If you're looking for a full-stack developer to
                    enhance your team, I'm eager to showcase how my skills align
                    with your needs. Feel free to contact me via email or using
                    the provided information.
                </p>
                <ContactButton />
            </div>

            <div className="flex flex-row items-center gap-4">
                <button
                    onClick={handleShowDetails}
                    className="text-slate-300 rounded-full py-4 h-[50px] w-[100px] border border-slate-400 lg:hover:text-primary-400 lg:hover:border-primary-400 transition-colors duration-300 flex flex-row items-center justify-start overflow-hidden relative"
                >
                    <FaChevronRight className="hero-enter-btn" />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "0.4s" }}
                    />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "0.8s" }}
                    />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "1.2s" }}
                    />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "1.6s" }}
                    />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
