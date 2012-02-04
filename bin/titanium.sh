#!/bin/bash

PROJECT_NAME=${PROJECT_NAME}
PROJECT_ROOT=${PROJECT_ROOT:-../}
APP_DEVICE=${DEVICE_TYPE}
IPHONE_SDK_VERSION="4.3"
TI_SDK_VERSION="1.8.1"
TI_DIR="/Users/Jenkins/Library/Application\ Support/Titanium"
TI_ASSETS_DIR="${TI_DIR}/mobilesdk/osx/${TI_SDK_VERSION}"
TI_IPHONE_DIR="${TI_ASSETS_DIR}/iphone"
TI_BUILD="${TI_IPHONE_DIR}/builder.py"
TITANIUM="/Users/Jenkins/Library/Application\ Support/Titanium/mobilesdk/osx/${TI_SDK_VERSION}/titanium.py"
PROVISIONING="\"7BCDB689-899E-43EC-B6EB-0804AB31B87C\""
MY_PROFILE="\"Chris Moultrie\"" 

if [ "PROJECT_NAME" == "" ]; then
	echo "[ERROR] Please inform PROJECT_NAME."
	exit 1
fi

if [ "DEVICE_TYPE" == "" ]; then
	echo "[ERROR] Please inform DEVICE_TYPE ('ipad' or 'iphone')."
	exit 1
fi

# Get APP parameters from current tiapp.xml
APP_ID=`cat tiapp.xml | grep "<id>" | sed -e "s/<\/*id>//g"`
#APP_NAME=`cat tiapp.xml | grep "<name>" | sed -e "s/<\/*name>//g"`

if [ "APP_ID" == "" ] || [ "APP_NAME" == "" ]; then
	echo "[ERROR] Could not obtain APP parameters from tiapp.xml file (does the file exist?)."
	exit 1
fi

bash -c "${TI_BUILD} install ${IPHONE_SDK_VERSION} ${PROJECT_ROOT}/workspace/ ${APP_ID} \"MJR Theatres\" ${PROVISIONING} ${MY_PROFILE} iphone" \
	| perl -pe 's/^\[DEBUG\].*$/\e[35m$&\e[0m/g;s/^\[INFO\].*$/\e[36m$&\e[0m/g;s/^\[WARN\].*$/\e[33m$&\e[0m/g;s/^\[ERROR\].*$/\e[31m$&\e[0m/g;'

# killall "iPhone Simulator"
