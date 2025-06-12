import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function transition(OgComponent) {
  function TransitionComponent(props) {
    const { children, ...rest } = props
    return (
      <>
        <OgComponent {...rest}>{children}</OgComponent>
        <motion.div
          className='slide-in'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className='slide-out'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    )
  }

  TransitionComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || 'Component'})`

  return TransitionComponent
}

transition.propTypes = {
  children: PropTypes.node,
}

export default transition
