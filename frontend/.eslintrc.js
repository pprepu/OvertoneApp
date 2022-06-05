module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "import", "react", "jest"
    ],
    "root": true, 
    "rules": {
        "indent": [
            "error",
            2
          ],
        "quotes": [
            "error",
            "single"
          ],
        "semi": [
            "error",
            "never"
          ],
        "object-curly-spacing": [
            "error", "always"
          ],
        "arrow-spacing": [
            "error", { "before": true, "after": true }
          ],
        "no-trailing-spaces": "error"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}