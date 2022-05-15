import axios from 'axios';
import { InferGetStaticPropsType, NextPage } from 'next';
import { RepositoryEdge } from 'generated/graphql';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ repos }) => (
  <Layout>
    <SEO />
    <Intro />
    <Projects data={repos} />
    <Skills />
    <Contact />
  </Layout>
);

export const getStaticProps = async () => {
  const res = await axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    data: {
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
    },
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const repos: RepositoryEdge[] = res.data.data.viewer.repositories.edges;

  return {
    props: {
      repos,
    },
    revalidate: 10,
  };
};

export default HomePage;
