import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function GenerateSlipBtn() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CreateIcon />}
      >
        Generate Slip
      </Button>
    </div>
  );
}

export default GenerateSlipBtn;
