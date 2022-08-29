module.exports = {
  $schema: 'https://docs.renovatebot.com/renovate-schema.json',
  extends: ['config:base'],
  packageRules: [
    {
      matchDepTypes: ['devDependencies'],
      automerge: true,
      platformAutomerge: true,
      prPriority: -1,
      separateMinorPatch: true,
    },
    {
      groupName: 'babel',
      matchPackagePrefixes: ['@babel/', 'babel-'],
    },
    {
      groupName: 'eslint',
      matchPackagePrefixes: ['eslint'],
    },
    {
      groupName: 'jest',
      matchPackagePrefixes: ['jest'],
    },
    {
      groupName: 'react-native-firebase',
      matchPackagePrefixes: ['@react-native-firebase'],
    },
    {
      groupName: 'react-navigation',
      matchPackagePrefixes: ['@react-navigation'],
    },
    {
      groupName: 'react-native',
      matchPackageNames: ['react-native', '@types/react-native'],
      separateMinorPatch: true,
    },
    {
      groupName: 'react',
      matchPackageNames: [
        'react',
        '@types/react',
        '@types/react-test-renderer',
        'react-test-renderer',
      ],
      separateMinorPatch: true,
    },
    {
      matchPackagePatterns: 'react-native',
      postUpgradeTasks: {
        commands: ['yarn install', 'npx pod-install ios'],
        fileFilters: ['ios/Podfile.lock'],
        executionMode: 'update',
      },
    },
  ],
  fetchReleaseNotes: true,
  prConcurrentLimit: 20,
  pruneBranchAfterAutomerge: true,
  platformAutomerge: true,
  automergeType: 'pr',
  enabledManagers: ['npm'],
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
  },
  allowedPostUpgradeCommands: ['*'],
  repositories: ['ilia-kurganskii/react-native-showcase-app'],
};
