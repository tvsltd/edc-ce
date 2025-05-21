#!/bin/bash

# Keycloak configuration
KEYCLOAK_URL="http://localhost:8080"
REALM="default-realm"
TOKEN_ENDPOINT="${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token"

# Client credentials
CLIENT_ID="default-client"
CLIENT_SECRET="wJcfhf5uXynRcAHy5Ua9KAwM4EhsFvC1"

curl -X POST \
  "${TOKEN_ENDPOINT}" \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=client_credentials' \
  --data-urlencode "client_id=${CLIENT_ID}" \
  --data-urlencode "client_secret=${CLIENT_SECRET}"
