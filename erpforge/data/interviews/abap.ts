export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  example: string;
  interviewerExpectation: string;
  relatedTopics: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const questionTemplates = [
  "How do you optimize an ABAP SELECT statement for large datasets?",
  "Explain the difference between internal table operations using LOOP and READ TABLE.",
  "How do you handle exceptions in ABAP OO classes?",
  "What are the key differences between classic ABAP and ABAP Objects?",
  "How would you design a reusable function module for a reporting scenario?",
  "What is the purpose of table buffering in ABAP?",
  "How do you debug a performance issue in an ABAP report?",
  "Describe how you would structure a modular ABAP program for maintainability.",
  "How do you choose between SELECT SINGLE and SELECT INTO TABLE?",
  "How do you implement dynamic WHERE clauses safely in ABAP?",
];

const answerTemplates = [
  "Use indexed access, minimize database round trips and select only the required columns.",
  "Prefer modern ABAP constructs, limit nested loops and use sorted or hashed tables where appropriate.",
  "Use exception classes, structured error handling and clear logging to make the program robust.",
  "Separate business logic into classes, use interfaces and keep report logic thin for easier testing.",
  "Make the component reusable by parameterizing inputs, returning structured results and documenting side effects.",
];

function buildAbapQuestions(count: number): InterviewQuestion[] {
  return Array.from({ length: count }, (_, index) => {
    const template = questionTemplates[index % questionTemplates.length];
    const answer = `${answerTemplates[index % answerTemplates.length]} In practice, this means validating inputs and keeping the logic easy to trace during support incidents.`;
    return {
      id: `abap-${index + 1}`,
      question: `${template} ${index + 1}`,
      answer,
      example: `REPORT z_demo_${index + 1}.\nSELECT * FROM ekpo INTO TABLE @DATA(lt_ekpo) UP TO 100 ROWS.`,
      interviewerExpectation: "The candidate should demonstrate practical knowledge, clear reasoning and awareness of performance trade-offs.",
      relatedTopics: ["Performance", "ALV", "RFC", "OO ABAP"],
      difficulty: ["Beginner", "Intermediate", "Advanced"][index % 3] as InterviewQuestion["difficulty"],
    };
  });
}

export const abapQuestions = buildAbapQuestions(100);
