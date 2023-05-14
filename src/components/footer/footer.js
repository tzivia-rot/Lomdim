
import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading} from "./footerStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>עוד באתר</Heading>
            <FooterLink href="#">בלוג</FooterLink>
            <FooterLink href="#">צור קשר עם צוות האתר</FooterLink>
          </Column>
          <Column>
            <p>
            ©2023 כל הזכויות שמורות לאתר לימוד נעים
  אין להעתיק או לעשות שימוש בכל חלק מהאתר</p>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;