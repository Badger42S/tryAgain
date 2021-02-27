function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item).default; });
    return images;
  }
  
  export const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));