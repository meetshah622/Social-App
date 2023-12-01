import React from 'react'
import {Button} from 'antd'
function AuthBtn({
    icon,
    btnName,
    btnType='primary',
    classname
}) {
  return (
    <div><Button className={classname} type={btnType}>{icon} {btnName}</Button></div>
  )
}

export default AuthBtn