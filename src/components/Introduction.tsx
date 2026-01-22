import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Introduction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [words, setWords] = useState<string[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"]
  });

  useEffect(() => {
    const fullText = "Your creative process deserves better. You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves. That's why we built Fusion.";
    setWords(fullText.split(" "));
  }, []);

  return (
    <section ref={containerRef} className="py-32 min-h-[80vh]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Introducing Fusion
            </span>
          </div>
          
          <h2 ref={textRef} className="text-4xl md:text-5xl font-medium leading-tight">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + (1 / words.length);
              
              return (
                <Word key={index} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

interface WordProps {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress, 
    range, 
    ["hsl(0 0% 65%)", "hsl(0 0% 100%)"]
  );

  // Check if this is part of the first sentence
  const isFirstSentence = ["Your", "creative", "process", "deserves", "better."].includes(children);

  return (
    <motion.span 
      style={{ 
        opacity,
        color: isFirstSentence ? color : undefined 
      }}
      className={`inline-block mr-[0.25em] ${!isFirstSentence ? 'text-muted-foreground' : ''}`}
    >
      {children}
    </motion.span>
  );
};

export default Introduction;
