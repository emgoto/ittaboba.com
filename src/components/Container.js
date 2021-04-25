import React from 'react'

const Container = props => {
  const {
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props
  return (
    <div className="container"
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
