#!/bin/bash

# Keycloak configuration based on default-realm-import.json
# Realm: default-realm
# Client: default-client (service account enabled)
# Token lifespan: 300 seconds (5 minutes)
KEYCLOAK_URL="https://kc-dtr-int-sovity.tvsdevops.co.uk"
REALM="default-realm"
TOKEN_ENDPOINT="${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token"

# Client credentials from default-realm-import.json
CLIENT_ID="default-client"
CLIENT_SECRET="wJcfhf5uXynRcAHy5Ua9KAwM4EhsFvC1"

# Add verbose output for debugging
# echo "Requesting token from: ${TOKEN_ENDPOINT}"

# Make the request
curl -X POST \
  "${TOKEN_ENDPOINT}" \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'grant_type=client_credentials' \
  --data-urlencode "client_id=${CLIENT_ID}" \
  --data-urlencode "client_secret=${CLIENT_SECRET}"

# Add newline for better output formatting
echo
