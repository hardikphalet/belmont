import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';
import { people, locations, Person, Location } from '../data/redLightData';

const Container = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #808080;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${props => props.active ? '#808080' : '#666'};
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: color 0.2s;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.active ? '#808080' : 'transparent'};
    transition: background-color 0.2s;
  }
  
  &:hover {
    color: #808080;
  }
`;

const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  min-height: 500px;
`;

const ListContainer = styled.div`
  background-color: #2a2a2a;
  border-radius: 4px;
  padding: 1rem;
  height: fit-content;
`;

const ListItem = styled.div<{ active?: boolean }>`
  padding: 0.8rem;
  margin: 0.5rem 0;
  background-color: ${props => props.active ? '#333' : 'transparent'};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #333;
  }
`;

const DetailsContainer = styled.div`
  background-color: #2a2a2a;
  border-radius: 4px;
  padding: 2rem;
  min-height: 500px;
`;

const DetailsTitle = styled.h2`
  color: #808080;
  margin-bottom: 1rem;
`;

const DetailsContent = styled.div`
  color: #ccc;
  line-height: 1.6;
  white-space: pre-line;
`;

const Link = styled.a`
  color: #808080;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px dashed #808080;
  
  &:hover {
    color: #999;
  }
`;

const EvidenceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const EvidenceItem = styled.li`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #808080;
  }
`;

const RelationshipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const RelationshipItem = styled.li`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: #808080;
  }
`;

const TabBar = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#333' : '#2a2a2a'};
  border: none;
  color: ${props => props.active ? '#808080' : '#666'};
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 2px;
  
  &:hover {
    background: #333;
    color: #808080;
  }
`;

const RedLight = () => {
  const [activeTab, setActiveTab] = useState<'people' | 'locations'>('people');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [openTabs, setOpenTabs] = useState<Array<{ id: string; type: 'person' | 'location' }>>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const { play } = useAudio('/audio/briefing.wav');

  useEffect(() => {
    play();
  }, []);

  const handleLinkClick = (target: string, type: 'person' | 'location') => {
    const newTab = { id: target, type };
    setOpenTabs(prev => [...prev, newTab]);
    setCurrentTab(prev => prev + 1);
    setSelectedItem(target);
    setActiveTab(type === 'person' ? 'people' : 'locations');

    // Unlock the target item
    if (type === 'person' && people[target]) {
      people[target].unlocked = true;
    } else if (type === 'location' && locations[target]) {
      locations[target].unlocked = true;
    }
  };

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  const closeTab = (index: number) => {
    setOpenTabs(prev => prev.filter((_, i) => i !== index));
    if (currentTab === index) {
      setCurrentTab(Math.max(0, index - 1));
    } else if (currentTab > index) {
      setCurrentTab(prev => prev - 1);
    }
  };

  const renderDetails = () => {
    let itemToRender;
    
    if (openTabs.length > 0 && currentTab >= 0 && currentTab < openTabs.length) {
      const currentTabData = openTabs[currentTab];
      if (currentTabData) {
        itemToRender = currentTabData.type === 'person' 
          ? people[currentTabData.id] 
          : locations[currentTabData.id];
      }
    } else {
      itemToRender = selectedItem 
        ? (activeTab === 'people' ? people[selectedItem] : locations[selectedItem])
        : null;
    }

    if (!itemToRender) {
      return <DetailsContent>Select an item to view details</DetailsContent>;
    }

    const renderLinks = (links: Array<{ text: string; target: string; type: 'person' | 'location' }>) => {
      if (!links || links.length === 0) return itemToRender.description;

      let content = itemToRender.description;
      links.forEach(link => {
        if (link && link.text) {
          const regex = new RegExp(link.text, 'g');
          content = content.replace(regex, `<link>${link.text}</link>`);
        }
      });

      return content.split(/(<link>.*?<\/link>)/).map((part: string, index: number) => {
        if (part.startsWith('<link>') && part.endsWith('</link>')) {
          const text = part.slice(6, -7);
          const link = links.find(l => l && l.text === text);
          if (link) {
            return (
              <Link
                key={index}
                onClick={() => handleLinkClick(link.target, link.type)}
              >
                {text}
              </Link>
            );
          }
        }
        return part;
      });
    };

    const isPerson = openTabs.length > 0 
      ? (openTabs[currentTab]?.type === 'person')
      : (activeTab === 'people');

    if (isPerson) {
      const person = itemToRender as Person;
      return (
        <DetailsContent>
          <h3>{person.title}</h3>
          {renderLinks(person.links)}
          
          <h4>Relationships</h4>
          <RelationshipsList>
            {person.relationships?.map((rel, index) => (
              <RelationshipItem key={index}>{rel}</RelationshipItem>
            ))}
          </RelationshipsList>
        </DetailsContent>
      );
    } else {
      const location = itemToRender as Location;
      return (
        <DetailsContent>
          {renderLinks(location.links)}
          
          <h4>Evidence</h4>
          <EvidenceList>
            {location.evidence?.map((ev, index) => (
              <EvidenceItem key={index}>{ev}</EvidenceItem>
            ))}
          </EvidenceList>
        </DetailsContent>
      );
    }
  };

  const renderTabs = () => {
    if (openTabs.length === 0) {
      return (
        <>
          <TabContainer>
            <Tab 
              active={activeTab === 'people'} 
              onClick={() => setActiveTab('people')}
            >
              People
            </Tab>
            <Tab 
              active={activeTab === 'locations'} 
              onClick={() => setActiveTab('locations')}
            >
              Locations & Evidence
            </Tab>
          </TabContainer>

          <ContentArea>
            <ListContainer>
              {(activeTab === 'people' 
                ? Object.entries(people).filter(([_, person]) => person.unlocked).map(([id]) => id)
                : Object.entries(locations).filter(([_, location]) => location.unlocked).map(([id]) => id)
              ).map((item) => (
                <ListItem 
                  key={item}
                  active={selectedItem === item}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </ListItem>
              ))}
            </ListContainer>

            <DetailsContainer>
              <DetailsTitle>
                {activeTab === 'people' ? 'Person File' : 'Evidence Report'}
              </DetailsTitle>
              {renderDetails()}
            </DetailsContainer>
          </ContentArea>
        </>
      );
    }

    return (
      <>
        <TabBar>
          {openTabs.map((tab, index) => (
            <TabButton
              key={index}
              active={currentTab === index}
              onClick={() => handleTabClick(index)}
            >
              {tab.id}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(index);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  marginLeft: '8px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </TabButton>
          ))}
        </TabBar>

        <DetailsContainer>
          <DetailsTitle>
            {openTabs[currentTab]?.type === 'person' ? 'Person File' : 'Location Report'}
          </DetailsTitle>
          {renderDetails()}
        </DetailsContainer>
      </>
    );
  };

  return (
    <Container>
      <Header>
        <Title>Operation: Red Light</Title>
      </Header>
      {renderTabs()}
    </Container>
  );
};

export default RedLight; 