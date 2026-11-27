import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { recommendations } from "../../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 16px 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    width: 100%;
    @media (max-width: 860px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
    }
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.text_secondary + 25};
    border-radius: 12px;
    box-shadow: 0 0 24px 2px rgba(23, 92, 230, 0.1);
    padding: 40px 40px 36px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    /* Odd card out (e.g. the 3rd) sits centered on its own row, same width as the others */
    &:last-child:nth-child(odd) {
        grid-column: 1 / -1;
        justify-self: center;
        width: calc(50% - 20px);
    }
    @media (max-width: 860px) {
        padding: 26px 20px;
        &:last-child:nth-child(odd) {
            width: 100%;
        }
    }
`;

const Quote = styled(FaQuoteLeft)`
    font-size: 26px;
    color: ${({ theme }) => theme.primary + 90};
`;

const Text = styled.p`
    margin: 0;
    flex-grow: 1;
    font-size: 17px;
    line-height: 1.75;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const Person = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 10px;
`;

const Avatar = styled.div`
    flex-shrink: 0;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Name = styled.div`
    font-size: 19px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
`;

const Role = styled.div`
    margin-top: 2px;
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
`;

const LetterLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    font-size: 17px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Recommendations = () => (
    <Container id="Recommendations">
        <Wrapper>
            <Title>Recommendations</Title>
            <Desc>What people I’ve worked with say about me.</Desc>
            <Grid>
                {recommendations.map((rec) => (
                    <Card key={`recommendation-${rec.id}`}>
                        <Quote />
                        <Text>{rec.text}</Text>
                        <Person>
                            <Avatar>{rec.initials}</Avatar>
                            <div>
                                <Name>{rec.name}</Name>
                                <Role>{rec.title}</Role>
                            </div>
                        </Person>
                        {rec.letter && (
                            <LetterLink href={rec.letter} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink size={18} />
                                Full Letter
                            </LetterLink>
                        )}
                    </Card>
                ))}
            </Grid>
        </Wrapper>
    </Container>
);

export default Recommendations;
