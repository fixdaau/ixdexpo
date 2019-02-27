const WebglCheck = () => {
  const canvas = document.createElement("canvas");
  const webglContextNames = [
    "webg",
    "experimental-webg",
    "webkit-3",
    "moz-webg"
  ];
  let webglContext = null;

  for (let index = 0; index < webglContextNames.length; index++) {
    try {
      webglContext = canvas.getContext(webglContextNames[index]);
      if (webglContext) {
        break;
      }
    } catch (e) {
      console.log(e);
    }
  }
  if (webglContext === null) {
    return false;
  } else {
    return true;
  }
};

export default WebglCheck;
