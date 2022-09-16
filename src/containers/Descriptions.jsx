import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import PaperInformation from "../Components/PaperInformation";
import LocationInformation from "../Components/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState
  return(
    <Fragment>
      <Stack>
        {bio !== null 
          ? <Typography>{bio}</Typography>
          : <Typography>Perfil sin bio</Typography>
        }
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  )
};

export default Description;