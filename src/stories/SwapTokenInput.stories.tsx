import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BigNumber } from "ethers"
import React from "react"
import { SWAP_TYPES } from "../constants"
import SwapTokenInput from "../components/SwapTokenInput"
import { TokenOption } from "../pages/Swap"

export default {
  title: "Light components/SwapTokenInput",
  component: SwapTokenInput,
} as ComponentMeta<typeof SwapTokenInput>

const Template: ComponentStory<typeof SwapTokenInput> = (args) => (
  <SwapTokenInput {...args} />
)

const tokenOptionLists: TokenOption[] = [
  {
    name: "sBTC",
    icon: "/static/media/sbtc.0b499bd2.svg",
    symbol: "sBTC",
    decimals: 18,
    amount: BigNumber.from("81234500000000"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "renBTC",
    icon: "/static/media/renbtc.1e207adc.svg",
    symbol: "RENBTC",
    decimals: 8,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "WBTC",
    icon: "/static/media/wbtc.7b094635.svg",
    symbol: "WBTC",
    decimals: 8,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "Dai",
    icon: "/static/media/dai.664df0db.svg",
    symbol: "DAI",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "USDC Coin",
    icon: "/static/media/usdc.1fa5e7f4.svg",
    symbol: "USDC",
    decimals: 6,
    amount: BigNumber.from("912345"),
    valueUSD: BigNumber.from("0x42"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "Tether",
    icon: "/static/media/usdt.2499bf87.svg",
    symbol: "USDT",
    decimals: 6,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "WETH",
    icon: "/static/media/weth.32818c6c.svg",
    symbol: "WETH",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "Alchemix ETH",
    icon: "/static/media/aleth.3dd80ea7.svg",
    symbol: "alETH",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "Synth sETH",
    icon: "/static/media/seth.63f5d603.svg",
    symbol: "sETH",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "sUSD",
    icon: "/static/media/susd.b4cf9ad2.svg",
    symbol: "sUSD",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "tBTCv2",
    icon: "/static/media/tbtc.73bdb39f.svg",
    symbol: "TBTCv2",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: true,
  },
  {
    name: "Alchemix USD",
    icon: "/static/media/alusd.d6b57a25.svg",
    symbol: "alUSD",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: false,
  },
  {
    name: "Fei Protocol",
    icon: "/static/media/fei.056d822f.svg",
    symbol: "FEI",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: false,
  },
  {
    name: "Frax",
    icon: "/static/media/frax.bbaec159.svg",
    symbol: "FRAX",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: false,
  },
  {
    name: "Liquity USD",
    icon: "/static/media/lusd.41ed2289.svg",
    symbol: "LUSD",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: false,
  },
  {
    name: "Wrapped Celo USD",
    icon: "data:image/png;base64,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",
    symbol: "wCUSD",
    decimals: 18,
    amount: BigNumber.from("0x00"),
    valueUSD: BigNumber.from("0x00"),
    swapType: SWAP_TYPES.DIRECT,
    isAvailable: false,
  },
]
export const SwapInput = Template.bind({})
SwapInput.args = {
  inputValue: "23",
  inputValueUSD: BigNumber.from("234245"),
  tokens: tokenOptionLists,
}
