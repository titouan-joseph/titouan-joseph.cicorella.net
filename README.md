# titouan-joseph.revol.site

Source code of my website [check it](http://titouan-joseph.cicorella.net)

Auto deploy on swarm cluster :
 - On push : github workflow build a docker image and push to a private registry
 - On swarm manager, every minute, the cluster check new image from the registry (technically with a cron task and `docker service update --image ` command )

Command use in swarm to run
```bash
docker service create \
--name portfolio \
--label "traefik.enable=true" \
--label "traefik.http.routers.portfolio.tls=true" \
--label "traefik.http.routers.portfolio.rule=Host(\`titouan-joseph.cicorella.net\`) || Host(\`www.titouan-joseph.cicorella.net\`) || Host(\`tit.cicorella.net\`)" \
--label "traefik.http.routers.portfolio.tls.certresolver=le" \
--label "traefik.http.routers.portfolio.entrypoints=websecure" \
--label "traefik.http.services.portfolio.loadbalancer.server.port=80" \
--network traefik-public \
127.0.0.1:5000/portfolio:latest
```
