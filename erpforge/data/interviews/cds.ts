export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  example: string;
  interviewerExpectation: string;
  relatedTopics: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const questions = [
  "How do CDS views differ from classical database views?",
  "How do you implement associations in CDS?",
  "What is the role of annotations in CDS?",
  "How do you create an abstract CDS entity?",
  "How do you expose CDS data to OData?",
  "How do you optimize CDS performance for list reporting?",
  "What is the purpose of a consumption view?",
  "How do you use input parameters in a CDS view?",
  "How would you model a left outer join in CDS?",
  "How do you manage currency and quantity semantics in CDS?",
];

function buildCdsQuestions(count: number): InterviewQuestion[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `cds-${index + 1}`,
    question: `${questions[index % questions.length]} ${index + 1}`,
    answer: `A mature answer highlights annotations, semantics, join strategies and how the CDS view supports the UI or service layer.`,
    example: `define view entity z_i_sales_order as select from ekko ...`,
    interviewerExpectation: "The candidate should connect CDS concepts to business use cases and runtime behavior.",
    relatedTopics: ["CDS", "Annotations", "OData", "S/4HANA"],
    difficulty: ["Beginner", "Intermediate", "Advanced"][index % 3] as InterviewQuestion["difficulty"],
  }));
}

export const cdsQuestions = buildCdsQuestions(50);
