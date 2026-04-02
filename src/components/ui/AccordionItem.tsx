import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  className?: string;
}

const AccordionItem = ({ question, answer, className }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border-b border-neutral-800", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 sm:py-5 text-left"
      >
        <span className="text-sm sm:text-base font-medium text-white pr-4">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-emerald-500 flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-neutral-400 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-neutral-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
