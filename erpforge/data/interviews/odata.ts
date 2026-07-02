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
  "How do you model an OData entity set for SAP RAP?",
  "What is the difference between GET_LIST and GET_ENTITY?",
  "How do you handle deep inserts in OData?",
  "How do you implement navigation properties?",
  "What is the purpose of $filter and $expand?",
  "How do you optimize OData performance for large payloads?",
  "How do you secure OData services in SAP?",
  "How do you troubleshoot 400 and 500 responses?",
  "How do you support pagination in OData?",
  "How do you expose custom actions in a service?",
];

function buildOdataQuestions(count: number): InterviewQuestion[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `odata-${index + 1}`,
    question: `${questions[index % questions.length]} ${index + 1}`,
    answer: `A good answer covers API design, request semantics and practical guardrails for production-grade OData services.`,
    example: `GET /sap/opu/odata/sap/zservice`,
    interviewerExpectation: "The candidate should explain the service contract and the behaviors expected by consuming applications.",
    relatedTopics: ["OData", "RAP", "CDS", "Gateway"],
    difficulty: ["Beginner", "Intermediate", "Advanced"][index % 3] as InterviewQuestion["difficulty"],
  }));
}

export const odataQuestions = buildOdataQuestions(30);
