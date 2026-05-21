import {
  FaChartBar,
  FaDatabase,
  FaPython,
  FaTable,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type Service = {
  slug: string;
  Icon: IconType;
  title: string;
  short: string;
  long: string;
  deliverables: string[];
  tools: string[];
  accent: "primary" | "accent";
};

export const services: Service[] = [
  {
    slug: "data-analysis",
    Icon: FaChartBar,
    title: "Data Analysis & Insights",
    short:
      "End-to-end exploratory analysis that turns messy data into clear, decision-ready insights.",
    long: "I dive deep into your raw data — cleaning, profiling and exploring it to surface meaningful patterns, anomalies and opportunities. The result is a narrative your stakeholders can actually act on.",
    deliverables: [
      "Data cleaning & profiling",
      "EDA notebooks with charts",
      "KPI definitions & benchmarks",
      "Executive insight summary",
    ],
    tools: ["Excel", "SQL", "Python", "Pandas"],
    accent: "primary",
  },
  {
    slug: "dashboards-bi",
    Icon: FaTable,
    title: "Interactive Dashboards",
    short:
      "Beautiful, fast Power BI & Tableau dashboards that make every metric one click away.",
    long: "From wireframe to live dashboard — I design and build interactive BI experiences that are tuned for performance, drillable, and aligned with your brand. Built for real decision-making, not vanity charts.",
    deliverables: [
      "Power BI / Tableau dashboards",
      "Data model & DAX measures",
      "Drill-through & filters UX",
      "Refresh schedule & docs",
    ],
    tools: ["Power BI", "Tableau", "DAX"],
    accent: "accent",
  },
  {
    slug: "sql-data-modeling",
    Icon: FaDatabase,
    title: "SQL & Data Modeling",
    short:
      "Optimised SQL queries, clean schemas and reliable pipelines you can build on.",
    long: "I write production-grade SQL, design normalized schemas and build clean, reusable views so your team can ship reports without reinventing joins every week.",
    deliverables: [
      "Tuned queries & indexes",
      "Star/snowflake schema design",
      "Reusable views & CTEs",
      "Documentation",
    ],
    tools: ["MySQL", "PostgreSQL", "BigQuery"],
    accent: "primary",
  },
  {
    slug: "python-automation",
    Icon: FaPython,
    title: "Python Automation",
    short:
      "Automate repetitive data tasks with clean, maintainable Python scripts.",
    long: "Whether it's scraping, ETL, scheduled reports or one-off data wrangling — I build small, reliable Python tools that save hours each week and reduce manual error.",
    deliverables: [
      "ETL & cleaning scripts",
      "Automated report generation",
      "Scheduled jobs",
      "Reusable utilities",
    ],
    tools: ["Python", "Pandas", "NumPy", "Jupyter"],
    accent: "accent",
  },
  {
    slug: "case-studies",
    Icon: FaProjectDiagram,
    title: "Business Case Studies",
    short:
      "Structured analysis of a business problem — from hypothesis to recommendation.",
    long: "I treat your problem like a real consulting engagement: framing the question, sourcing data, validating findings and presenting clear recommendations backed by numbers.",
    deliverables: [
      "Problem framing",
      "Hypothesis & metrics",
      "Findings deck",
      "Recommendations",
    ],
    tools: ["Excel", "SQL", "PowerPoint"],
    accent: "primary",
  },
  {
    slug: "data-storytelling",
    Icon: FaLightbulb,
    title: "Data Storytelling",
    short:
      "Turn dashboards into stories executives remember — clean visuals, sharp narrative.",
    long: "Numbers don't move people, stories do. I package your analysis into focused presentations and visuals that lead the audience to the insight — and the decision.",
    deliverables: [
      "Narrative structure",
      "Polished charts",
      "Insight deck",
      "Recording-ready visuals",
    ],
    tools: ["PowerPoint", "Figma", "Tableau"],
    accent: "accent",
  },
];
