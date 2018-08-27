module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "plugins": ["protractor"],
    "extends": "plugin:protractor/recommended",
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "rules": {
        "curly": "error",
        "eol-last": ["error", "always"],
        "default-case": "error",
        "no-eq-null": "error",
        "no-empty-function": "error",
        "no-lone-blocks": "error",
        "no-multi-spaces": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "space-before-blocks": "error",
        "indent": [2, 4, {"SwitchCase": 1}],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};