import getRepos from '../../../lib/getRepos';
import RepositoryComponent from '../../ui/Repository';

const Projects = async () => {
  const data = await getRepos();

  return (
    <div className="container py-8" id="projects" data-cy="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
        {data.length > 0 &&
          data.map(({ node }) => {
            if (!node) return null;
            return <RepositoryComponent key={`node-${node.id}`} {...node} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
