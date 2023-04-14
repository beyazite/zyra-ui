import React from 'react'

import { ZyraButton } from 'zyra-ui'
import styles from 'zyra-ui/dist/index.css'

const App = () => {
  return <>
  <ZyraButton type="primary" text="Primary Example 😄 " />
  <ZyraButton type="default" text="Default Example 😄 " />
  <ZyraButton type="dashed" text="Dashed Example 😄 " />
  <ZyraButton type="text" text="Text Example 😄 " />
  <ZyraButton type="link" text="Link Example 😄 " />

  </>
  
}

export default App

