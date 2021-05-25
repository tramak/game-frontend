import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textarea: {
      marginTop: theme.spacing(1),
      width: '100%',
      minHeight: 160,
      padding: theme.spacing(1),
      fontSize: 16
    }
  }),
);

export default useStyles;
