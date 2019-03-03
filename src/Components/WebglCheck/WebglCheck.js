const WebglCheck = () => {
  const canvas = document.createElement("canvas");
  const webglContextNames = [
    "webgl",
    "experimental-webgl",
    "webkit-3d",
    "moz-webgl"
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
