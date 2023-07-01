import React from "react";
import { ThirdwebProvider, useContract, useCreateDirectListing, Web3Button} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, Web3Button, useCreateDirectListing, useContract };

const code = `function App() {
    return (
      <Web3Button
        contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
        action={(contract) => {
          contract.call("updateListing", [
            0, 
            {
                assetContractAddress: "0x8Da37534C58D94E338D0b6D57afF34af6CDc2E32",
                tokenId: "2",
                pricePerToken: "5",
                currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                isReservedListing: false,
                quantity: "1",
                startTimestamp: new Date(),
                endTimestamp: new Date(
                  new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
                ),
              }]
            )
        }}
        onSuccess={(result) => alert("Listing Updated! 🥳")}
        onError={(error) => alert("Something went wrong!")}
      >
        Update Listing
      </Web3Button>
    )
  }`;

export default function UseUpdateListing() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
