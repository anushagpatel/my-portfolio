import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";

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


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Card = styled.div`
    width: 330px;
    background-color: ${({ theme }) => theme.card};
    border-radius: 10px;
    border: 0.1px solid ${({ theme }) => theme.primary + 40};
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const Issuer = styled.div`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
`;

const CertTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const Code = styled.span`
    align-self: flex-start;
    font-size: 12px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Verify = styled.a`
    margin-top: auto;
    padding-top: 6px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 600;
    &:hover {
        text-decoration: underline;
    }
`;

const Certifications = () => (
    <Container id="Certifications">
        <Wrapper>
            <Title>Certifications</Title>
            <CardContainer>
                {certifications.map((cert) => (
                    <Card key={`cert-${cert.id}`}>
                        <Issuer>{cert.issuer}</Issuer>
                        <CertTitle>{cert.title}</CertTitle>
                        {cert.code && <Code>{cert.code}</Code>}
                        {cert.link && (
                            <Verify href={cert.link} target="_blank" rel="noopener noreferrer">
                                Verify on Credly →
                            </Verify>
                        )}
                    </Card>
                ))}
            </CardContainer>
        </Wrapper>
    </Container>
);

export default Certifications;
