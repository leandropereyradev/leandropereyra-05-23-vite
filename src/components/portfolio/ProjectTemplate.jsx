import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/projects.json";
import HeaderDetail from "./HeaderDetail";
import ArticleDetail from "./ArticleDetail";

const ProjectTemplate = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const selectedProject = data.filter((p) => p.id === projectId);

    setProject(selectedProject);
  }, [projectId]);

  return project?.map((project) => (
    <div key={project.name}>
      <HeaderDetail {...project} />

      <ArticleDetail {...project} />
    </div>
  ));
};

export default ProjectTemplate;
