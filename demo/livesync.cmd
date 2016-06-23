@ECHO OFF
CLS

CALL tns plugin remove nativescript-applist
CALL tns plugin add ..\plugin

CALL tns livesync --watch
