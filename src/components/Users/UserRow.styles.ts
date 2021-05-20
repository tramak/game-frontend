import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    arrow: {
      width: '50px'
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

export default useStyles;
