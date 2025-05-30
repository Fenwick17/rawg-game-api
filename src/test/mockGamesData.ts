import { Game } from '../types/gamesData';

export const mockGamesData: Game[] = [
  {
    id: 1,
    title: 'The Last of Us Part II',
    platforms: ['PS4', 'PS5'],
    genre: 'Action',
    accessibility: [
      {
        category: 'visual',
        features: [
          {
            key: 'colorblind_mode',
            name: 'Colorblind Mode',
            levelInfo: {
              level: 'customizable',
              notes: 'Multiple filters with test screen previews',
            },
          },
          {
            key: 'subtitles',
            name: 'Subtitles',
            levelInfo: {
              level: 'advanced',
              notes: 'Size, color, speaker labels, background opacity',
            },
          },
        ],
      },
      {
        category: 'controls',
        features: [
          {
            key: 'remappable_controls',
            name: 'Remappable Controls',
            levelInfo: {
              level: 'customizable',
              notes: 'Remap every input including gestures',
            },
          },
          {
            key: 'one_handed_mode',
            name: 'One-Handed Mode',
            levelInfo: {
              level: 'customizable',
              notes: 'Preset layouts + remapping',
            },
          },
        ],
      },
      {
        category: 'audio',
        features: [
          {
            key: 'narration',
            name: 'Narration',
            levelInfo: {
              level: 'advanced',
              notes: 'Menus, HUD, and gameplay narration',
            },
          },
        ],
      },
      {
        category: 'gameplay',
        features: [
          {
            key: 'difficulty_options',
            name: 'Difficulty Options',
            levelInfo: {
              level: 'customizable',
              notes:
                'Individual sliders for enemy aggression, aim assist, stealth',
            },
          },
          {
            key: 'qte_toggle',
            name: 'QTE Toggle',
            levelInfo: {
              level: 'basic',
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Stardew Valley',
    platforms: ['PC', 'Switch', 'Xbox', 'PS5'],
    genre: 'Simulation',
    accessibility: [
      {
        category: 'visual',
        features: [
          {
            key: 'subtitles',
            name: 'Subtitles',
            levelInfo: {
              level: 'basic',
            },
          },
        ],
      },
      {
        category: 'controls',
        features: [
          {
            key: 'remappable_controls',
            name: 'Remappable Controls',
            levelInfo: {
              level: 'basic',
              notes: 'Keyboard + controller mapping',
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'God of War Ragnarok',
    platforms: ['PS5'],
    genre: 'Action',
    accessibility: [
      {
        category: 'visual',
        features: [
          {
            key: 'colorblind_mode',
            name: 'Colorblind Mode',
            levelInfo: {
              level: 'customizable',
              notes: 'Protanopia, Deuteranopia, Tritanopia filters',
            },
          },
          {
            key: 'subtitles',
            name: 'Subtitles',
            levelInfo: {
              level: 'customizable',
              notes: 'Fonts, color, speaker names, scaling',
            },
          },
        ],
      },
      {
        category: 'controls',
        features: [
          {
            key: 'remappable_controls',
            name: 'Remappable Controls',
            levelInfo: {
              level: 'customizable',
              notes: 'Full control + UI remap',
            },
          },
        ],
      },
      {
        category: 'gameplay',
        features: [
          {
            key: 'difficulty_options',
            name: 'Difficulty Options',
            levelInfo: {
              level: 'advanced',
              notes: 'Accessible mode, puzzle timing assists',
            },
          },
          {
            key: 'qte_toggle',
            name: 'QTE Toggle',
            levelInfo: {
              level: 'basic',
            },
          },
        ],
      },
      {
        category: 'audio',
        features: [
          {
            key: 'narration',
            name: 'Narration',
            levelInfo: {
              level: 'advanced',
              notes: 'Menu narration + screen reader support',
            },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Celeste',
    platforms: ['PC', 'Switch', 'Xbox', 'PS5'],
    genre: 'Platformer',
    accessibility: [
      {
        category: 'controls',
        features: [
          {
            key: 'remappable_controls',
            name: 'Remappable Controls',
            levelInfo: {
              level: 'advanced',
              notes: 'Full keyboard/controller support',
            },
          },
          {
            key: 'one_handed_mode',
            name: 'One-Handed Mode',
            levelInfo: {
              level: 'basic',
              notes: 'Preset input scheme available',
            },
          },
        ],
      },
      {
        category: 'gameplay',
        features: [
          {
            key: 'difficulty_options',
            name: 'Difficulty Options',
            levelInfo: {
              level: 'customizable',
              notes:
                'Assist Mode with toggle options: invincibility, game speed',
            },
          },
        ],
      },
    ],
  },
];
