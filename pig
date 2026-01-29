#!/bin/bash
set -euo pipefail
#==============================================================#
# File      :   pig
# Desc      :   download & install pig cli
# Mtime     :   2026-01-27
# Path      :   https://repo.pigsty.cc/pig (china region)
# Usage     :   curl -fsSL https://repo.pigsty.cc/pig | bash
# Deps      :   curl
# License   :   Apache-2.0
# Copyright :   2018-2025  Ruohang Feng / Vonng (rh@vonng.com)
#==============================================================#
readonly DEFAULT_VERSION=1.0.0
readonly BASEURL="https://repo.pigsty.cc"

# To install the latest version of pig
# curl -fsSL https://repo.pigsty.cc/pig | bash

# To install a specific version of pig
# curl -fsSL https://repo.pigsty.cc/pig | bash -s 1.0.0

#--------------------------------------------------------------#
# Log Util
#--------------------------------------------------------------#
__CN='\033[0m';__CB='\033[0;30m';__CR='\033[0;31m';__CG='\033[0;32m';
__CY='\033[0;33m';__CB='\033[0;34m';__CM='\033[0;35m';__CC='\033[0;36m';__CW='\033[0;37m';
log_info() { printf "[${__CG}INFO${__CN}] ${__CG}%s${__CN}\n" "$*"; }
log_warn() { printf "[${__CY}WARN${__CN}] ${__CY}%s${__CN}\n" "$*"; }
log_error() { printf "[${__CR}FAIL${__CN}] ${__CR}%s${__CN}\n" "$*"; }
log_hint() { printf "${__CB}%s${__CN}" "$*"; }

#--------------------------------------------------------------#
# Param
#--------------------------------------------------------------#
OS_PACKAGE=""
ARCH=$(uname -m)
DOWNLOAD_URL=""
DOWNLOAD_TO=""
FILENAME=""
SUDO_CMD=""

# Detect if running as root
[[ $EUID -eq 0 ]] || SUDO_CMD="sudo"

# arg1 > env > default (strip 'v' prefix if present)
if [[ -n "${1:-}" ]]; then
    VERSION="${1#v}"  # Strip leading 'v' if present
elif [[ -n "${PIG_VERSION:-}" ]]; then
    VERSION="${PIG_VERSION#v}"  # Strip leading 'v' if present
else
    VERSION=${DEFAULT_VERSION}
fi


#----------------------------------------------#
# System checks
#----------------------------------------------#
check_system() {
    # Check kernel
    local kernel_name=$(uname -s)
    [[ "${kernel_name}" == "Linux" ]] || {
        log_error "kernel = ${kernel_name}, not supported, Linux only"
        exit 1
    }
    log_info "kernel = ${kernel_name}"

    # Check architecture
    case "${ARCH}" in
        x86_64|aarch64)
            log_info "machine = ${ARCH}"
            ;;
        *)
            log_error "machine = ${ARCH}, not supported, x86_64/aarch64 only"
            exit 2
            ;;
    esac

    # Check package manager
    if command -v dpkg >/dev/null 2>&1; then
        OS_PACKAGE="deb"
    elif command -v rpm >/dev/null 2>&1; then
        OS_PACKAGE="rpm"
    else
        log_error "fail to determine os package type (rpm/deb)"
        exit 3
    fi
    log_info "package = ${OS_PACKAGE}"
}

#--------------------------------------------------------------#
# Build download URL
#--------------------------------------------------------------#
build_download_url() {
    local arch_suffix=""

    # Map architecture to package naming
    case "${OS_PACKAGE}" in
        rpm)
            arch_suffix="${ARCH}"
            FILENAME="pig-${VERSION}-1.${arch_suffix}.rpm"
            ;;
        deb)
            [[ "${ARCH}" == "x86_64" ]] && arch_suffix="amd64" || arch_suffix="arm64"
            FILENAME="pig_${VERSION}-1_${arch_suffix}.deb"
            ;;
    esac

    DOWNLOAD_URL="${BASEURL}/pkg/pig/v${VERSION}/${FILENAME}"
    DOWNLOAD_TO="/tmp/${FILENAME}"
    log_info "pkg_url = ${DOWNLOAD_URL}"
    log_info "download = ${DOWNLOAD_TO}"
}

#--------------------------------------------------------------#
# Download file (skip if exists with same size)
#--------------------------------------------------------------#
download_file() {
    local url=$1
    local dest=$2

    # Check if file exists with same size
    if [[ -f "${dest}" ]]; then
        local local_size remote_size
        local_size=$(stat -c %s "${dest}" 2>/dev/null || stat -f %z "${dest}" 2>/dev/null || echo 0)
        remote_size=$(curl -fsLI "${url}" | grep -i 'Content-Length' | awk '{print $2}' | tr -d '\r\n')

        if [[ -n "${remote_size}" && "${local_size}" -eq "${remote_size}" ]]; then
            log_warn "file exists with same size (${local_size} bytes), skip download"
            return 0
        fi
    fi

    log_hint "curl -fSL ${url} -o ${dest}"
    echo ""
    curl -# -fSL "${url}" -o "${dest}" || {
        log_error "fail to download ${url}"
        exit 4
    }
}

#--------------------------------------------------------------#
# Install package
#--------------------------------------------------------------#
install_package() {
    local install_cmd=""

    case "${OS_PACKAGE}" in
        rpm)
            install_cmd="rpm -ivh ${DOWNLOAD_TO}"
            ;;
        deb)
            install_cmd="dpkg -i ${DOWNLOAD_TO}"
            ;;
    esac

    # Add sudo if not root
    [[ -n "${SUDO_CMD}" ]] && install_cmd="${SUDO_CMD} ${install_cmd}"

    log_info "installing: ${install_cmd}"
    eval "${install_cmd}" || {
        log_error "fail to install ${FILENAME}"
        exit 5
    }
}

#--------------------------------------------------------------#
# Main
#--------------------------------------------------------------#
main() {
    # System checks
    check_system
    build_download_url

    # Download package
    log_info "downloading pig v${VERSION}"
    download_file "${DOWNLOAD_URL}" "${DOWNLOAD_TO}"

    # Verify download
    if [[ -f "${DOWNLOAD_TO}" ]]; then
        log_info "md5sum = $(md5sum "${DOWNLOAD_TO}" | cut -d' ' -f1)"
    else
        log_error "download file not found: ${DOWNLOAD_TO}"
        exit 4
    fi

    # Install package
    install_package

    log_info "pig v${VERSION} installed successfully"
    log_hint "check https://pgext.cloud for details"
    echo ""
}

# Run main with error handling
main "$@"