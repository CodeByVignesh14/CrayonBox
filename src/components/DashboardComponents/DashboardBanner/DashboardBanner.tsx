import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import Colors from '../../../themes/colors';

const { width: screenWidth } = Dimensions.get('window');

type DashboardBannerProps = {
  banners: any[];
};

const DashboardBanner: React.FC<DashboardBannerProps> = ({ banners }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 8000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: activeIndex * screenWidth,
        animated: true,
      });
    }
  }, [activeIndex]);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Carousel */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {banners.map((banner, index) => (
          <Image key={index} source={banner} style={styles.bannerImage} />
        ))}
      </ScrollView>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    height:250,
    width:screenWidth,
    },
    scrollView: {
      flex: 1,
    },
    bannerImage: {
      width: screenWidth,
      height: '100%',
      resizeMode: 'contain',
    },
    indicatorContainer: {
      position: 'absolute',
      bottom:20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    indicator: {
      width: 6,
      height: 6,
      borderRadius: 4,
      backgroundColor: '#CCCCCC',
      marginHorizontal: 2,
    },
    activeIndicator: {
      backgroundColor: Colors.primary,
      width: 27,
      height: 6,
    },
  });
export default DashboardBanner;
