import React from "react";

// Project cover images
import project1Cover from "../assets/projects/colegioAthenas/cover.png";
import project2Cover from "../assets/projects/oportunidadeRural/cover.png";
import project3Cover from "../assets/projects/travisScott/cover.png";
import project4Cover from "../assets/projects/tsVet/cover.png";
import project5Cover from "../assets/projects/lolaModa/cover.png";
import project6Cover from "../assets/projects/nordMenswear/cover.png";

type Project = {
  id: string;
  title: string;
  technologies: string[];
  imageSrc: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Colegio Athenas",
    technologies: ["React", "CSS", "Javascript", "Git", "Figma"],
    imageSrc: project1Cover,
  },
  {
    id: "project-2",
    title: "Oportunidade Rural",
    technologies: ["HTML", "CSS", "Javascript", "Git", "Figma"],
    imageSrc: project2Cover,
  },
  {
    id: "project-3",
    title: "Travis Scott",
    technologies: ["HTML", "CSS", "Javascript", "Git", "Figma"],
    imageSrc: project3Cover,
  },
  {
    id: "project-4",
    title: "TS Vet",
    technologies: ["HTML", "CSS", "Javascript", "Git", "Figma"],
    imageSrc: project4Cover,
  },
  {
    id: "project-5",
    title: "Lola Moda",
    technologies: ["Nuvemshop", "CSS", "Javascript"],
    imageSrc: project5Cover,
  },
  {
    id: "project-6",
    title: "Nord Menswear",
    technologies: ["Nuvemshop", "CSS", "Javascript"],
    imageSrc: project6Cover,
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="px-6 pb-24 pt-16 lg:px-24 lg:pb-32 lg:pt-24"
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl lg:text-6xl md:text-right">
          My projects
        </h2>

        <p className="max-w-xs text-sm text-gray-700 sm:text-base">
          Explore some of the personal projects I've worked on in the past. Click on any project to see more details.
        </p>
      </div>

      {/* Grid of project cards */}
      {/* TODO: on click, open a horizontal-scroll project detail view */}
      <div className="mt-24 grid gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="cursor-pointer">
            {/* Project image */}
            {/* TODO: handle hover states when design is ready */}
            <div className="mb-4 overflow-hidden rounded-3xl">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>

            {/* Technologies list */}
            <div className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
              {project.technologies.join(" • ")}
            </div>

            {/* Project title */}
            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {project.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
