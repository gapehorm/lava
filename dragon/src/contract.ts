import {
  Approval as ApprovalEvent,
  AvaxWithdraw as AvaxWithdrawEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  ExcludeFromFees as ExcludeFromFeesEvent,
  IncludeInFees as IncludeInFeesEvent,
  NFTWithdraw as NFTWithdrawEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProcessFees as ProcessFeesEvent,
  SettingsChanged as SettingsChangedEvent,
  SwapAndLiquify as SwapAndLiquifyEvent,
  TokenApproved as TokenApprovedEvent,
  TokenWithdraw as TokenWithdrawEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAvaxWithdraw(event: AvaxWithdrawEvent): void {
  let entity = new AvaxWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExcludeFromFees(event: ExcludeFromFeesEvent): void {
  let entity = new ExcludeFromFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userExcluded = event.params.userExcluded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncludeInFees(event: IncludeInFeesEvent): void {
  let entity = new IncludeInFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userIncluded = event.params.userIncluded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTWithdraw(event: NFTWithdrawEvent): void {
  let entity = new NFTWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.ID = event.params.ID
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessFees(event: ProcessFeesEvent): void {
  let entity = new ProcessFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.dragonTokensProcessed = event.params.dragonTokensProcessed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettingsChanged(event: SettingsChangedEvent): void {
  let entity = new SettingsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.setting = event.params.setting

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapAndLiquify(event: SwapAndLiquifyEvent): void {
  let entity = new SwapAndLiquify(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dragonIntoLiquidity = event.params.dragonIntoLiquidity
  entity.tokenBIntoLiquidity = event.params.tokenBIntoLiquidity
  entity.tokenB = event.params.tokenB

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenApproved(event: TokenApprovedEvent): void {
  let entity = new TokenApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenWithdraw(event: TokenWithdrawEvent): void {
  let entity = new TokenWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
