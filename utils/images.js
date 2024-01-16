const images = {
  moon: "/assets/images/moon.png",
  land: "/assets/images/land.png",
  cat: "/assets/images/cat.gif",
  background: "/assets/images/background.png",
  inSpace: "/assets/images/inSpace.png",
};

export const ipfsResolver = (imgUrl) => {
  if (typeof imgUrl === "string" && imgUrl.startsWith("ipfs://")) {
    return imgUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return imgUrl;
};

export default images;
