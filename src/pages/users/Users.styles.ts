import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    buttonsRight: {
      '& button': {
        marginLeft: theme.spacing(1)
      }
    },
    button: {
      marginBottom: theme.spacing(5),
    },
  }),
);

export default useStyles;
