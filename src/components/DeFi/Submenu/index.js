import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import style from './style.module.scss'

const DeFiSubmenu = () => {
  const { url } = useRouteMatch()

  return (
    <div>
      <div className={style.menu}>
        <NavLink exact activeClassName={style.active} to={`${url}/swap`}>
          <span>Swap</span>
          <span>Swap</span>
        </NavLink>
        <NavLink exact activeClassName={style.active} to={`${url}/liquidity/pools`}>
          <span>Liquidity Pools</span>
          <span>Liquidity Pools</span>
        </NavLink>
        <NavLink exact activeClassName={style.active} to={`${url}/liquidity/my`}>
          <span>My Liquidity</span>
          <span>My Liquidity</span>
        </NavLink>
      </div>
    </div>
  )
}

export default DeFiSubmenu
