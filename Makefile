HUGO ?= hugo
HUGO_FLAGS ?=
LOCAL_OINK ?= ../oink
DEV_SEARCH ?= false

default: dev

d:dev
# Fast preview: local OINK, HTML + Markdown only, in-memory rendering.
# Use `make dev DEV_SEARCH=true` when testing the local search experience.
dev:
	@test -f "$(LOCAL_OINK)/go.mod" || { echo "local OINK not found: $(abspath $(LOCAL_OINK))" >&2; exit 1; }
	HUGO_MODULE_REPLACEMENTS="github.com/pgsty/oink -> $(abspath $(LOCAL_OINK))" \
	HUGOxPARAMSxOFFLINE_SEARCH=$(DEV_SEARCH) \
	HUGOxPARAMSxOFFLINE_SEARCH_ON_SERVE=$(DEV_SEARCH) \
	$(HUGO) serve --ignoreVendorPaths "**" --disableKinds RSS,sitemap \
		--enableGitInfo=false --renderSegments dev --renderToMemory $(HUGO_FLAGS)

v:view
# Fidelity preview: locked OINK and the site's normal output configuration.
view:
	$(HUGO) serve --ignoreVendorPaths "**" $(HUGO_FLAGS)

# Production-environment preview with the OINK version pinned in go.mod.
serve:
	$(HUGO) serve --ignoreVendorPaths "**" --environment production --minify \
		--disableFastRender --disableLiveReload $(HUGO_FLAGS)

b:build
build:
	$(HUGO) build --ignoreVendorPaths "**" --minify

c: check
check:
	python3 bin/check-markdown.py README.md
	python3 bin/check-markdown.py content
	GOWORK=off go mod verify
	GOWORK=off $(HUGO) build --ignoreVendorPaths "**" --cleanDestinationDir \
		--printPathWarnings --printI18nWarnings --panicOnWarning
	python3 bin/check-markdown.py --rendered public
	python3 bin/check_internal_links.py public

s: sync
sync:
	rsync -avz public/ jp:/data/web/pigsty.cc/

.PHONY: default d dev v view serve b build c check s sync
