import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Grommet,
  Avatar,
} from "grommet";
import { CaretUpFill } from "grommet-icons";
import styled from "styled-components";
import bg from "../assets/winking-face-with-halo.png";
import moment from "moment";
import TaggedGroup from "./taggedgroup";
import { firestore } from "../firebase/config";

export default function MemoryCard({ post }) {
  const { title, body, upvotes, user, date } = post;

  async function handleUpvote(e) {
    console.log("upvoted");
    const memoryRef = firestore.collection("memories").doc(post.id);
    const res = await memoryRef.update({ upvotes: upvotes + 1 });
    console.log(res);
  }
  console.log(post);
  const event_date = post && moment(date.toDate()).format("MMMM Do YY");

  return (
    <div>
      <Grommet>
        <StyledCard
          background="light-1"
          elevation="medium"
          height="auto"
          width="325px"
          style={{ position: "relative" }}
        >
          <WhiteOverlay />
          <StyledCardHeader pad="medium">
            <div className="">{title}</div>
            <div className="">
              {" "}
              <TaggedGroup />{" "}
            </div>
          </StyledCardHeader>
          <StyledCardBody
            pad={{
              top: "small",
              left: "medium",
              right: "medium",
              bottom: "medium",
            }}
          >
            {body}
          </StyledCardBody>
          <StyledCardFooter style={{ zIndex: 10 }} background="light-2">
            <StyledUpvotes>
              <Button
                focusIndicator={false}
                icon={<CaretUpFill color="red" onClick={handleUpvote} />}
                hoverIndicator
              />
              <div className="upvotes">{upvotes}</div>
            </StyledUpvotes>

            <StyledDate className="date">{event_date}</StyledDate>

            <Avatar size="small" src={user.photoURL} />
          </StyledCardFooter>
        </StyledCard>
      </Grommet>
    </div>
  );
}

const StyledCardHeader = styled(CardHeader)`
  font-size: 1.4rem;
  line-height: 1;
  color: #000;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto Slab";
`;
const StyledCardBody = styled(CardBody)`
  font-size: 1em;
  z-index: 10;
  font-family: "Montserrat";
  color: #000;
  font-weight: 600;
  line-height: 1;
`;
const StyledUpvotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 0.8em;
  color: red;
`;
const StyledCard = styled(Card)`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
`;
const WhiteOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 2;
`;
const StyledCardFooter = styled(CardFooter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 0 0.75em 0 0;
  background-color: #eaffed;
`;
const StyledDate = styled.div`
  margin-right: 0.8em;
  letter-spacing: 3px;
  font-size: 0.72em;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
  color: #aaadad;
`;
