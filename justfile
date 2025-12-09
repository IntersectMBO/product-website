default:
    @just --list

# Autoformat project tree
fmt:
    treefmt

# Run local server
run:
    npm start

# Build static site
build:
    npm run build

serve:
    npm run serve

clear:
    npm run clear

# Install npm dependencies
setup:
    npm install
