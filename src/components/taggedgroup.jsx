import React from "react";
import { Stack, Avatar } from "grommet";

export default function taggedgroup() {
  return (
    <div>
      <Stack anchor="right" margin={{ left: "xlarge" }}>
        <Avatar
          size="small"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
        />
        <Avatar
          size="small"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
          margin={{ right: "small" }}
        />
        <Avatar
          size="small"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
          margin={{ right: "medium" }}
        />
      </Stack>
    </div>
  );
}
