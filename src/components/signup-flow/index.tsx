import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import SignUp from './SignUp'
import SignIn from './SignIn'
import Verify from './Verify'
import ToggleThemeBtn from 'components/toggle-theme-btn'

import stl from './SignupFlow.module.scss'

interface Props {
  theme: string
  toggleTheme: () => void
}

const SignupFlow = ({ theme, toggleTheme }: Props) => {
  const [flow, setFlow] = useState(0)
  const [element, setElement] = useState(
    <SignUp setFlow={setFlow} theme={theme} />
  )

  useEffect(() => {
    if (flow === 0) {
      setElement(<SignUp theme={theme} setFlow={setFlow} />)
    } else if (flow === 1) {
      setElement(<SignIn theme={theme} setFlow={setFlow} />)
    } else if (flow === 2) {
      setElement(<Verify theme={theme} setFlow={setFlow} />)
    }
  }, [flow])

  return (
    <div
      className={clsx(
        stl.signupFlow,
        theme === 'dark' ? stl.darkSignUpFlow : undefined
      )}
    >
      {element}
      <ToggleThemeBtn handleOnClick={toggleTheme} customClass={stl.themeBtn} />
    </div>
  )
}

export default SignupFlow
