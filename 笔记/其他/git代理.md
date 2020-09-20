# `git` 代理设置



代理软件中查看 `socket5` 代理端口，在命令中使用该端口



### https 方式 clone 代码

```bash
git config --global http.proxy 'socks5h://127.0.0.1:1080'
git config --global https.proxy 'socks5h://127.0.0.1:1080'
```

或者

```bash
git config --global http.proxy 'socks5h://127.0.0.1:1086'
git config --global https.proxy 'socks5h://127.0.0.1:1086'
```

代理软件使用的端口不同，但大多是 `1080` 或者 `1086`



### ssh 方式 clone 代码

修改本机的 `~/.ssh/config`，在其中添加一条记录。

```bash
vi ~/.ssh/config
Host github.com
  ProxyCommand nc -v -x 127.0.0.1:1086 %h %p
```

然后 `:wq` 保存退出，查看结果。

如果没有 `.ssh`，则手动创建一个即可

```shell
mkdir ~/.ssh
```

设置完毕