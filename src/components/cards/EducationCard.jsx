import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    gap: 12px;
`;
const Image = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    margin-top: 4px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 4px;
    }
    @media only screen and (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const School = styled.div`
    font-size: 18px;
    font-weight: 600px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
const Degree = styled.div`
    font-size: 14px;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;
const Date = styled.div`
    font-size: 12px;
    font-weight: 400px;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
    text-align: justify;
`;

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            icon={<img width="100%" height="100%" alt={education?.school} style={{ objectFit: "contain", borderRadius: "50%", background: "#fff", padding: "6px", boxSizing: "border-box" }} src={education?.img} />}
            iconStyle={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 4px rgba(255,255,255,0.15)" }}
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
            }}
            date={education?.date}
        >
            <Top>
                <Image>
                    <img src={education?.img} alt={education?.school} />
                </Image>
                <Body>
                    <School>{education?.school}</School>
                    <Degree>{education?.degree}</Degree>
                    <Date>{education?.date}</Date>
                </Body>
            </Top>
            <Description>{education?.desc && <Span>{education.desc}</Span>}</Description>
        </VerticalTimelineElement>
    );
};

export default EducationCard;
