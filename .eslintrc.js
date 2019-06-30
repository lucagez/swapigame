module.exports = {
    "env": {
        "browser": true,
    },
    "globals": {
        "describe": true,
        "it": true,
        "cy": true,
    },
    "rules": {
        "react/forbid-prop-types": "off",
        "react/no-array-index-key": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "import/no-extraneous-dependencies": "off",
    },
    "extends": "airbnb"
};