import toast from "react-hot-toast";

export const connectMetamaskSimple = async (
  connector: any,
  walletname: any
) => {
  try {
    let provider = await connector(walletname);
  } catch (ex) {
    console.log(ex);
    console.log("error");
  }
};

export async function disconnect(deactivate: any) {
  try {
    await deactivate();
    console.log("disconnet");
  } catch (ex) {
    console.log(ex);
  }
  localStorage.clear();
}
