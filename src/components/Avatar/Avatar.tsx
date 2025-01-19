import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type Props = {
  imageUrl?: string; // Optional image URL
  width?: number; // Optional width
  height?: number; // Optional height
};

const Avatar = ({ imageUrl, width = 50, height = 50 }: Props) => {
  const defaultImage = 'https://via.placeholder.com/150'; // Replace with your default image URL

  return (
    <View>
      <Image
        source={{ uri: imageUrl || defaultImage }}
        style={[styles.avatar, { width, height, borderRadius: width / 2 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    resizeMode: 'cover', // Ensures the image fills the circle
  },
});

export default Avatar;
