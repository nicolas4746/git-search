import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import PaperInformation from "../Components/PaperInformation";
import LocationInformation from "../Components/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState
  return(
    <Fragment>
      <Stack sx={{justifyContent: 'center'}}>
        {bio !== null 
          ? <Typography variant="body1">{bio}</Typography>
          : <Typography variant="body1">Profile without bio</Typography>
        }
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  )
};

export default Description;