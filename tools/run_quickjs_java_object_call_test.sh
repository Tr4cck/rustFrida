#!/system/bin/sh

set -eu

export TMPDIR=/data/local/tmp

am force-stop com.android.settings >/dev/null 2>&1 || true
am start -W -n com.android.settings/.Settings >/dev/null 2>&1
sleep 2

(
    sleep 6
    am start -W -n com.android.settings/.Settings >/dev/null 2>&1
    sleep 6
    echo exit
) | /data/local/tmp/rustfrida --name com.android.settings -l /data/local/tmp/quickjs_java_object_call_test.js
