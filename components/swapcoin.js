import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { injected } from "../components/wallet/connectors"
import React, { useState } from 'react';

function Swapcoin() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React() 

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
                <button  className="btn btn-light  btn-lg btn-block" type="button">SWAP</button>
            </div>
    
        );
    }
    

export default Swapcoin;