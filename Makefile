SHELL := /bin/bash
PACKAGE_MANAGER ?= npm
RUN := $(PACKAGE_MANAGER) run

.PHONY: help install dev build start lint clean cf-build cf-preview cf-deploy

help: ## Show available targets with a short description.
	@printf "Usage:\n  make <target>\n\nTargets:\n"
	@grep -E '^[a-zA-Z_-]+:.*?##' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

install: ## Install dependencies via the selected package manager.
	$(PACKAGE_MANAGER) install

dev: ## Start the Next.js dev server (defaults to http://localhost:3000).
	$(RUN) dev

build: ## Build the production bundle.
	$(RUN) build

start: ## Run the production server (expects `make build` to have run).
	$(RUN) start

lint: ## Lint the project with ESLint.
	$(RUN) lint

clean: ## Remove local build artifacts.
	rm -rf .next

cf-build: ## Build Next.js for Cloudflare Pages (outputs to .vercel/output).
	$(RUN) cf:build

cf-preview: ## Run Cloudflare Pages dev server with live reload (requires `wrangler`).
	$(RUN) cf:preview

cf-deploy: ## Deploy the latest build to Cloudflare Pages.
	$(RUN) cf:deploy
