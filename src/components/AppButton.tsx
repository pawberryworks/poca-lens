import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, radius, spacing, typography, type ColorMode } from '@/theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  colorMode?: ColorMode;
};

export function AppButton({ label, onPress, colorMode = 'dark' }: AppButtonProps) {
  const palette = colors[colorMode];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? palette.primaryHover : palette.primary },
      ]}
    >
      <Text style={[styles.label, { color: palette.textPrimary }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  label: {
    ...typography.buttonLarge,
  },
});
