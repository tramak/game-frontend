import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(5)
    },
    buttonsRight: {
      '& button': {
        marginLeft: theme.spacing(1)
      }
    },
    button: {
      // ,
    },
  }),
);

export default useStyles;
