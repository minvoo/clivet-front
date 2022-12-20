import { Typography } from "@mui/material";
import react from "react";
import * as Styled from "./footercomponents";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import './footer.css';
const Footer = () => {
    return (
        <div>
            <Styled.DivMain>
                <Styled.DivCentral>
                    <Styled.DivContent>
                        <Styled.DivInnerContent>
                            <Typography pb={3} pt={3} fontSize={25} fontWeight={"bold"}
                                sx={{
                                    alignItems: "flex-start",
                                }}
                                variant="h6"
                            >
                                About Clivet{" "}
                            </Typography>
                            <br />
                            <Typography fontSize={14}>
                                We are one of the oldest and largest clinics in the
                                region. We provide services in the field of
                                veterinary medicine, nutrition and animal care
                            </Typography>
                        </Styled.DivInnerContent>
                    </Styled.DivContent>
                    <Styled.DivContent>
                        <Styled.DivInnerContent>
                            <Typography pb={3} pt={3} fontSize={25} fontWeight={"bold"}>Contact</Typography>
                            
                            <Typography fontSize={14}>
                                Address: 34 Street Name, City Name
                                <br />
                                Telephone:+1 242 4942 290
                                <br />
                                Email:info@yourdomain.com
                                <br />
                                 
                            </Typography>
                        </Styled.DivInnerContent>
                    </Styled.DivContent>
                    <Styled.DivContent>
                        <Styled.DivInnerContent>
                            <Typography pb={3} pt={3} fontSize={25} fontWeight={"bold"}>Follow us</Typography>
                            <br />
                            <div className="footer-elements">
                                <a href="https://facebook.com"><FacebookIcon
                                    sx={{
                                        width: "4rem",
                                        height: "4rem",
                                    }}
                                ></FacebookIcon></a>
                                <a href="https://instagram.com"><InstagramIcon
                                    sx={{
                                        width: "4rem",
                                        height: "4rem",

                                    }}
                                ></InstagramIcon>
                                </a>
                            </div>
                        </Styled.DivInnerContent>
                    </Styled.DivContent>
                </Styled.DivCentral>
                <Styled.DivBottom>
                    <Typography fontSize={13}>
                        Created with <font color={"red"}>♥</font> by Team1 @ Full Stack Developer Codecool's course
                    </Typography>
                </Styled.DivBottom>
            </Styled.DivMain>
        </div>
    );
};
export default Footer;