const sharp = require('sharp');

async function cropImage(inputPath:any, outputPath:any, width:any, height:any) {
  await sharp(inputPath)
    .resize(width, height, { fit: 'cover' })
    .toFile(outputPath);
}

module.exports = {
  cropImage,
};
