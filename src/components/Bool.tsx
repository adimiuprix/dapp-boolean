import '../App.css'
import { useContractWrite, useContractRead } from 'wagmi';
import { BooleanContract } from '../constant/Contract'

function Boolean() {
    const { isLoading, write } = useContractWrite({
        address: '0x15FA67b612b3536C8E6D22613769D7486C13903d',
        abi: BooleanContract,
        functionName: 'setState',
    })

    const { data: Bool } = useContractRead({
        address: "0x15FA67b612b3536C8E6D22613769D7486C13903d",
        abi: BooleanContract,
        functionName: "getState",
        watch: true,
    })

    const Handle = async () => {
        try {
            await write();
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            <header>
                <h1>Aplikasi sederhana</h1>
            </header>
            <div className="container">
                <h2>Status:
                    <div className="setter">
                        {JSON.stringify(Bool)}
                    </div>
                </h2>
                <div className="staking-form">
                    <br />
                    <br />
                    <button onClick={Handle}>Ubah state</button>
                    {isLoading && <div>Checking Wallet</div>}
                </div>
            </div>
        </>
    )
}

export default Boolean