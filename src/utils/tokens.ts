import { constants as ethersConstants } from "ethers";

import { Chain, Token } from "src/domain";

const selectTokenAddress = (token: Token, chain: Chain): string => {
  return token.wrappedToken && chain.chainId === token.wrappedToken.chainId
    ? token.wrappedToken.address
    : token.address;
};

const isTokenEther = (token: Token): boolean => {
  return token.address === ethersConstants.AddressZero;
};

const isL2NativeToken = (token: Token, chain: Chain): boolean => {
  if (token.address == chain.l2NativeInL1Address) {
    return true
  }
  return false
};



export { isTokenEther, selectTokenAddress, isL2NativeToken};
