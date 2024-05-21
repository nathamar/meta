/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_cyclecolor,_doortype,_fan) {
    const NFT={
        "name":_name,
        "cyclecolor":_cyclecolor,
        "doortype":_doortype,
        "bootle":_fan,
    }
    NFTs.push(NFT);
    console.log("Minted:" +_name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nName:" + NFTs[i].name);
        console.log("\ncyclecolor:" + NFTs[i].cyclecolor);
        console.log("\ndoortype:" + NFTs[i].doortype);
        console.log("\nbootle:" + NFTs[i].bootle);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" +NFTs.length);

}

// call your functions below this line
mintNFT("john","white","steeldoor","miltonbootle");
mintNFT("jack","white","steeldoor","miltonbootle");
mintNFT("jackson","white","steeldoor","miltonbootle");
mintNFT("virat","white","steeldoor","miltonbootle");
listNFTs();
getTotalSupply();
