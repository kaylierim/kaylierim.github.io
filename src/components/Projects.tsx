import Text from "@components/Text";
import Card from "@components/Card";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="tablet:px-4">
      <Text text="My Projects" type="Heading2" className="flex mb-5" />
      {projects.map((project, index) => (
        <Card
          key={index}
          img={project.img}
          header={project.header}
          subheader={project.subheader}
          content={project.content}
          link={project.link}
          headerFirst={false}
          className="w-[1000px] mb-5 h-[250px] tablet:w-full"
          hasModal={false}
        />
      ))}
    </div>
  );
}
