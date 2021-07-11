module.exports = async () => {
    return {
        roots: ["<rootDir>/src"],
        transform: {".*\.(tsx?)$": "ts-jest"},
        testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
        moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
        moduleNameMapper: {
            "\.(css|jpg|png|svg)$": "<rootDir>/empty-module.js",
        },
        verbose: true,
        setupFilesAfterEnv: ["<rootDir>/jestSetupTests.ts"]
    };
}



