import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children, setMessgae }) => {
  return (
    <Alert className="m-4" variant={variant}>
      {children}
      <div className="row justify-content-end">
        <i onClick={() => setMessgae('')} className="fas fa-times"></i>
      </div>
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
