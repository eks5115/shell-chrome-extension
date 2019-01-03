# shell-chrome-extension

Shell for Chrome Extension

## Install

### Build project

```
run npm prod
```

### Add Chrome Extension

1. Open `Google Chrome` and enter <chrome://extensions/>
2. Enable `Developer mode`
3. Load unpacked extension `./dist`
4. Get extensionId 

### Native messaging host

```
chmod +x ./host/register.sh && ./host/register.sh <extensionId>
```
