const { exec } = require("child_process");

function run(cmd) {
    return new Promise((resolve)=>{
        exec(cmd,(err,stdout,stderr)=>{
            resolve({
                err,
                stdout,
                stderr
            });
        });
    });
}


(async()=>{

    // console.log("Surge config updated");

    let result = await run(
        "/Users/lemione/.config/singbox/singbox_connfig_update.sh"
    );

    if(result.err){
        $notification.post(
            "Sing-Box配置同步失败",
            "",
            result.stderr
        );
    }else{
        $notification.post(
            "Sing-Box配置同步完成",
            "",
            result.stdout
        );
    }

    $done();

})();
