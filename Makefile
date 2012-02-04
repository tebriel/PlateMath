PROJECT_ROOT=$(shell dirname `pwd`)
PROJECT_NAME=Application
HOME=/Users/Jenkins

install:
	@echo ${PROJECT_ROOT}
	@echo "Unlocking keychain"
	@security unlock-keychain -p "123456" ${HOME}/Library/Keychains/login.keychain
	@security list-keychains -s ${HOME}/Library/Keychains/login.keychain
	@echo "Building with Titanium..."
	@rm -rf ${PROJECT_ROOT}/${PROJECT_NAME}/build/iphone/
	@mkdir -p ${PROJECT_ROOT}/${PROJECT_NAME}/build/iphone/
	@PROJECT_NAME=${PROJECT_NAME} PROJECT_ROOT=${PROJECT_ROOT} DEVICE_TYPE=iphone bash ${PROJECT_ROOT}/bin/titanium.sh
