import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  AvaxWithdraw,
  EIP712DomainChanged,
  ExcludeFromFees,
  IncludeInFees,
  NFTWithdraw,
  OwnershipTransferred,
  ProcessFees,
  SettingsChanged,
  SwapAndLiquify,
  TokenApproved,
  TokenWithdraw,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createAvaxWithdrawEvent(
  to: Address,
  amount: BigInt
): AvaxWithdraw {
  let avaxWithdrawEvent = changetype<AvaxWithdraw>(newMockEvent())

  avaxWithdrawEvent.parameters = new Array()

  avaxWithdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  avaxWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return avaxWithdrawEvent
}

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
}

export function createExcludeFromFeesEvent(
  userExcluded: Address
): ExcludeFromFees {
  let excludeFromFeesEvent = changetype<ExcludeFromFees>(newMockEvent())

  excludeFromFeesEvent.parameters = new Array()

  excludeFromFeesEvent.parameters.push(
    new ethereum.EventParam(
      "userExcluded",
      ethereum.Value.fromAddress(userExcluded)
    )
  )

  return excludeFromFeesEvent
}

export function createIncludeInFeesEvent(userIncluded: Address): IncludeInFees {
  let includeInFeesEvent = changetype<IncludeInFees>(newMockEvent())

  includeInFeesEvent.parameters = new Array()

  includeInFeesEvent.parameters.push(
    new ethereum.EventParam(
      "userIncluded",
      ethereum.Value.fromAddress(userIncluded)
    )
  )

  return includeInFeesEvent
}

export function createNFTWithdrawEvent(
  to: Address,
  ID: BigInt,
  token: Address
): NFTWithdraw {
  let nftWithdrawEvent = changetype<NFTWithdraw>(newMockEvent())

  nftWithdrawEvent.parameters = new Array()

  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam("ID", ethereum.Value.fromUnsignedBigInt(ID))
  )
  nftWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return nftWithdrawEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProcessFeesEvent(
  user: Address,
  dragonTokensProcessed: BigInt
): ProcessFees {
  let processFeesEvent = changetype<ProcessFees>(newMockEvent())

  processFeesEvent.parameters = new Array()

  processFeesEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  processFeesEvent.parameters.push(
    new ethereum.EventParam(
      "dragonTokensProcessed",
      ethereum.Value.fromUnsignedBigInt(dragonTokensProcessed)
    )
  )

  return processFeesEvent
}

export function createSettingsChangedEvent(
  user: Address,
  setting: string
): SettingsChanged {
  let settingsChangedEvent = changetype<SettingsChanged>(newMockEvent())

  settingsChangedEvent.parameters = new Array()

  settingsChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  settingsChangedEvent.parameters.push(
    new ethereum.EventParam("setting", ethereum.Value.fromString(setting))
  )

  return settingsChangedEvent
}

export function createSwapAndLiquifyEvent(
  dragonIntoLiquidity: BigInt,
  tokenBIntoLiquidity: BigInt,
  tokenB: Address
): SwapAndLiquify {
  let swapAndLiquifyEvent = changetype<SwapAndLiquify>(newMockEvent())

  swapAndLiquifyEvent.parameters = new Array()

  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "dragonIntoLiquidity",
      ethereum.Value.fromUnsignedBigInt(dragonIntoLiquidity)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenBIntoLiquidity",
      ethereum.Value.fromUnsignedBigInt(tokenBIntoLiquidity)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam("tokenB", ethereum.Value.fromAddress(tokenB))
  )

  return swapAndLiquifyEvent
}

export function createTokenApprovedEvent(
  spender: Address,
  amount: BigInt,
  token: Address
): TokenApproved {
  let tokenApprovedEvent = changetype<TokenApproved>(newMockEvent())

  tokenApprovedEvent.parameters = new Array()

  tokenApprovedEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  tokenApprovedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenApprovedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenApprovedEvent
}

export function createTokenWithdrawEvent(
  to: Address,
  amount: BigInt,
  token: Address
): TokenWithdraw {
  let tokenWithdrawEvent = changetype<TokenWithdraw>(newMockEvent())

  tokenWithdrawEvent.parameters = new Array()

  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenWithdrawEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
