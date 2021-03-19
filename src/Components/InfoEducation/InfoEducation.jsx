import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import InfoCard from './InfoCard';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const InfoEducation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline align={`${matches} ? right : alternate`}>
      <InfoCard date="2020 - present" courseTitle="BE " institutionName="LDCE, Ahm" />
      <InfoCard date="2019 - 2020" courseTitle="HighSchool" institutionName="BAPS, Gondal" />
    </Timeline>
  );
};

export default InfoEducation;