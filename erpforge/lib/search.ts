import { articles } from "@/data/articles";
import { allInterviewQuestions } from "@/data/interviews";

export function globalSearch(query: string) {
  const search = query.trim().toLowerCase();
  if (!search) {
    return [];
  }

  const questionMatches = allInterviewQuestions.filter((question) =>
    [question.question, question.answer, question.relatedTopics.join(" ")].join(" ").toLowerCase().includes(search)
  );

  const articleMatches = articles.filter((article) =>
    [article.title, article.excerpt, article.content, article.tags.join(" ")].join(" ").toLowerCase().includes(search)
  );

  return [
    ...questionMatches.map((question) => ({ type: "Question", title: question.question, href: `/interview-hub?query=${encodeURIComponent(question.question)}` })),
    ...articleMatches.map((article) => ({ type: "Article", title: article.title, href: `/knowledge-base/${article.slug}` })),
  ].slice(0, 10);
}
