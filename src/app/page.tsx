import React from 'react'; // Import React if not already imported
import backgroundImage from '../../public/backgroundImage.png'; // Import your image file
import './globals.css'
import Image from 'next/image';


export default function Home() {
  return (
    <>
    <main
       className="flex min-h-screen flex-col items-center justify-between p-24"
       style={{
        backgroundImage: `url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
       }}
    >
      {/* <div>
      <Image src={backgroundImage} alt="Background" />
</div> */}
    <div>
      <img src="https://i.imgur.com/YnDwkJM.png" alt="VEL"
      width="600px"
      height="600px"
      style={{ maxWidth: '100%' }} />
    </div>
    <iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc20.html?contract=0x880332bffcA271c5730A8185b410DFec335878fD&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=bb4ce1f571f572ab93bf44d6e2ae01cc&theme=dark&primaryColor=yellow"
    
      width="600px"
      height="600px"
      style={{ maxWidth: '160%' }}
      // frameBorder="0"
      title="Embedded Content"
      ></iframe>
    </main>
    </>
  );
}