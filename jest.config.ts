import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testTimeout: 20000
};
export default config;

// Or async function
export async function getConfig(): Promise<Config.InitialOptions> {
  return {
    verbose: true,
    testTimeout: 20000
  };
}
