module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // React Rules
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    
    // Custom Rules
    'no-underscore-dangle': ['error', { 
      allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'] 
    }],
    'max-len': ['warn', { code: 120, ignoreUrls: true }],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to', 'hrefLeft', 'hrefRight'],
      aspects: ['noHref', 'invalidHref', 'preferButton']
    }],
  }
};