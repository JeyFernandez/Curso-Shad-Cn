import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const item = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Can I use it in production?",
    answer: "Yes. It is ready for production use.",
  },
  {
    id: "item-3",
    question: "Is it free?",
    answer: "Yes. It is free to use.",
  },
  {
    id: "item-4",
    question: "Can I contribute to it?",
    answer: "Yes. You can contribute to it.",
  },
];
export default function Page() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {item.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
