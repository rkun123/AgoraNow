# AgoraNow
**Lerning Agora Status Sharing System**

## Server
- Django on Python3
- runing
`redis-server --port 6370`
`python manager.py runserver`

## Web Client
`static/dist`フォルダ内に展開。
dist内はStaticなファイルとして公開されるファイル。
クライアントのJSは、`npm run build`でbrowserfyによるバンドルとbabelによるes6 -> es5が行われるのでJS変更後は`npm run build`を必ずすること。  
watcherの導入もしてほしいです。
Watcher導入の際にはPRしてください。

## その他変更
基本PRでお願いします。
もちろん自分でコードかけないとか（かきたくないとか）の人はissueをどんどん建ててもらって。

