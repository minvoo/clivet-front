import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RoomIcon from "@mui/icons-material/Room";
import * as Styled from "./homecomponents";

const HomeMain = () => {
  return (
    <div>
      <Styled.DivSlogan>
        <Styled.DivSloganText>
          <Styled.DivSloganInnerText>
            <Typography variant="h2">We take care</Typography>
            <Typography variant="h2">
              <b> of your pets</b>
            </Typography>
            <br />
            <br />
            <Typography>
              That's the place for your clinic slogan. Write something to{" "}
              <b>engage </b>
              your potential pet-patient's owner to sign up start using your
              services
            </Typography>
          </Styled.DivSloganInnerText>
          <br />
          <br />
          <Button
            variant="contained"
            href={"register"}
            sx={{ my: 0, color: "white", display: "block" }}
          >
            Register
          </Button>
        </Styled.DivSloganText>
        <Styled.DivSloganEmpty></Styled.DivSloganEmpty>
      </Styled.DivSlogan>
      <Styled.DivTwoPets>
        <Styled.DivTwoPetsImage></Styled.DivTwoPetsImage>
        <Styled.DivTwoPetsText>
          <Styled.DivTwoPetsInnerText>
            <Typography variant="h6">
              At our clinic, we understand that your pets are more than just
              animals - they're a part of your family. That's why we go above
              and beyond to provide the very best in medical care and attention
              for your furry friends.
            </Typography>
          </Styled.DivTwoPetsInnerText>
        </Styled.DivTwoPetsText>
      </Styled.DivTwoPets>
      <Styled.DivTeam>
        <Styled.DivTeamImage></Styled.DivTeamImage>
        <Styled.DivInnerTeam>
          <Typography variant="h6">
            Our team of experienced and knowledgeable veterinarians are
            dedicated to providing high-quality care for all types of animals,
            from dogs and cats to birds, reptiles, and more. We are committed to
            staying up-to-date on the latest advances in veterinary medicine, so
            that we can offer the most effective treatments and services to our
            patients.
          </Typography>
        </Styled.DivInnerTeam>
      </Styled.DivTeam>
      <Styled.DivWays>
        <Styled.DivInnerWays>
          <Styled.DivWaysTop>
            <Typography variant="h5">
              <b>
                Pawsitively the best way to manage your pet's health - try our
                clinic system app today!
              </b>
            </Typography>
          </Styled.DivWaysTop>
          <br />
          <br />
          <br />
          <br />
          <Styled.DivWaysBottom>
            <Styled.DivWaysBottomElement>
              <GroupsIcon
                sx={{
                  width: "4rem",
                  height: "4rem",
                }}
              ></GroupsIcon>
              <br />
              <Typography variant="h6">Client management</Typography>
            </Styled.DivWaysBottomElement>
            <Styled.DivWaysBottomElement>
              <FavoriteIcon
                sx={{
                  width: "4rem",
                  height: "4rem",
                }}
              ></FavoriteIcon>
              <br />
              <Typography variant="h6">
                Pets management for a specific owner
              </Typography>
            </Styled.DivWaysBottomElement>
            <Styled.DivWaysBottomElement>
              <RoomIcon
                sx={{
                  width: "4rem",
                  height: "4rem",
                }}
              ></RoomIcon>
              <br />
              <Typography variant="h6">
                Visit management for a specific pet
              </Typography>
            </Styled.DivWaysBottomElement>
          </Styled.DivWaysBottom>
        </Styled.DivInnerWays>
      </Styled.DivWays>
      <Styled.DivCost>
        <Styled.DivInnerCost>
          <Styled.DivCostImage></Styled.DivCostImage>
          <Styled.DivCostText>
            <Typography variant="h6">
              This is the place we will personalize for you according to your
              arrangements after purchasing our app <br />
              <b>8 EUR / month</b>
            </Typography>
          </Styled.DivCostText>
        </Styled.DivInnerCost>
      </Styled.DivCost>
      <Styled.DivContact>
        <Styled.DivInnerContact>
          <Styled.DivContactTop>
            <Typography variant="h4">
              <b>CONTACT US</b>
            </Typography>
          </Styled.DivContactTop>
          <Styled.DivContactBottom>
            <Styled.DivContactElement>
              <Typography variant="h6">Address</Typography>
              <br />
              <Typography variant="h6">
                Warsaw, al. Jerozolimskie 1 11-111 Warsaw Poland
              </Typography>
            </Styled.DivContactElement>
            <Styled.DivContactElement>
              <Typography variant="h6">Phone</Typography>
              <br />
              <Typography variant="h6">+(000) 123 4567 89</Typography>
            </Styled.DivContactElement>
            <Styled.DivContactElement>
              <Typography variant="h6">Email</Typography>
              <br />
              <Typography variant="h6">john@doe.pl</Typography>
            </Styled.DivContactElement>
          </Styled.DivContactBottom>
        </Styled.DivInnerContact>
      </Styled.DivContact>
    </div>
  );
};
export default HomeMain;
