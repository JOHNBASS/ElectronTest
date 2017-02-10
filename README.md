install 套件  </br>
cmd : npm i electron-prebuilt --save-dev  </br>
</br>
install 包成安裝檔套件 </br>
cmd : npm i electron-packager --save-dev  </br>
</br>
install 包成安裝檔套件 </br>
cmd : npm i asar --save-dev  </br>
</br>
package.json 改寫  </br>
"scripts": {</br>
    "start": "electron .",</br>
    "build": "electron-packager . MyDesktopApp"</br>
}</br>
</br>
安裝套件</br>
cmd : npm install</br>
</br>
執行</br>
cmd : npm start</br>
出build</br>
cmd : npm run build</br>
</br>
# Windows  x64</br>
npm run build_win32</br>
</br></br>
# MAC OS X </br>
npm run build_mac
</br></br>
# LINUX</br>
npm run build_linux</br>
