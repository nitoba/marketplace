import { useCallback, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { getExtensionFromFile } from '@utils/get-extension-from-file'

type FileToUpload = {
  uri: string
  name: string
  size: number | undefined
  type: string
}

export function useSelectImage() {
  const [imageUri, setImageUri] = useState<string | null>(null)
  const [fileToUpload, setFileToUpload] = useState<FileToUpload | null>(null)

  const prepareImageToUpload = useCallback(
    async (imageUrl: string): Promise<FileToUpload> => {
      const result = await FileSystem.getInfoAsync(imageUrl)
      const fileExtension = getExtensionFromFile(result.uri) ?? 'png'
      return {
        uri: result.uri,
        name: `${Date.now()}-profile-image.${fileExtension}`,
        size: result.size,
        type: `image/${fileExtension}`,
      }
    },
    [],
  )

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.canceled) {
      setImageUri(result.assets[0].uri)
      const fileReadyToUpload = await prepareImageToUpload(result.assets[0].uri)
      setFileToUpload(fileReadyToUpload)
    }
  }

  return {
    pickImage,
    imageUri,
    fileToUpload,
  }
}
