import React from 'react'
import { Dimensions, Image, View } from 'react-native'
import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated'
import { styles } from './styles'

const SCREEN_WIDTH = Dimensions.get('window').width

type Props = {
  imagesUrl: string[]
}

export function CarouselImages({ imagesUrl }: Props) {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      //   const scrollX = x
      //   const currentPosition = Math.ceil(scrollX / SCREEN_WIDTH)
    },
  })

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={{ flex: 1 }}
        horizontal
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        {imagesUrl.map((imageUrl) => (
          <Image
            key={imageUrl}
            source={{ uri: imageUrl }}
            resizeMode="contain"
            style={{ height: '100%', width: SCREEN_WIDTH }}
            alt=""
          />
        ))}
      </Animated.ScrollView>

      <View style={styles.indicatorContainer}>
        {imagesUrl.map((key) => (
          <View style={styles.indicatorTrack} key={key}>
            <View style={styles.indicatorThumb} />
          </View>
        ))}
      </View>
    </View>
  )
}
