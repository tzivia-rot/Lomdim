import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";

const Footer = () => {
  return (
    <>
      {/* <Box>
        <Container>
          <Row>
            <Column>
              <Heading>עוד באתר</Heading>
              <FooterLink href="#">בלוג</FooterLink>
              <FooterLink href="#">צור קשר עם צוות האתר</FooterLink>
            </Column>
            <Column id="txt">
              <p>
                ©2023 כל הזכויות שמורות לאתר לימוד נעים אין להעתיק או לעשות
                שימוש בכל חלק מהאתר
              </p>
            </Column>
          </Row>
        </Container>
      </Box> */}

      <footer className="bg-light text-center text-white fixed-bottom">
        {/* <div className="container p-4 pb-0">
          <section class="mb-4">
            <a
              // class="btn text-white btn-floating m-1"
              // style={{"background-color": "#446ebe"}}
              href="/contact_us"
              //role="button"
            >
              <i class="fas fa-envelope me-3"></i>
              צור קשר עם צוות האתר
            </a>
          </section>
        </div> */}

        <div
          className="text-center p-3"
          style={{ "background-color": "#2E59A7" }}
        >
          ©2023 כל הזכויות שמורות לאתר לימוד נעים אין להעתיק או לעשות שימוש בכל
          חלק מהאתר
        </div>
      </footer>
    </>
  );
};
export default Footer;
