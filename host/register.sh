#!/usr/bin/env bash

BASE_PATH=$(cd `dirname $0`; pwd)
extensionID=${1}

CHROME_NATIVE_MESSAGE_PATH="$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts"

HOST_NAME=com.github.eks5115.shell.chrome.extension

HOST_PATH=${BASE_PATH}/${HOST_NAME}.js
HOST_MANIFEST_PATH=${BASE_PATH}/${HOST_NAME}.json

HOST_CHROME_PATH=${CHROME_NATIVE_MESSAGE_PATH}/${HOST_NAME}.js

ESCAPED_HOST_CHROME_PATH=${HOST_CHROME_PATH////\\/}
sed -i '' "/path/{s/.*/  \"path\":\"${ESCAPED_HOST_CHROME_PATH}\",/;}" ${HOST_MANIFEST_PATH}
sed -i '' "/chrome-extension/{s/.*/    \"chrome-extension:\/\/${extensionID}\/\"/;}" ${HOST_MANIFEST_PATH}

cp ${HOST_PATH} "${CHROME_NATIVE_MESSAGE_PATH}"
cp ${HOST_MANIFEST_PATH} "${CHROME_NATIVE_MESSAGE_PATH}"
chmod +x "${HOST_CHROME_PATH}"
