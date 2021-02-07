import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Grommet,
} from "grommet";
import { CaretUpFill, Edit } from "grommet-icons";
import styled from "styled-components";

export default function MemoryCard({ title, body }) {
  return (
    <div>
      <Grommet>
        <Card height="auto" width="325px" background="light-1">
          <StyledCardHeader pad="small">{title}</StyledCardHeader>
          <StyledCardBody pad="small">{body}</StyledCardBody>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button icon={<CaretUpFill color="red" />} hoverIndicator />
            <Button icon={<Edit size="small" color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
      </Grommet>
    </div>
  );
}

const StyledCardHeader = styled(CardHeader)`
  font-size: 1.4rem;
  line-height: 1;
  color: #000;
  font-family: "Roboto Slab";
`;
const StyledCardBody = styled(CardBody)`
  font-size: 1em;
  font-family: "Montserrat";
  line-height: 1;
`;
