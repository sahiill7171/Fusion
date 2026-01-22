import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow."
  },
  {
    question: "Is there a learning curve?",
    answer: "Layers is designed to be intuitive from day one. Most users are productive within minutes, not hours. Our interface uses familiar patterns while introducing powerful features gradually."
  },
  {
    question: "How do you handle version control?",
    answer: "Every change is automatically saved and versioned. You can browse your complete history, compare versions side-by-side, and restore any previous state with a single click."
  },
  {
    question: "Can I work offline?",
    answer: "Yes! Layers works seamlessly offline. Your changes sync automatically when you're back online, with intelligent conflict resolution for team projects."
  },
  {
    question: "How does Layers handle collaboration?",
    answer: "Real-time collaboration is at the core of Layers. Multiple team members can edit simultaneously with live cursors, comments, and instant updates. No more version conflicts or waiting for files to sync."
  },
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              FAQs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">
            Questions? We've got{" "}
            <span className="text-muted-foreground">answers</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-border data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
