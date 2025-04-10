import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const AssignmentsContainer = styled.div`
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const Title = styled.h1`
  color: #808080;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const AssignmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
`;

const AssignmentCard = styled.div<{ clickable?: boolean }>`
  background-color: #2a2a2a;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  opacity: ${props => props.clickable ? '1' : '0.7'};
  &:hover {
    transform: ${props => props.clickable ? 'translateY(-5px)' : 'none'};
  }
`;

const AssignmentTitle = styled.h2`
  color: #808080;
  margin-bottom: 1rem;
`;

const AssignmentDetails = styled.p`
  color: #ccc;
  margin: 0.5rem 0;
`;

const Assignments = () => {
  const navigate = useNavigate();

  const handleCardClick = (operation: string) => {
    if (operation === 'Red Light') {
      navigate('/redlight');
    }
  };

  return (
    <AssignmentsContainer>
      <Header>
        <Title>ICA Assignments</Title>
      </Header>
      <AssignmentsGrid>
        <AssignmentCard 
          clickable={true}
          onClick={() => handleCardClick('Red Light')}
        >
          <AssignmentTitle>Operation: Red Light</AssignmentTitle>
          <AssignmentDetails>Location: Hampshire, England</AssignmentDetails>
          <AssignmentDetails>Target: Eleanor Belmont</AssignmentDetails>
          <AssignmentDetails>Status: Pending Investigation</AssignmentDetails>
        </AssignmentCard>
        <AssignmentCard clickable={false}>
          <AssignmentTitle>Operation: World of Tomorrow</AssignmentTitle>
          <AssignmentDetails>Location: Sapienza, Italy</AssignmentDetails>
          <AssignmentDetails>Target: Silvio Caruso</AssignmentDetails>
          <AssignmentDetails>Status: Completed</AssignmentDetails>
        </AssignmentCard>
        <AssignmentCard clickable={false}>
          <AssignmentTitle>Operation: Patient Zero</AssignmentTitle>
          <AssignmentDetails>Location: Hokkaido, Japan</AssignmentDetails>
          <AssignmentDetails>Target: Yuki Yamazaki</AssignmentDetails>
          <AssignmentDetails>Status: Completed</AssignmentDetails>
        </AssignmentCard>
      </AssignmentsGrid>
    </AssignmentsContainer>
  );
};

export default Assignments; 