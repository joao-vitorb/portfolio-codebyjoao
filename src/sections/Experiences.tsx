import React from "react";

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets?: string[];
};

// TODO: move this data to a separate config file when the list grows
const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Auster Contabilidade",
    role: "IT Intern",
    period: "October 2023 - April 2025",
    bullets: [
      "Involvement in the development of web platforms and maintenance of existing applications, including creating interfaces in Figma for systems and Power BI dashboards. Focus on clean code, project organization, and version control with Git.",
      "Development of a gamified web application that increased the company’s internal satisfaction rate from 88% to 96%, enabling employees to exchange virtual coins for real rewards. Tech stack: frontend in ReactJS with TypeScript and TailwindCSS; backend in Node.js (Express) with MySQL, JWT authentication, real-time updates with Socket.IO, Redis for caching, and integration with the Feedz API to consume user data and coin balances.",
      "Participation in the development of a platform to integrate accounting, tax, payroll, and fee management modules, including automation of tax routines, NF-e import, and report generation. Tech stack: frontend in React with TypeScript; backend in Node.js (Express) with MySQL, use of Docker and CI/CD (GitHub Actions) for continuous deployment, and OAuth2/JWT for API security.",
      "Collaboration in the development of a system for automatic calculation and validation of tax and labor declarations, reducing manual errors and increasing accounting team productivity. Tech stack: frontend in Next.js (React with TypeScript and TailwindCSS); backend in Node.js (Express) with MySQL database using Prisma as ORM, Redis for caching, and RabbitMQ for messaging, with deployment in Docker containers and configured CI/CD pipelines.",
      "Support in the creation of a complete solution for management of contracts, clients, rented units, and payments, including occupancy dashboards and administrative reports, replacing manual controls with digital processes. Tech stack: frontend in React with TypeScript and TailwindCSS; backend in Node.js (Express) integrated with MongoDB, and use of Firebase Authentication.",
    ],
  },
  {
    id: "exp-2",
    company: "Nord Menswear",
    role: "Administrative Assistant",
    period: "November 2022 - October 2023",
    bullets: [
      "Recording sales at the cash register.",
      "Payment of bills and invoice verification.",
      "Bank reconciliation.",
      "Organizing incoming and outgoing store inventory.",
    ],
  },
];

const Experiences: React.FC = () => {
  return (
    <section
      id="experience"
      className="px-6 pb-24 pt-16 lg:px-24 lg:pb-32 lg:pt-24"
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          My experiences
        </h2>

        <p className="max-w-xs text-sm text-gray-700 sm:text-base md:text-right">
          A brief timeline of some of the places and projects that have shaped
          my journey so far.
        </p>
      </div>

      {/* Timeline */}
      {/* TODO: add subtle scroll / fade-in animation for each experience item */}
      <div className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-[4px] bg-blue-600" />

        <div className="space-y-16">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative max-w-xl pl-8 text-gray-900 sm:pl-10"
            >
              {/* Connector from vertical line to the content */}
              <div className="absolute left-0 top-3 h-[4px] w-6 bg-blue-600" />

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {experience.company}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-800 sm:text-base">
                  {experience.role}
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-600">{experience.period}</span>
                </p>

                {experience.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
                    {experience.bullets.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
