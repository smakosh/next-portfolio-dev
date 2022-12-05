import AllProviders from 'components/AllProviders';
import Contact from 'components/modules/Contact';
import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Scripts from 'components/Scripts';
import Footer from 'components/ui/theme/Footer';
import config from 'data/config';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title={'defaultTitle'}
        description={'defaultDescription'}
        // additionalMetaTags={[
        //   {
        //     name: 'image',
        //     content: `${url}/assets/thumbnail/thumbnail.png`,
        //   },
        //   {
        //     property: 'og:title',
        //     content: defaultTitle,
        //   },
        //   {
        //     property: 'og:description',
        //     content: defaultDescription,
        //   },
        //   {
        //     property: 'og:url',
        //     content: url,
        //   },
        //   {
        //     property: 'og:image',
        //     content: `${url}/assets/thumbnail/thumbnail.png`,
        //   },
        //   {
        //     name: 'twitter:url',
        //     content: url,
        //   },
        //   {
        //     name: 'twitter:title',
        //     content: defaultTitle,
        //   },
        //   {
        //     name: 'twitter:description',
        //     content: defaultDescription,
        //   },
        //   {
        //     name: 'twitter:image:src',
        //     content: `${url}/assets/thumbnail/thumbnail.png`,
        //   },
        //   {
        //     name: 'twitter:image',
        //     content: `${url}/assets/thumbnail/thumbnail.png`,
        //   },
        //   {
        //     property: 'og:type',
        //     content: 'website',
        //   },
        // ]}
      />

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
