build
```bash
docker build . -t ctnelson1997/cs571-su24-hw7-api
docker push ctnelson1997/cs571-su24-hw7-api
```

run
```bash
docker pull ctnelson1997/cs571-su24-hw7-api
docker run --name=cs571_su24_hw7_api -d --restart=always -p 38107:38107 -v /cs571/su24/hw7:/cs571 ctnelson1997/cs571-su24-hw7-api
```
