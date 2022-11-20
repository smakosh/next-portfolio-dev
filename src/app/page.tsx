import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';
import Scripts from 'components/Scripts';

const getRepos = async (): Promise<any> => {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `
				query viewer {
					viewer {
						repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
									languages(first: 3) {
										nodes {
											id
											name
										}
									}
								}
							}
						}
					}
				}
			`,
    }),
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const HomePage = async () => {
  const res = await getRepos();

  return (
    <>
      <Scripts />
      <AllProviders>
        <Intro />
        <Projects data={res.data.viewer.repositories.edges} />
        <Skills />
        <Contact />
        <Footer />
      </AllProviders>
    </>
  );
};

export default HomePage;
