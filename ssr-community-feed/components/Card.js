import styled from 'styeld-components';

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
  color: black;
`;

const Count = styled.span`
  color: darkGray;
`;

export default function Card ({ title, views, answers }) {
    return (
        <CardWrapper>
            <title>{title}</title>
            <Count>{`{Views: ${views} | Answers: ${answers}`} </Count>
        </CardWrapper>
    );
}