import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { injected } from "../components/wallet/connectors"
import React, { useState } from 'react';


 function ConnectWalletButton() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React() 


    async function connect() {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      
     async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }
  
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
  }, [])


  return (

        <div className="row ps-5 pe-5">
            <button onClick={connect} className="btn btn-light  btn-lg btn-block" type="button">Connect Wallet</button>
            {active ? <span><b>{account} </b></span> : <span></span>}               
        </div>

    );
}

export default ConnectWalletButton;
