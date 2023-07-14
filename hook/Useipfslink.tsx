export const ConvertLink = (link: any) => {
  if (!link) {
    return;
  }
  if (link.startsWith("ipfs://")) {
    return `https://dweb.link/ipfs/${link.split("ipfs://")[1]}`;
  } else {
    return link;
  }
};
