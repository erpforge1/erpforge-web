import { abapQuestions } from "./abap";
import { cdsQuestions } from "./cds";
import { odataQuestions } from "./odata";
import { rapQuestions } from "./rap";

export type InterviewCategory = "ABAP" | "RAP" | "CDS Views" | "OData" | "S4HANA";

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  example: string;
  interviewerExpectation: string;
  relatedTopics: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const interviewCategories = [
  { slug: "abap", label: "ABAP", questions: abapQuestions },
  { slug: "rap", label: "RAP", questions: rapQuestions },
  { slug: "cds", label: "CDS Views", questions: cdsQuestions },
  { slug: "odata", label: "OData", questions: odataQuestions },
  { slug: "s4hana", label: "S4HANA", questions: [...abapQuestions].slice(0, 20) },
];

export const allInterviewQuestions = interviewCategories.flatMap((category) =>
  category.questions.map((question) => ({ ...question, category: category.label }))
);

export function filterInterviewQuestions({
  query,
  category,
  difficulty,
}: {
  query?: string;
  category?: string;
  difficulty?: string;
}) {
  const normalizedQuery = query?.trim().toLowerCase() || "";

  return allInterviewQuestions.filter((question) => {
    const matchesCategory = category && category !== "All" ? question.category === category : true;
    const matchesDifficulty = difficulty && difficulty !== "All" ? question.difficulty === difficulty : true;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [question.question, question.answer, question.relatedTopics.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesDifficulty && matchesQuery;
  });
}
