import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Box, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './Add.styles';

const UserAddPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Typography variant="h6" gutterBottom>
          Добавить пользователя
        </Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Имя"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Фамилия"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="middleName"
                name="middleName"
                label="Отчетсво"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address1"
                name="address1"
                label="Компания"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Пароль"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Добавить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default UserAddPage;
