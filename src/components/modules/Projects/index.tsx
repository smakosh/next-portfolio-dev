import { useTheme } from 'providers/ThemeProvider';
import { RepositoryEdge } from 'generated/graphql';
import { Card, TitleWrap } from 'components/ui/Card';
import Container from 'components/ui/Container';
import Fork from 'components/ui/Icons/Fork';
import Star from 'components/ui/Icons/Star';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const Projects = ({ data }: { data: RepositoryEdge[] }) => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {data &&
          data.map(({ node }) => {
            if (!node) return null;
            return (
              <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
                <Card theme={theme}>
                  <Content>
                    <h3>{node.name}</h3>
                    <p>{node.description}</p>
                  </Content>
                  <TitleWrap>
                    <Stats theme={theme} stars>
                      <div>
                        <Star color={theme === 'light' ? '#000' : '#fff'} />
                        <span>{node.stargazers.totalCount}</span>
                      </div>
                      <div>
                        <Fork color={theme === 'light' ? '#000' : '#fff'} />
                        <span>{node.forkCount}</span>
                      </div>
                    </Stats>
                    <Stats theme={theme}>
                      <Languages theme={theme}>
                        {node.languages!.nodes!.map((item) => (
                          <span key={item!.id}>{item!.name}</span>
                        ))}
                      </Languages>
                    </Stats>
                  </TitleWrap>
                </Card>
              </Item>
            );
          })}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
