// src/components/Button/Button.tsx

import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';

// Define button variants type
type ButtonVariant = 'primary' | 'secondary' | 'outline';

// Define the possible icon positions
type IconPosition = 'left' | 'right';

// Define the props for the Button component
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition; // Add iconPosition prop to specify icon side
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CrayonButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left', // Default icon position is 'left'
  style,
  textStyle,
}) => {
  // Determine the button styles based on the variant and loading state
  const buttonStyles = [styles.button, styles[variant], disabled && styles.disabled, style];
  const titleStyles = [styles.text, textStyle, disabled && styles.disabledText];

  // Conditionally arrange icon and text based on iconPosition
  const buttonContent = (
    <>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View style={styles.icon}>{icon}</View>}
          <Text style={titleStyles}>{title}</Text>
          {icon && iconPosition === 'right' && <View style={styles.icon}>{icon}</View>}
        </>
      )}
    </>
  );

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles} disabled={disabled || loading}>
      <View style={styles.buttonContent}>{buttonContent}</View>
    </TouchableOpacity>
  );
};

// Default styles for button
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  icon: {
    marginHorizontal: 8,
  },
  primary: {
    backgroundColor: '#4251E1',
  },
  secondary: {
    backgroundColor: '#2ecc71',
  },
  outline: {
    borderColor: '#4251E1',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  disabledText: {
    color: '#888',
  },
});

export default CrayonButton;
