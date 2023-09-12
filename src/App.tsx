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
            <Boolean />
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
