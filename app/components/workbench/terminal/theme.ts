import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--vime-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--vime-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--vime-elements-terminal-textColor'),
    background: cssVar('--vime-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--vime-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--vime-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--vime-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--vime-elements-terminal-color-black'),
    red: cssVar('--vime-elements-terminal-color-red'),
    green: cssVar('--vime-elements-terminal-color-green'),
    yellow: cssVar('--vime-elements-terminal-color-yellow'),
    blue: cssVar('--vime-elements-terminal-color-blue'),
    magenta: cssVar('--vime-elements-terminal-color-magenta'),
    cyan: cssVar('--vime-elements-terminal-color-cyan'),
    white: cssVar('--vime-elements-terminal-color-white'),
    brightBlack: cssVar('--vime-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--vime-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--vime-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--vime-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--vime-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--vime-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--vime-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--vime-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
