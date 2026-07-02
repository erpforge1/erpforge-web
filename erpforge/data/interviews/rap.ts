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
  "How do you define a RAP managed transaction behavior?",
  "What is the difference between managed and unmanaged RAP BO?",
  "How do you expose a RAP behavior for draft handling?",
  "How do you implement a validation in RAP?",
  "How do you consume a RAP BO from a UI service?",
  "Explain the role of the behavior definition in RAP.",
  "How do you add a determination to a RAP BO?",
  "What impact does draft handling have on business logic?",
  "How do you optimize RAP read operations for list pages?",
  "How do you create a service binding for a RAP BO?",
];

function buildRapQuestions(count: number): InterviewQuestion[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `rap-${index + 1}`,
    question: `${questions[index % questions.length]} ${index + 1}`,
    answer: `A strong answer explains the RAP artifact, the business process and the expected behavior for UI and service consumption.`,
    example: `DEFINE behavior FOR zrap_order ...`,
    interviewerExpectation: "The interviewer expects clarity on RAP architecture, service exposure and behavior implementation.",
    relatedTopics: ["RAP", "CDS", "OData", "Draft"],
    difficulty: ["Beginner", "Intermediate", "Advanced"][index % 3] as InterviewQuestion["difficulty"],
  }));
}

export const rapQuestions = buildRapQuestions(50);
