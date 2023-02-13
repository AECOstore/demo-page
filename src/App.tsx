import { PiletApi } from 'consolid-shell'
import * as React from 'react'
import {Box, Grid} from '@mui/material'

const App = ({ piral }: { piral: PiletApi }) => {
  const [children, setChildren] = React.useState(piral.getChildModules(piral))
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
      {children.map(child => {
        console.log('child', child)
                return <Grid item xs={4} key={child.link}>
                
                    <piral.Extension name={`${child.link}`} />
                </Grid>
      })}
      </Grid>
    </Box>
  )
}

export default App