{
  "name": "joplin-plugin-selectedtext-to-WebSearchEngine",
  "version": "1.0.0",
  "scripts": {
    "dist": "webpack --env joplin-plugin-config=buildMain && webpack --env joplin-plugin-config=buildExtraScripts && webpack --env joplin-plugin-config=createArchive",
    "prepare": "npm run dist",
    "updateVersion": "webpack --env joplin-plugin-config=updateVersion",
    "update": "npm install -g generator-joplin && yo joplin --node-package-manager npm --update --force"
  },
  "license": "MIT",
  "keywords": [
    "joplin-plugin"
  ],
  "files": [
    "publish"
  ],
  "devDependencies": {
    "@types/node": "^18.7.13",
    "chalk": "^4.1.0",
    "copy-webpack-plugin": "^11.0.0",
    "fs-extra": "^10.1.0",
    "glob": "^8.0.3",
    "tar": "^6.1.11",
    "ts-loader": "^9.3.1",
    "typescript": "^4.8.2",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "@joplin/lib": "~2.9"
  }
}
