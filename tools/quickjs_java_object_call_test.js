Java.ready(function() {
    console.log("[test] Java.ready fired");

    var Activity = Java.use("android.app.Activity");
    Activity.onResume.impl = function(ctx) {
        console.log("[test] typeof thisObj=" + (typeof ctx.thisObj));
        console.log("[test] typeof thisObj.$call=" + (typeof ctx.thisObj.$call));
        console.log("[test] typeof thisObj.getApplicationContext=" + (typeof ctx.thisObj.getApplicationContext));

        var appCtxExplicit = ctx.thisObj.$call(
            "getApplicationContext",
            "()Landroid/content/Context;"
        );
        var pkgExplicit = appCtxExplicit.$call(
            "getPackageName",
            "()Ljava/lang/String;"
        );
        console.log("[test] explicit chained package=" + pkgExplicit);

        var appCtxImplicit = ctx.thisObj.getApplicationContext();
        var pkgImplicit = appCtxImplicit.getPackageName();
        console.log("[test] implicit chained package=" + pkgImplicit);
        return ctx.callOriginal();
    };

    console.log("[test] hook installed: android.app.Activity.onResume");
});
