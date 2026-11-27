import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { leadership } from "../../data/constants";

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
    max-width: 1000px;
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

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

const Card = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.text_secondary + 25};
    border-radius: 12px;
    box-shadow: 0 0 24px 2px rgba(23, 92, 230, 0.1);
    padding: 34px 34px 30px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    @media (max-width: 768px) {
        padding: 22px 18px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 6px;
    }
`;

const Role = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Org = styled.div`
    margin-top: 4px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Date = styled.div`
    flex-shrink: 0;
    margin-top: 14px;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 768px) {
        margin-top: 0;
        font-size: 12px;
    }
`;

const Text = styled.div`
    font-size: 16px;
    line-height: 1.7;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Link = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    margin-top: 6px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Leadership = () => (
    <Container id="Leadership">
        <Wrapper>
            <Title>Leadership</Title>
            <Desc>Roles where I've led, organized, and given back to my community.</Desc>
            <List>
                {leadership.map((item) => (
                    <Card key={`leadership-${item.id}`}>
                        <Top>
                            <div>
                                <Role>{item.role}</Role>
                                <Org>{item.organization}</Org>
                            </div>
                            <Date>{item.date}</Date>
                        </Top>
                        <Text>{item.desc}</Text>
                        {item.link && (
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink size={18} />
                                {item.linkLabel || "Learn More"}
                            </Link>
                        )}
                    </Card>
                ))}
            </List>
        </Wrapper>
    </Container>
);

export default Leadership;
