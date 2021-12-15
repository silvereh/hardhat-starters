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
	METHODS  : {
	},
}

// For contract parameters
const CONTRACT_PARAMS = {
	METHODS : {
	},
}

// For expected reverted errors
const ERROR = {
}

// For expected thrown errors
const THROW = {
}

// For expected events
const EVENTS = {
}

// For interface matching
const INTERFACE_ID = {
	NULL              : '0x00000000',
	IERC165           : '0x01ffc9a7',
	IERC2981          : '0x2a55205a',
	IERC721           : '0x80ac58cd',
	IERC721Metadata   : '0x5b5e139f',
	IERC721Enumerable : '0x780e9d63',
	INVALID           : '0xffffffff',
}

// For common constants
const CST = {
	BLACK_HOLE     : '0x0000000000000000000000000000000000000000',
	ONE_ETH        : ethers.constants.WeiPerEther,
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
		let CONTRACT

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

			CONTRACT = await ethers.getContractFactory( 'ContractName' )
		})

		beforeEach( async () => {
			contract = await CONTRACT.deploy(
				// contract constructor parameters
			)
			await contract.deployed()
		})

		it( 'first test', async () => {
			expect( 1 ).to.equal( 1 )
		})
	}
})
