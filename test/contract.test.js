const chai = require( 'chai' )
const chaiAsPromised = require( 'chai-as-promised' )

chai.use( chaiAsPromised )

const expect = chai.expect ;
const { ethers } = require( 'hardhat' )

// For activating or de-activating test cases
const TEST = {
	ContractName : true,
	USE_CASE : {
		READING     : true,
		WRITING     : true,
		WRONG_INPUT : true,
	},
	EVENTS : {
	},
	METHODS : {
	},
}

// For contract data
const CONTRACT = {
	EVENTS : {
	},
	METHODS : {
	},
	PARAMS : {
	},
}

// For expected reverted errors
const ERROR = {
}

// For expected thrown errors
const THROW = {
	MISSING_ARGUMENT         : /missing argument/,
	UNEXPECTED_ARGUMENT      : /too many arguments/,
	INCORRECT_DATA_LENGTH    : /incorrect data length/,
	INVALID_ADDRESS          : /invalid address/,
	INVALID_ADDRESS_OR_ENS   : /invalid address or ENS name/,
	INVALID_ADDRESS_STR      : /resolver or addr is not configured for ENS name/,
	INVALID_BIG_NUMBER_STR   : /invalid BigNumber string/,
	INVALID_BIG_NUMBER_VALUE : /invalid BigNumber value/,
	INVALID_ARRAYIFY_VALUE   : /invalid arrayify value/,
	OVERFLOW                 : /overflow/,
	UNDERFLOW                : /underflow/,
	OUT_OF_GAS               : /out of gas/,
	STRING_ARRAY             : /str.charCodeAt is not a function/,
}

// For common constants
const CST = {
	ETH          : ethers.constants.EtherSymbol,
	ONE_ETH      : ethers.constants.WeiPerEther,
	ADDRESS_ZERO : ethers.constants.AddressZero,
	HASH_ZERO    : ethers.constants.HashZero,
	NUMBER_ZERO  : ethers.constants.Zero,
	NUMBER_ONE   : ethers.constants.One,
	NUMBER_TWO   : ethers.constants.Two,
	MAX_UINT256  : ethers.constants.MaxUint256,
	INTERFACE_ID : {
		IERC165           : '0x01ffc9a7',
		IERC2981          : '0x2a55205a',
		IERC721           : '0x80ac58cd',
		IERC721Metadata   : '0x5b5e139f',
		IERC721Enumerable : '0x780e9d63',
		INVALID           : '0xffffffff',
		NULL              : '0x00000000',
	},
}

describe( 'ContractName', () => {
	if ( TEST.ContractName ) {
		let addrs
		let deployer
		let user1
		let user2
		let user3

		let deployer_address
		let user1_address
		let user2_address
		let user3_address

		let contract
		let CONTRACT_ARTIFACT

		before( async () => {
			[
				deployer,
				user1,
				user2,
				user3,
				...addrs
			] = await ethers.getSigners()
			deployer_address = deployer.address
			user1_address = user1.address
			user2_address = user2.address
			user3_address = user3.address

			CONTRACT_ARTIFACT = await ethers.getContractFactory( 'ContractName' )
		})

		beforeEach( async () => {
			contract = await CONTRACT_ARTIFACT.deploy(
				// contract constructor parameters
			)
			await contract.deployed()
		})

		it( 'first test', async () => {
			expect( 1 ).to.equal( 1 )
		})
	}
})
