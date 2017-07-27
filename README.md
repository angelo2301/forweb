-	generar llave publica

```sh
ssh-keygen -t rsa -C suCorreo@suCorreo.com
```

-	crear repositorio

```sh
echo "# forweb" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:angelo2301/forweb.git
git push -u origin master
```
