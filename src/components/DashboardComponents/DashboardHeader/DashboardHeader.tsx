import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import NotificationIcon from '../../../assets/icons/NotificationIcon.svg';
import CrayonLogo from '../../../assets/logos/CrayonBoxLogo.svg';
import Colors from '../../../themes/colors';
import Avatar from '../../Avatar/Avatar';

type DashboardHeaderProps = {
  imageUrl?: string; // Optional image URL for the avatar
};

const DashboardHeader = ({ imageUrl }: DashboardHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Left Section: Logo and Title */}
      <View style={styles.leftSection}>
        <CrayonLogo />
        <Text style={styles.title}>Crayon Box</Text>
      </View>

      {/* Right Section: Notifications and Avatar */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Avatar imageUrl={imageUrl} width={45} height={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 68,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginHorizontal: 10,
    color:Colors.primary,
  },
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    paddingHorizontal: 10,
  },
});

export default DashboardHeader;
