import type { Config } from "jest"

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: { "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }] },
    testMatch: ["**/?(*.)+(test).[tj]s?(x)"]
}
export default config
