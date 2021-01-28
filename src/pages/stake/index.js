import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Empty from 'components/Empty'
import StakeSubmenu from 'components/StakeSubmenu'
import StakeBalances from 'components/StakeBalances'
import StakePools from 'components/StakePools'
import StakeHistory from 'components/StakeHistory'

const Stake = () => {
  const { path } = useRouteMatch()
  const dispatch = useDispatch()
  const wallet = useSelector((state) => state.wallets.wallet)

  useEffect(() => {
    if (wallet.selected) {
      dispatch({
        type: 'wallets/FETCH_WALLET_DATA',
        payload: {
          walletId: wallet.selected,
        },
      })
    }
  }, [wallet.selected, dispatch])

  return (
    <div>
      <Helmet title="Staking Center" />
      {!wallet.selected && <Empty title="Wallet is not currently selected" />}
      {wallet.selected && (
        <div>
          <StakeSubmenu />
          <div className="pt-4">
            <Switch>
              <Route exact path={path} render={() => <Redirect to={`${path}/balances`} />} />
              <Route exact path={`${path}/balances`}>
                <StakeBalances />
              </Route>
              <Route exact path={`${path}/pools`}>
                <StakePools />
              </Route>
              <Route path={`${path}/history`}>
                <StakeHistory />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  )
}

export default Stake
