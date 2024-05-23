import { Suspense } from 'react';
import getRepos from 'lib/getRepos';
import Repository from 'components/ui/Repository';
import { Skeleton } from 'components/ui/skeleton';

const Projects = () => (
  <div className="container py-8" id="projects">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <Suspense fallback={<ReposSkeleton />}>
      <Repos />
    </Suspense>
  </div>
);

const Repos = async () => {
  const data = await getRepos();

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
      {data
        ? data.map(({ node }) => {
            if (!node) return null;
            return <Repository key={node.id} {...node} />;
          })
        : null}
    </div>
  );
};

const ReposSkeleton = () => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
    {Array.from({ length: 10 }, (_, i) => 1 + i).map((item) => (
      <Skeleton key={`repo-${item}`} className="h-[160px] w-full" />
    ))}
  </div>
);

export default Projects;
