import { PiletApi } from 'consolid-shell'
import * as React from 'react'
import {Box, Grid} from '@mui/material'

const App = ({ piral }: { piral: PiletApi }) => {
  const [children, setChildren] = React.useState(piral.getChildModules(piral))
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
      {children.map(child => {
                return <Grid item xs={child.initialColumns} key={child.link} style={{border:"1px solid lightgray"}}>
                
                    <piral.Extension name={`${child.link}`} />
                </Grid>
      })}
      </Grid>
    </Box>
  )
}

export default App