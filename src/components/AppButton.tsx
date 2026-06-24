import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
};

const palette = colors.dark;

export function AppButton({ label, onPress }: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonActive]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  buttonActive: {
    backgroundColor: palette.primaryHover,
  },
  label: {
    ...typography.buttonLarge,
    color: palette.textPrimary,
  },
});
