export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  publishedDate: string;
  tags: string[];
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "article-1",
    title: "RAP Basics for SAP Developers",
    slug: "rap-basics-for-sap-developers",
    content: "RAP is the modern ABAP programming model for building transactional apps and services in SAP S/4HANA. Start with the business object, behavior definition and service exposure to create a clean architecture.",
    excerpt: "A practical guide to understanding RAP artifacts and service design.",
    category: "RAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-01",
    tags: ["RAP", "ABAP", "S/4HANA"],
    featured: true,
  },
  {
    id: "article-2",
    title: "CDS Views in Modern SAP Development",
    slug: "cds-views-in-modern-sap-development",
    content: "CDS views provide the semantic layer that powers OData services and modern UI applications. Focus on annotations, associations and consumption patterns to make your solution easier to maintain.",
    excerpt: "How CDS views help structure reusable SAP business semantics.",
    category: "CDS",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-02",
    tags: ["CDS", "Annotations", "OData"],
  },
  {
    id: "article-3",
    title: "ABAP Performance Tuning Essentials",
    slug: "abap-performance-tuning-essentials",
    content: "Performance tuning in ABAP starts with avoiding unnecessary database access, reducing nested loop complexity and using appropriate table types. Always validate the database access path before you optimize the code.",
    excerpt: "Practical techniques for improving ABAP report and application performance.",
    category: "Performance",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-03",
    tags: ["ABAP", "Performance", "Tuning"],
  },
  {
    id: "article-4",
    title: "OData Design Patterns for SAP Services",
    slug: "odata-design-patterns-for-sap-services",
    content: "Design OData services with clear entity sets, strict paging and documented operations. A clean contract helps UI developers and backend teams stay aligned.",
    excerpt: "A modern approach to crafting robust OData APIs in SAP landscapes.",
    category: "OData",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-04",
    tags: ["OData", "API", "Gateway"],
  },
  {
    id: "article-5",
    title: "S/4HANA Technical Architecture Guide",
    slug: "s4hana-technical-architecture-guide",
    content: "Understand how the application, database and service layers work together in S/4HANA. This helps you make better design choices for extensions and integrations.",
    excerpt: "A focused guide to S/4HANA technical architecture for consultants and developers.",
    category: "S4HANA",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-05",
    tags: ["S/4HANA", "Architecture", "Development"],
  },
  {
    id: "article-6",
    title: "How to Structure ABAP OO Applications",
    slug: "how-to-structure-abap-oo-applications",
    content: "ABAP Objects improves maintainability when you keep business logic in classes, separate persistence access and expose simple interfaces to callers.",
    excerpt: "A practical blueprint for building maintainable ABAP OO applications.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-06",
    tags: ["ABAP", "OO", "Architecture"],
  },
  {
    id: "article-7",
    title: "RAP Behavior and Determinations Explained",
    slug: "rap-behavior-and-determinations-explained",
    content: "Determinations and validations are the core of business logic in RAP. They help keep the transactional behavior consistent and easy to reason about.",
    excerpt: "Understand what determinations do and where they fit inside RAP behavior.",
    category: "RAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-07",
    tags: ["RAP", "Behavior", "Determination"],
  },
  {
    id: "article-8",
    title: "Using Annotations in CDS Views",
    slug: "using-annotations-in-cds-views",
    content: "Annotations guide how the CDS view is interpreted by the UI layer, OData service and other consumers. Use them carefully to make intent explicit.",
    excerpt: "A concise guide to using annotations effectively in CDS views.",
    category: "CDS",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-08",
    tags: ["CDS", "Annotations", "Semantics"],
  },
  {
    id: "article-9",
    title: "Understanding RFC and BAPI Design",
    slug: "understanding-rfc-and-bapi-design",
    content: "RFC and BAPI interfaces remain relevant in many SAP landscapes. Focus on clarity, exception handling and a well-documented contract for successful integration.",
    excerpt: "A practical introductory guide to RFC and BAPI design.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-09",
    tags: ["ABAP", "RFC", "BAPI"],
  },
  {
    id: "article-10",
    title: "ALV Grid Design for Business Reports",
    slug: "alv-grid-design-for-business-reports",
    content: "ALV grids remain useful for many classic reporting scenarios. Clean layout, sorting and user-friendly formatting make a big difference to adoption.",
    excerpt: "How to create effective ALV report presentations with better usability.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-10",
    tags: ["ABAP", "ALV", "Reports"],
  },
  {
    id: "article-11",
    title: "Performance Checklist for CDS and OData",
    slug: "performance-checklist-for-cds-and-odata",
    content: "Review join complexity, selected fields and payload size when you tune CDS and OData services. Small design improvements can have a large effect on responsiveness.",
    excerpt: "A checklist to improve CDS and OData service performance.",
    category: "Performance",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-11",
    tags: ["CDS", "OData", "Performance"],
  },
  {
    id: "article-12",
    title: "Debugging SAP Applications Effectively",
    slug: "debugging-sap-applications-effectively",
    content: "Strong debugging habits save a lot of time. Reproduce the issue, isolate the layer and validate assumptions before changing production code.",
    excerpt: "A structured approach to debugging SAP applications.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-12",
    tags: ["ABAP", "Debugging", "Support"],
  },
  {
    id: "article-13",
    title: "RAP Draft Handling Basics",
    slug: "rap-draft-handling-basics",
    content: "Draft handling is one of the most important aspects of transactional applications built with RAP. Use it carefully to preserve a user-friendly experience.",
    excerpt: "How draft handling changes the user experience in RAP.",
    category: "RAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-13",
    tags: ["RAP", "Draft", "UX"],
  },
  {
    id: "article-14",
    title: "Understanding CDS Annotations for UI Consumption",
    slug: "understanding-cds-annotations-for-ui-consumption",
    content: "Annotations connect semantic meaning to the UI layer. They are essential when you want your SAP app to behave in a polished way.",
    excerpt: "How CDS annotations improve user experience in UI consumption.",
    category: "CDS",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-14",
    tags: ["CDS", "UI", "Annotations"],
  },
  {
    id: "article-15",
    title: "Modern ABAP Syntax Patterns",
    slug: "modern-abap-syntax-patterns",
    content: "Modern ABAP makes code easier to read and safer to maintain. Learn the patterns that help you move from older styles to current best practices.",
    excerpt: "Adopt modern ABAP syntax to write cleaner and more expressive code.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-15",
    tags: ["ABAP", "Syntax", "Modern"],
  },
  {
    id: "article-16",
    title: "S/4HANA Extensibility Options",
    slug: "s4hana-extensibility-options",
    content: "S/4HANA extensibility is about choosing the right integration point. Keep the extension stable and upgrade-safe by understanding the supported patterns.",
    excerpt: "A guide to extensibility choices in S/4HANA.",
    category: "S4HANA",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-16",
    tags: ["S/4HANA", "Extensibility", "Upgrade"],
  },
  {
    id: "article-17",
    title: "How to Prepare for SAP Technical Interviews",
    slug: "how-to-prepare-for-sap-technical-interviews",
    content: "Preparation is about combining theory, practical examples and an ability to explain trade-offs clearly. Build stories around the problem you solved.",
    excerpt: "A practical framework for interview preparation in SAP technical roles.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-17",
    tags: ["Interview", "Career", "ABAP"],
  },
  {
    id: "article-18",
    title: "OData Pagination and Filtering Strategies",
    slug: "odata-pagination-and-filtering-strategies",
    content: "Pagination and filtering are essential for reliable service behavior. They reduce payload size and make list pages faster and easier to consume.",
    excerpt: "A practical approach to pagination and filtering in OData.",
    category: "OData",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-18",
    tags: ["OData", "Pagination", "Filtering"],
  },
  {
    id: "article-19",
    title: "Designing Scalable ABAP Solutions",
    slug: "designing-scalable-abap-solutions",
    content: "Scalable ABAP applications start with modular design, clear separation of concerns and careful data access decisions. Plan for change from day one.",
    excerpt: "How to design ABAP solutions that remain maintainable over time.",
    category: "ABAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-19",
    tags: ["ABAP", "Design", "Scalable"],
  },
  {
    id: "article-20",
    title: "RAP vs Traditional ABAP Approaches",
    slug: "rap-vs-traditional-abap-approaches",
    content: "RAP offers a more structured model than traditional ABAP programs. Choose the approach based on business needs, team maturity and extension strategy.",
    excerpt: "How RAP compares with classical ABAP application approaches.",
    category: "RAP",
    author: "Srivatsa Palani",
    publishedDate: "2026-07-20",
    tags: ["RAP", "ABAP", "Strategy"],
  },
];

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function searchArticles(query: string) {
  const search = query.toLowerCase();
  return articles.filter((article) => {
    return [article.title, article.excerpt, article.content, article.tags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(search);
  });
}
