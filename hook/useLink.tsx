
     export const resolveLink = (url:any) => {
      if (!url || !url.includes("ipfs://")) return url;
      return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
    };
  

  