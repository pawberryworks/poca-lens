import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { colors, radius, spacing, typography } from '@/theme';

const palette = colors.dark;

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Poca Lens</Text>
          <Text style={styles.title}>Mobile app foundation is ready.</Text>
          <Text style={styles.description}>
            Start building features inside the src directory with shared components,
            screens, theme tokens, and typed models.
          </Text>
          <AppButton label="Get started" onPress={() => undefined} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  card: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.xl,
  },
  eyebrow: {
    ...typography.labelSmall,
    color: palette.secondaryAccent,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  title: {
    ...typography.displayLarge,
    color: palette.textPrimary,
    marginBottom: spacing.md,
  },
  description: {
    ...typography.bodyLarge,
    color: palette.textSecondary,
    marginBottom: spacing.xl,
  },
});
