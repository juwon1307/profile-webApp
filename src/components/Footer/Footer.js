import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkin } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
import { Button} from '../../globalStyles';
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText, 
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    // SocialMedia,
    // SocialMediaWrap,
    // SocialLogo,
    // WebsiteRights,
    // SocialIcon,
    // SocialIconLink
} from './Footer.elements';


const Footer = () => {
    return (
        <FooterContainer>
           <FooterSubscription>
                <FooterSubHeading>
                    Join Our Exclusive Memebership to 
                    Receeive the Latest News and Trends
                </FooterSubHeading>
                <FooterSubText>
                    You can Unsubscribe at anytime
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='YOur Email' />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>sWIT</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Stand Up</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Sponsorship</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it Work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

              {/* <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                            SEMICOLON
                    </SocialLogo>
                    <WebsiteRights>SEMICOLON 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href={
                                <i class="fab fa-facebook-f"></i>
                            }} target="_blank" arie-Label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" arie-Label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" arie-Label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" arie-Label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href={
                                '//www.youtube.com/channel/UCsKsynTY_4BYR-wytLjex7A?
                                view_as=subscriber'
                            } target="_blank" arie-Label="Youtube" rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" arie-Label="Linkin">
                                <FaLinkin />
                            </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
              </SocialMedia> */}
        </FooterContainer>
    )
}

export default Footer;
