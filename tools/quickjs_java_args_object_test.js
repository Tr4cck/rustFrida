var ContextWrapper = Java.use("android.content.ContextWrapper");

ContextWrapper.attachBaseContext.overload("(Landroid/content/Context;)V").impl = function(ctx) {
    console.log("[args-test] typeof args[0]=" + (typeof ctx.args[0]));
    console.log("[args-test] typeof args[0].$call=" + (typeof ctx.args[0].$call));
    console.log("[args-test] typeof args[0].getPackageName=" + (typeof ctx.args[0].getPackageName));

    var pkgExplicit = ctx.args[0].$call(
        "getPackageName",
        "()Ljava/lang/String;"
    );
    console.log("[args-test] explicit package=" + pkgExplicit);

    var pkgImplicit = ctx.args[0].getPackageName();
    console.log("[args-test] implicit package=" + pkgImplicit);

    return ctx.callOriginal();
};

console.log("[args-test] hook installed: android.content.ContextWrapper.attachBaseContext");
