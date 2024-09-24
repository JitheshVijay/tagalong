import { StyleSheet } from 'react-native';

// Define your global font, colors, and layout settings here
export const globalStyles = StyleSheet.create({
  // Font styles
  text: {
    fontFamily: 'Helvetica', // Choose your preferred font
    color: '#FFFFFF', // Default text color (white)
  },
  heading: {
    fontFamily: 'Helvetica-Bold', // Bold version of your font
    fontSize: 24,
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
  },
  subheading: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#A1A1A1', // Gray color for subheadings or secondary text
  },
  
  // Button styles
  button: {
    backgroundColor: '#8B63E3', // Purple button background
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Helvetica-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Layout styles
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark background
    padding: 20,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
