import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProgressBarProps {
  label: string;
  total: number;
  value: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  total,
  value,
  color,
}) => {
  const percentage = (value / total) * 100;

  // Generate transparent background color
  const rgbaBackground = color.startsWith("#")
    ? `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`
    : color;

  return (
    <View style={styles.container}>
      
      <View style={[styles.progressBar, { backgroundColor: rgbaBackground }]}>
      
        <View style={[styles.bar, { width: `${percentage}%`, backgroundColor: color }]} >
        <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.number}>{value}</Text>
      </View>
      
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  number: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    justifyContent:'flex-end'
  },
  progressBar: {
    height: 42,
    borderRadius: 5,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
  },
});

export default ProgressBar;