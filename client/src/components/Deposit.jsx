import {ethers} from "ethers";
const Deposit = ({states}) => {

    const Deposit=async(event)=>{
        event.preventDefault();
        const {contract}=states;
        const name=document.querySelector('#name').value;
        const message=document.querySelector('#message').value;
        const amount=document.querySelector("#amount").value;
        try{
            const transaction=await contract.deposit(name,message,{value:ethers.parseEther(amount)});
            transaction.wait();
            console.log("Transaction completed...........");
        }
        catch(error){
            console.log("Transaction failed",error);
        }
    }
  return (
        <div className="Deposit">
            <div className="data">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name"/>
            </div>
            <div className="data">
            <label htmlFor="message">Message:</label>
            <input type="text" name="message" id="message"/>
            </div>
            <div className="data">
            <label htmlFor="amount">Amount:</label>
            <input type="number" name="amount" id="amount"/>
            </div>
            <button type="submit" className="button" 
            onClick={Deposit} disabled={!states.contract} >Deposit</button>
                <button className="button">Get Data</button>
        </div>
  )
}

export default Deposit