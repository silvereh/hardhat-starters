const chai = require( 'chai' )
const chaiAsPromised = require( 'chai-as-promised' )

chai.use( chaiAsPromised )

const expect = chai.expect ;
const { ethers } = require( 'hardhat' )

describe( 'test starts here', () => {
	let addrs
	let deployer
	let contract
	let CONTRACT

	before( async () => {
		[ deployer, ...addrs ] = await ethers.getSigners()
		deployer_address = deployer.address

		CONTRACT = await ethers.getContractFactory( 'ContractName' )
	})

	beforeEach( async () => {
		contract = await TOKEN.deploy(
			// contract constructor parameters
		)
		await contract.deployed()
	})

	it( 'first test', async () => {
		expect( 1 ).to.equal( 1 )
	})
})
