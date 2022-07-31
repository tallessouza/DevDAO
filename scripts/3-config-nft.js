import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x3cb129953b0181a4a0A2a33debc4842a4754bcca");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Mouse 99999DPI",
        description: "Essa NFT te dá acessao a DevDAO!",
        image: readFileSync("scripts/assets/mouse.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();