import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SigninPage() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


  const login = async (event) => {
      event.preventDefault();
        try {
            setError('')
            setLoading(true)
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            setError('Failed to Sign in')
        }
        setLoading(false)
  };
  const logout = async () => {
    await signOut(auth);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          container
          sx={{
            backgroundImage: 'url(https://media.wired.com/photos/5d09594a62bcb0c9752779d9/16:9/w_2000,h_1125,c_limit/Transpo_G70_TA-518126.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#fff',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Grid item xs={10} sm={7} md={3.5} ></Grid>
          <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 2,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf: 'center'
              }}
            >
              <Avatar sx={{ m: 0, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>
                Sign in
              </h2>
              <h3> current user: {user?.email}
              </h3>
              {error && <Alert severity='error'>{error}</Alert>}
              
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  disabled={loading}
                  onClick={login}
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link to="./signup">
                      Sign up for new account
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}