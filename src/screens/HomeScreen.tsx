import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { colors, radius, spacing, typography, type ColorMode } from '@/theme';

export function HomeScreen() {
  const [colorMode, setColorMode] = useState<ColorMode>('dark');
  const palette = colors[colorMode];
  const nextColorMode: ColorMode = colorMode === 'dark' ? 'light' : 'dark';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
      <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.modeLabel, { color: palette.textSecondary }]}>Theme</Text>
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: colorMode === 'dark' }}
            accessibilityLabel={`Switch to ${nextColorMode} mode`}
            onPress={() => setColorMode(nextColorMode)}
            style={({ pressed }) => [
              styles.toggle,
              {
                backgroundColor: pressed ? palette.primaryHover : palette.surface,
                borderColor: palette.border,
              },
            ]}
          >
            <View
              style={[
                styles.toggleThumb,
                {
                  backgroundColor: palette.primary,
                  transform: [{ translateX: colorMode === 'dark' ? spacing.lg : 0 }],
                },
              ]}
            />
            <Text style={[styles.toggleText, { color: palette.textPrimary }]}>
              {colorMode === 'dark' ? 'Dark' : 'Light'}
            </Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: palette.surface,
              borderColor: palette.border,
            },
          ]}
        >
          <Text style={[styles.eyebrow, { color: palette.secondaryAccent }]}>Poca Lens</Text>
          <Text style={[styles.title, { color: palette.textPrimary }]}>Mobile app foundation is ready.</Text>
          <Text style={[styles.description, { color: palette.textSecondary }]}>
            Start building features inside the src directory with shared components,
            screens, theme tokens, and typed models.
          </Text>
          <AppButton label="Get started" onPress={() => undefined} colorMode={colorMode} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: spacing.xl,
    position: 'absolute',
    right: spacing.xl,
    top: spacing.xl,
  },
  modeLabel: {
    ...typography.labelSmall,
    textTransform: 'uppercase',
  },
  toggle: {
    alignItems: 'center',
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minWidth: 104,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  toggleThumb: {
    borderRadius: radius.sm,
    height: 16,
    width: 16,
  },
  toggleText: {
    ...typography.labelSmall,
  },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.xl,
  },
  eyebrow: {
    ...typography.labelSmall,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  title: {
    ...typography.displayLarge,
    marginBottom: spacing.md,
  },
  description: {
    ...typography.bodyLarge,
    marginBottom: spacing.xl,
  },
});
