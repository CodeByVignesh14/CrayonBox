// src/components/CrayonInput/CrayonInput.tsx

import React from 'react';
import { TextInput, View, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';

// Define possible input props
interface CrayonInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  IconComponent?: React.ReactNode; // Pass entire Icon component
  iconPosition?: 'left' | 'right'; // Position of the icon
  secureTextEntry?: boolean; // To toggle password visibility
  loading?: boolean; // To show loading indicator
  disabled?: boolean; // Disable input field
  style?: ViewStyle; // Custom styles for input container
  inputStyle?: TextStyle; // Custom styles for the text input field
  labelStyle?:TextStyle; // Custom styles for the label
  [key: string]: any; // Allows passing other TextInput props dynamically
}

const CrayonInput: React.FC<CrayonInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  IconComponent,
  iconPosition = 'left',
  secureTextEntry = false,
  loading = false,
  disabled = false,
  style,
  inputStyle,
  labelStyle,
  ...textInputProps // Spread the rest of the props to TextInput
}) => {
  const hasLeftIcon = IconComponent && iconPosition === 'left';
  const hasRightIcon = IconComponent && iconPosition === 'right';

  // Conditionally add padding based on whether an icon is present
  const inputWithIconStyle = (hasLeftIcon || hasRightIcon) ? styles.inputWithIcon : {};

  return (
    <View style={[styles.container, style]}>
      {/* Label for the input */}
      <Text style={[styles.label,labelStyle]}>{label}</Text>

      <View style={styles.inputContainer}>
        {/* Left icon */}
        {hasLeftIcon && <View style={styles.icon}>{IconComponent}</View>}

        {/* Text Input Field */}
        <TextInput
          style={[
            styles.input,
            inputStyle,
            inputWithIconStyle, // Apply dynamic padding if icon is present
            disabled && styles.disabledInput,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          {...textInputProps} // Apply all extra props passed to TextInput
        />

        {/* Right icon */}
        {hasRightIcon && <View style={styles.icon}>{IconComponent}</View>}

        {/* Loading indicator */}
        {loading && <ActivityIndicator style={styles.loader} color="#3498db" />}
      </View>
    </View>
  );
};

// Default styles for the input component
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    //paddingHorizontal: 12,
    height: 45,
    width: '100%',
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: '#333',
  },
  inputWithIcon: {
    paddingLeft: 0, // Remove extra space when there's an icon on the left
    paddingRight: 0, // Remove extra space when there's an icon on the right
  },
  icon: {
    marginHorizontal: 8,
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    color: '#888',
  },
  loader: {
    position: 'absolute',
    right: 10,
  },
});

export default CrayonInput;
