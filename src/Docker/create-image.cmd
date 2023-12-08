docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tabl_chast8/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tabl_chast8/app ../..
