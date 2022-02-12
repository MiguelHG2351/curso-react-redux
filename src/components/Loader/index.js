import React from 'react'

import { Loader as SemanticLoader, Dimmer } from 'semantic-ui-react'

export default function Loader({ isActive }) {
  return (
    <Dimmer active={isActive}>
        <SemanticLoader />
    </Dimmer>
  )
}

