FROM nginx:1.25-alpine
COPY index.html styles.css app.js import_template.csv /usr/share/nginx/html/
COPY IMPLEMENTATION_PLAN.md README.md /usr/share/nginx/html/
EXPOSE 80
