#!/bin/bash

echo "What should be the name, bootstrap will be added to name."
read name
echo "Title for the component"
read title
echo "Small Description"
read description
name=`echo "print '$name'.lower()" | python`
tag=`echo "print '$name'.capitalize()" | python`
ng g c uigallery/bootstrap$name --skip-tests=true
file="src/app/uigallery/bootstrap$name/jennie.conf.json"
echo '{
    "type": "bootstrap-ui-gallery",
    "name": "bootstrap'$name'",
    "title": "'$title'",
    "description": "'$description'",
    "tag": "'$tag'"
}' > src/app/uigallery/bootstrap$name/jennie.conf.json