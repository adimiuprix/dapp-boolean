import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { useAccount } from 'wagmi'
import Boolean from './components/Bool'

function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <div className='center-position'>
        <ConnectButton />
      </div>
      {!isConnected &&(
        <div>
            <header>
                <h1>Aplikasi sederhana</h1>
            </header>
            <div className="container">
                <h2>Status:
                    <div className="setter">
                        *****
                    </div>
                </h2>
                <div className="staking-form">
                    <br />
                    <br />
                </div>
            </div>
        </div>
      )}
      
      {isConnected &&(
        <div>
            <Boolean />
        </div>
      )}
    </>
  )
}

export default App
