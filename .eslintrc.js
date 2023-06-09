module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [
      "**/*_.js",
      "**/*_/*.js"
    ],
    "rules": {
    },
    "settings": {
      "import/ignore": [
        "^https?://"
      ]
    }
}
