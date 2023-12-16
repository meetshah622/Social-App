import React from 'react'
import {Button} from 'antd'
function AuthBtn({
    icon,
    btnName,
    btnType='primary',
    classname,
    actionType
}) {
  return (
    <div><Button htmlType={actionType} className={classname} type={btnType}>{icon} {btnName}</Button></div>
  )
}

export default AuthBtn