import React from 'react'
import { Actions, Router, Scene, Stack } from 'react-native-router-flux'

import LoginView from 'src/views/mobile/LoginView'
import HomeView from 'src/views/mobile/HomeView'

export default Actions.create(
  <Stack key='root'>
    <Scene key='home' path="/" component={HomeView} title="Home" />
    <Scene key='login' path="/login" component={LoginView} title="Login" />
  </Stack>
)