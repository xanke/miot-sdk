
### 安装 NodeJS
安装 NodeJS: https://nodejs.org/ 10.15.3 LTS

根目录下执行 npm install 然后 npm run start


### 连接安卓

安装 adb: https://dl.pconline.com.cn/download/359035.html

安卓配置好开发者模式，数据线连接电脑

打开命令行 adb nodaemon server

再打开一个命令行 adb reverse tcp:8081 tcp:8081

### 安装小米开发者版

https://github.com/xanke/miot-sdk/blob/master/SmartHome_debug.apk

进入我的 -> 开发者选项 -> RN设备插件调试设置

开启设备 rn 调试，插件包名和设备model: edc.bhf_light.bhf01