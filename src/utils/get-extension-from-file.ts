export function getExtensionFromFile(fileUri: string) {
  const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.exec(fileUri)

  if (regex) {
    return regex[1]
  }
}
