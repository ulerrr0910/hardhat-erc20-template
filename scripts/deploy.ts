import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0x8Edc65B6E1478d2532778041eC7c9e88cfa9ad91',   // _walksz
        1 * 10 ** 18,   // _walksz
        'AnyFlowERC20', // _walksz
        'AF',           // _walksz
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
