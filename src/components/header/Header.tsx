import React from 'react'
import clsx from 'clsx'

import MoreBtn from 'components/more-btn'
import Dropdown from 'components/dropdown'
import BackIcon from 'assets/back.svg'
import ToggleThemeBtn from 'components/toggle-theme-btn'

import stl from './Header.module.scss'

interface Props {
  theme: string
  title?: string
  list: Array<string>
  backBtn: Boolean
  customElement?: JSX.Element
  customClass?: string
  dropdown: Boolean
  titleCenter: Boolean
  themeBtn: Boolean
  toggleTheme?: () => void
  handleBackBtn: () => void
  handleListItemClick: (arg: string) => void
}

const Header = ({
  theme,
  title,
  list,
  backBtn,
  customElement,
  customClass,
  dropdown,
  titleCenter,
  toggleTheme,
  handleBackBtn,
  themeBtn,
  handleListItemClick,
}: Props) => {
  const [showDropdown, setShowDropdown] = React.useState(false)

  return (
    <div
      className={clsx(
        stl.header,
        theme === 'dark' ? stl.darkHeader : undefined,
        customClass
      )}
    >
      <div className={stl.right}>
        {backBtn ? (
          <div onClick={handleBackBtn} className={stl.backBtn}>
            <BackIcon />
          </div>
        ) : undefined}
        {title && (
          <span
            className={clsx(stl.title, titleCenter ? stl.center : undefined)}
          >
            {title}
          </span>
        )}
      </div>
      {themeBtn ? (
        <div className={stl.themeBtn}>
          <ToggleThemeBtn handleOnClick={toggleTheme} />
        </div>
      ) : undefined}
      {dropdown ? (
        <div className={stl.left}>
          <MoreBtn
            handleOnClick={() => setShowDropdown(true)}
            customClass={stl.moreBtn}
            theme={theme}
          />
          {customElement}
          <Dropdown
            transformOrigin="top right"
            right="40%"
            theme={theme}
            list={list}
            handleListItemClick={handleListItemClick}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>
      ) : undefined}
    </div>
  )
}

Header.defaultProps = {
  list: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  backBtn: false,
  handleBackBtn: () => {},
  dropdown: true,
  titleCenter: false,
  themeBtn: false,
  handleListItemClick: (item: string) => {},
}

export default Header
